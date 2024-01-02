import Image from "next/image";
import Link from "next/link";

const { default: Navbar } = require("@/components/navbar");

const Home = () => {
  return (
    <>
      <div className="md:container md:mx-auto py-1 bg-white">
        <div className="grid grid-cols-3 gap-1 p-1">
          {/* Block 1 */}
          <div className="bg-gray-200 p-4 rounded-lg relative overflow-hidden h-80 sm:h-48 lg:h-64">
            <div className="absolute inset-0">
              <Image
                src="/images/1.jpg"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 flex justify-center items-end m-1">
                <Link legacyBehavior href="/">
                  <a className="bg-transparent border-2 font-extrabold text-white px-2 py-1 rounded-lg text-center">
                    Make Reservation
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Block 2 */}
          <div className="bg-gray-200 p-4 rounded-lg font-extrabold relative overflow-hidden h-80 sm:h-48 lg:h-64">
            <div className="absolute inset-0">
              <Image
                src="/images/2.jpg"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 flex justify-center items-end m-1">
                <Link legacyBehavior href="/">
                  <a className="bg-transparent border-2 font-extrabold text-white px-2 py-1 rounded-lg text-center">
                    Make Reservation
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Block 3 */}
          <div className="bg-gray-200 p-4 rounded-lg relative overflow-hidden h-80 sm:h-48 lg:h-64">
            <div className="absolute inset-0">
              <Image
                src="/images/3.jpg"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 flex justify-center items-end m-1">
                <Link legacyBehavior href="/">
                  <a className="bg-transparent border-2 font-extrabold text-white px-2 py-1 rounded-lg text-center">
                    Make Reservation
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h1 className="flex bg-white justify-around text-black text-2xl mt-2 py-3">
            WELCOME TO THE TREEHOUSE RESORT
          </h1>
          <p className="text-xl text-center text-black bg-white">
            &quot;Story of passion, nature, and hospitality, where we create the
            perfect retreat in nature&rsquo;s embrace, inviting you to
            experience
            <br /> the beauty and tranquility of our idyllic haven.&quot;
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white">
        <Image src="/images/4.png" alt="design" height={38} width={400} />
      </div>

      <div className="grid grid-cols-3 gap-0  ">
        <div className="bg-white p-4 relative overflow-hidden  h-sm:h-32 lg:h-48">
          <div className="relative">
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                width: "100px",
                height: "100px",
                left: "20%",
              }}
            >
              <Image
                src="/images/13.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 relative overflow-hidden  h-sm:h-32 lg:h-48">
          <div className="relative">
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                width: "100px",
                height: "100px",
                left: "35%",
              }}
            >
              <Image
                src="/images/12.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 relative overflow-hidden  h-sm:h-32 lg:h-48">
          <div className="relative">
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                width: "100px",
                height: "100px",
                left: "50%",
              }}
            >
              <Image
                src="/images/11.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 relative overflow-hidden  h-sm:h-32 lg:h-48">
          <div className="relative">
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                width: "100px",
                height: "100px",
                left: "20%",
              }}
            >
              <Image
                src="/images/10.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 relative overflow-hidden  h-sm:h-32 lg:h-48">
          <div className="relative">
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                width: "100px",
                height: "100px",
                left: "35%",
              }}
            >
              <Image
                src="/images/9.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 relative overflow-hidden  h-sm:h-32 lg:h-48">
          <div className="relative">
            <div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                width: "100px",
                height: "100px",
                left: "50%",
              }}
            >
              <Image
                src="/images/14.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-3xl mx-auto m-2 text-center italic text-2xl text-white p-4 bg-cover md:bg-contain bg-center md:h-96 lg:h-auto"
        style={{
          backgroundImage: 'url("/images/5.jpg")',
          backgroundSize: "cover",
          minheight: "300px",
        }}
      >
        <h1 className="flex justify-center items-center p-1"> TESTIMONIAL</h1>
        <br></br>
        <p>
          &quot;Staying at the Treehouse Resort was a surreal experience.
          Surrounded by nature&rsquo;s serenity, the cozy treehouse
          accommodations and personalized service made our stay unforgettable.
          The breathtaking views and tranquil atmosphere were a perfect
          escape.&quot;
          <br></br>
          <span className="p-2 font-bold">~Edward Newgate</span>
        </p>
      </div>
      <div className="flex justify-center items-center bg-black">
        <Image src="/images/7.jpg" alt="design" height={38} width={400} />
      </div>
      <div className="grid grid-cols-2 gap-0 h-96 sm:h-64 md:h-80 lg:h-96 p-2">
        <div className=" bg-white text-black p-4  relative ">
          <Image
            src="/images/6.jpg"
            alt="photo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        {/* block-2 */}
        <div className="bg-gray-200 p-8 rounded-full relative overflow-hidden h-96 sm:h-96 lg:h-96">
          <h1 className="text-center text-black text-2 text-xl font-bold ">
            OUR STORY
          </h1>
          <p className="p-4 text-black text-center text-wrap">
            Amidst verdant woods, the Treehouse Resort offers a serene escape.
            Embraced by nature&rsquo;s tranquility, these elevated abodes
            provide panoramic views and a deep connection with the surrounding
            forest.The resort has blossomed into an eco-luxury haven.<br></br>
            Each treehouse harmonizes modern comfort with wilderness allure.
            From sunrise in the canopy to whispers of evening breezes, guests
            find solace in rustic elegance. Welcoming nature enthusiasts,
            romantics, and digital-detox seekers, it champions inclusivity.
            <br></br> Indulge in treetop dining or unwind with organic brews.
            Experience a unique harmony with nature at the Treehouse Resort—an
            elevated sanctuary for the soul.
          </p>
          <div className="absolute inset-0 flex justify-center items-end m-2">
            <Link legacyBehavior href="/">
              <a className="bg-transparent border-2 text-white px-2 py-1 rounded-lg text-center bg-red-500">
                <p>ABOUT US -&gt; </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Home;
