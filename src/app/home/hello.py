import os
import json
# pinecone
import pinecone
from dotenv import load_dotenv
from fastapi import (
    APIRouter,
    Depends,
    FastAPI,
    HTTPException,

)
from fastapi.templating import Jinja2Templates
from google.cloud import dlp_v2

# langchain
from langchain.embeddings import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
from langchain.vectorstores import Pinecone
from starlette.requests import Request
from app.utils.firebase import fetch_all_topics
from app.utils.query_data import get_topics_chain


# custom import
from app.utils.config import (
    OPENAI_API_KEY,
    PINECONE_API_ENV,
    PINECONE_API_KEY,
    index_name,
)
from app.dependencies import get_current_user

load_dotenv()

templates = Jinja2Templates(directory="templates")
# security = HTTPBearer()


app = FastAPI()

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "parentiv_service_key.json"
dlp_client = dlp_v2.DlpServiceClient()



@app.get("/get_new_topics")
async def get_topics(request: Request, user: dict = Depends(get_current_user)):
    user = user.email
    if user is not None:
        pinecone.init(api_key=PINECONE_API_KEY, environment=PINECONE_API_ENV)
        index = pinecone.Index(index_name)

        embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

        vectorstore = Pinecone(
            index=index,
            embedding_function=embeddings.embed_query,
            text_key="text",
            namespace=user,
        )
        
        existing_topics = fetch_all_topics(topic_id=user)

        # llm = OpenAI(temperature=0, openai_api_key=OPENAI_API_KEY)
        chain = get_topics_chain(vectorstore)
        question = """
                    Generate 10 topics (skills, goals, others) from the whole IEP document. Do not include any explanations and exclude technical terms/jargon 
                    only provide a  RFC8259 compliant JSON response  following this format without deviation.
                        {
                            "topic_name1": ["skills"],
                            "topic_name2": ["others"],
                            "topic_name3": ["goals"]
                        }
                        exclude the already generated topics and generate completely new ones.
                    """
        result = await chain.acall({"question": question, "chat_history": []})
        new_topics = json.loads(result["answer"])
    
        if existing_topics:
            for new_topic, topic_name in new_topics.items():
                existing_topic_names = set(existing_topics.values())

                if new_topic not in existing_topics and topic_name not in existing_topic_names:
                    existing_topics[new_topic] = topic_name

            return existing_topics
        else:
            return new_topics
    else:
        raise HTTPException(status_code=401, detail="Not Authenticated")
    