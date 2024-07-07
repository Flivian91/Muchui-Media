import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:p-8 px-2">
      <div className="container mx-auto bg-white shadow-lg md:rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc=)",
          }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              About Sammy Muchui
            </h1>
          </div>
        </div>
        <div className="p-6 md:p-12">
          <div className="text-center py-5">
            <h2 className="md:text-3xl  text-2xl font-bold text-text mb-4">
              Meet Sammy Muchui
            </h2>
            <p className="text-lg mb-6">
              Journalist, Storyteller, and Passionate Advocate for Truth
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Biography</h3>
              <p className="text-base leading-7 mb-4">
                Sammy Muchui is a seasoned journalist with a keen eye for
                uncovering the truth. With years of experience in the field,
                Sammy has reported on some of the most pressing issues of our
                time, bringing light to stories that matter. His dedication to
                integrity and authenticity has earned him a reputation as a
                trusted voice in journalism.
              </p>
              <p className="text-base leading-7">
                Sammy holds a degree in Journalism from <i className="fon-semibold">Muranga University</i> and
                has worked with various renowned media outlets. His passion for
                storytelling is matched only by his commitment to ethical
                reporting.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
              <p className="text-base leading-7 mb-4">
                At Muchui Media, our mission is to deliver insightful, accurate,
                and impactful journalism. We strive to be a beacon of truth in
                an age of misinformation, providing our audience with stories
                that inspire, inform, and provoke thoughtful discussion.
              </p>
              <p className="text-base leading-7">
                We believe in the power of journalism to effect change and hold
                those in power accountable. Our commitment to our readers is
                unwavering – we pledge to uphold the highest standards of
                journalistic integrity in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
