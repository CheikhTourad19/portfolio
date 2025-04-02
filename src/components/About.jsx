import Profile from "../assets/me copy.jpg";

function About() {
  return (
    <section
      id="about"
      className="m-6 p-8 flex flex-col md:flex-row items-center justify-center bg-gray-100 rounded-3xl shadow-lg"
    >
      {/* Profile Image */}
      <img
        src={Profile}
        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-md border-4 border-gray-300"
        alt="Mohamed Elgheith"
      />

      {/* About Text */}
      <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello! I'm{" "}
          <span className="font-semibold text-gray-900">Mohamed Elgheith</span>,
          a passionate and motivated developer currently studying Computer
          Science. I enjoy building interactive and user-friendly web
          applications and continuously improving my coding skills.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          My journey started in{" "}
          <span className="font-semibold text-gray-900">2020</span>. Right now,
          I'm focusing on mastering{" "}
          <span className="font-semibold text-gray-900">
            React, JavaScript, and Tailwind CSS
          </span>
          . I'm excited to build projects that challenge me and help me grow.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-3">
          When I'm not coding, I enjoy{" "}
          <span className="font-semibold text-gray-900">learning</span>. I love
          connecting with other developers, so feel free to reach out!
        </p>
      </div>
    </section>
  );
}

export default About;
