export const getOutput = (command, setCommand) => {
  switch (command.toLowerCase()) {
    case "help":
      return (
        <div>
          {" "}
          Available commands: <br />
          <span className="text-teal-400 ml-3"> about</span> - If your only goal
          is to stalk me, go ahead with this one :) <br />
          <span className="text-teal-400 ml-3"> socials</span> - If I seem
          interesting enough to you <br />
          <span className="text-teal-400 ml-3"> skills</span> - I guess, I am
          good at certain things <br />
          <span className="text-teal-400 ml-3"> projects</span> - I have made
          some cool stuff too ;) <br />
          <span className="text-teal-400 ml-3"> resume</span> - Checkout my
          Resume <br />
          <span className="text-teal-400 ml-3"> clear</span> - Clear the
          terminal
        </div>
      );
    case "about":
      return (
        <div>
          Hi! Thanks for stalking me, lol! <br /> I am Manthan Kasle, a
          passionate 22-year-old Web Developer and Digital Marketer based in
          Pune. I hold a degree in Software Engineering, and my journey revolves
          around crafting digital experiences.
          <br />
          <br />
          <span className="text-teal-400">In a Nutshell:</span>
          I spend my days immersed in my room, where I either embark on exciting
          new projects or dive into the endless realms of learning. My toolkit
          is minimalist but powerful – just my terminal, IDE, and browser. Oh,
          and yes, I'm a connoisseur of crafting great memes!
          <br />
          <br />
          <span className="text-teal-400">Professional Background:</span>
          With a solid foundation in Software Engineering, I bring a unique
          blend of technical prowess and creative flair to the digital
          landscape. My focus lies in web development, where I thrive on turning
          ideas into reality.
          <br />
          <br />
          <span className="text-teal-400">Personal Pursuits:</span>Beyond the
          screen, I'm a sci-fi enthusiast, with a particular penchant for
          Christopher Nolan movies. There's something magical about the way he
          weaves intricate narratives that captivate the mind.
          <br />
          <br />
          <span className="text-teal-400">Building Dreams:</span>I find immense
          joy in creating things that make a difference. Whether it's a sleek
          website or a robust digital solution, I love the journey of turning
          concepts into tangible, impactful results.
          <br />
          <br />
          <span className="text-teal-400">Life in a Snapshot:</span> <br />
          Location: Pune, India <br />
          Workspace: My room, where the magic happens <br />
          Tools of the Trade: Terminal, IDE, Browser – the essentials <br />
          Leisure Time: Crafting memes, a skill that adds a dash of humor to
          life
          <br />
          <br />
          <span className="text-teal-400">Let's Connect:</span>Let's Connect: If
          you're as passionate about technology, creativity, and meaningful
          projects as I am, let's connect. I'm always up for collaborations and
          new adventures in the digital realm.
          <br />
          Cheers to innovation, learning, and building a digital future!
          <br />
        </div>
      );
    case "socials":
      return (
        <div>
          First of all, thanks for showing interest in me! <br />
          Here are my internet coordinates - <br />
          <span className="text-purple-400 ml-3">
            <a href="https://github.com/manthanmk66">Github </a> -{" "}
          </span>
          Here you can find all my projects and contributions. <br />
          <span className="text-purple-400 ml-3">
            <a href="https://twitter.com/manthan_reddy">Twitter </a> -{" "}
          </span>
          Here, you can explore the stuff I'm currently working on. <br />
          <span className="text-purple-400 ml-3">
            <a href="https://www.linkedin.com/in/manthan-kasle-1953b2193/">
              LinkedIn{" "}
            </a>{" "}
            -{" "}
          </span>
          Here you can find my professional profile. (DMs preferred here) <br />
          <span className="text-purple-400 ml-3">
            <a href="manthankaslemk@gmail.com">Mail </a> -{" "}
          </span>
          manthankaslemk@gmail.com <br />I guess, that's all :/ , I am not very
          active on other platforms.
        </div>
      );
    case "skills":
      return (
        <div>
          <span className="text-teal-400 ml-3">Languages - </span>
          <br />
          <span className="ml-7">Java, JavaScript, C++, Dotnet </span>
          <br />
          <span className="text-teal-400 ml-3">Frameworks/Libraries - </span>
          <br />
          <span className="ml-7">
            {" "}
            ReactJS, Redux, Next.js, NodeJS, ExpressJS, SpringBoot, jQuery,
            Vanilla CSS , Tailwind CSS, shadcn/ui
          </span>
          <br />
          <span className="text-teal-400 ml-3">
            Databases/Infrastructures -{" "}
          </span>
          <br />
          <span className="ml-7">
            {" "}
            MySQL, MongoDB, Docker, AWS EC2 ,VCS-Git
          </span>
        </div>
      );
    case "projects":
      return (
        <div>
          <span className="text-teal-400 ml-3">1. </span>
          <a
            className="text-purple-400"
            href="https://riderspoint.vercel.app/"
            target="_blank"
          >
            {" "}
            Riders Point{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:ReactJS, TailwindCSS, JavaScript, Java, SpringBoot,
            Hibernate and MySQL
          </span>
          - Riders Point is a platform for group travel designed to facilitate
          communication and shared experiences among bike riders. I utilized
          ReactJS for the frontend, Spring Boot for the backend, and MySQL for
          the database. The application enables users to plan, share, and join
          group rides. It includes functionalities such as route planning, ride
          sharing via phone numbers, and user profiles. Key features involve
          route setting, ride sharing, user communication, and profile
          management through unique login credentials <br />
          <br />
          <br />
          <span className="text-teal-400 ml-3">2. </span>
          <a
            className="text-purple-400"
            href="https://github.com/manthanmk66/EduTechForge"
            target="_blank"
          >
            {" "}
            EduTechForge{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:ReactJS, Redux, Tailwind CSS, NodeJS, ExpressJS, REST
            API, Cloudinary, jwt-authentication, RazorPay API shadcn/ui, MongoDB
          </span>
          - EduTechForge is an innovative Learning Management System (LMS) built
          using modern technology. It's designed to make learning personalized
          for students and easy for instructors to manage their courses. With
          features like course ratings and wishlists, EduTechForge makes
          learning enjoyable. It's reliable and scalable, thanks to its secure
          technology and cloud-based infrastructure. As a leader in educational
          technology, EduTechForge is always improving, with plans to add fun
          features like gamification and personalized learning paths. <br />
          <br />
          <br />
          <span className="text-teal-400 ml-3">3. </span>
          <a
            className="text-purple-400"
            href="https://github.com/manthanmk66/Nextjs"
            target="_blank"
          >
            {" "}
            NextAuth{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:Next.js,MongoDB,TailwindCSS
          </span>
          - NextAuth is a Next.js web app with MongoDB integration, featuring
          advanced authentication functionalities. Users can register, log in,
          and enjoy features like email verification, password recovery, and
          route protection. Leveraging Appwrite for backend services, NextAuth
          ensures seamless integration with email delivery and more. Deployed on
          Vercel for scalability and reliability, NextAuth offers a streamlined
          authentication experience for modern web applications. <br />
          <br />
          <br />
          <span className="text-teal-400 ml-3">4. </span>
          <a
            className="text-purple-400"
            href="https://machine-wise-hosting.vercel.app/"
            target="_blank"
          >
            {" "}
            TemporalInsightHub
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:React.js, Chart.js, MongoDB, Tailwind CSS, Node.js,
            Express.js
          </span>
          - Developed a dynamic web application merging MongoDB, React, and the
          power of Chart.js for compelling data visualization. Users can explore
          sample data with timestamps, gaining insights into trends.
          Concurrently, the integration of real-time weather APIs enriches the
          experience. Robust error handling ensures smooth navigation, while a
          handy sample generation simulator aids in testing. Leveraging MongoDB
          for storage, React for frontend, and Node.js Express.js for backend,
          alongside Chart.js for mesmerizing data presentation, the app offers a
          seamless user journey. Tailwind CSS adds finesse to the interface,
          while Vercel and Render streamline deployment. With these features,
          users engage effectively with data, enhancing comprehension and
          engagement. <br />
          <br />
          <br />
          <span className="text-teal-400 ml-3">5. </span>
          <a
            className="text-purple-400"
            href="https://github.com/manthanmk66/UserNex"
            target="_blank"
          >
            {" "}
            UserNex{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:ReactJS, Tailwind CSS,MongoDB, Node.js, Express.js, JWT,
            and bcrypt.js
          </span>
          - UserNex enhances security in user management. With OTP-based login
          and email verification, authentication is robust. Users can manage
          profiles securely, ensuring a safe and efficient experience
          <br /> <br />
          <br />
          <span className="text-teal-400 ml-3">6. </span>
          <a
            className="text-purple-400"
            href="https://manthan-chatapp.netlify.app/"
            target="_blank"
          >
            {" "}
            Chat-App{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:React.js, Socket.io, and Tailwind CSS
          </span>
          - ChatApp is a minimalist web application built with React.js,
          Socket.io, and Tailwind CSS. It facilitates real-time communication
          among users with features like instant messaging. Enjoy a seamless
          chatting experience with responsive design and customizable options.
          <br /> <br />
          <br />
          <span className="text-teal-400 ml-3">7. </span>
          <a
            className="text-purple-400"
            href="https://manthanrandompasswordgenerator.netlify.app/"
            target="_blank"
          >
            {" "}
            Random Password Generator- Chrome Extention{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:HTML, CSS, Javascript
          </span>
          - This project is a simple random password generator tool and also
          made it for the Chrome Extention that allows users to generate strong
          and secure passwords based on their preferences. It provides various
          options to customize the generated passwords, such as length and
          character types.{" "}
          {/* <span className="text-teal-400 ml-3">Riders Point</span>  */}
          <br /> <br /> <br />
          <span className="text-teal-400 ml-3">8. </span>
          <a
            className="text-purple-400"
            href="https://manthanweatherapp.netlify.app/"
            target="_blank"
          >
            {" "}
            Weather App{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology:HTML, CSS, Javascript
          </span>
          - The Weather App project is a simple web application allowing users
          to access real-time weather information for any city globally. It's
          built using HTML, CSS, and JavaScript, utilizing a free weather API
          for data retrieval. Users can search for a city and instantly view
          current temperature, humidity, wind speed, and cloudiness. The app
          also automatically displays weather details for the user's local city
          if no specific city is entered. With its user-friendly interface, this
          project offers a seamless experience for obtaining weather updates.
          <br /> <br />
          <br />
          <span className="text-teal-400 ml-3">9. </span>
          <a
            className="text-purple-400"
            href="https://manthandiscordclone.netlify.app/"
            target="_blank"
          >
            {" "}
            Discord Clone{" "}
          </a>
          <span className="text-teal-400 ml-3">
            {" "}
            Technology: HTML, Tailwind CSS
          </span>
          - The Discord Clone App is a web application designed to replicate the
          User Interface and animations of the Discord platform using HTML and
          Tailwind CSS. With its sleek design and user-friendly interface, this
          project aims to provide users with a familiar and enjoyable experience
          similar to that of the original Discord application.
          <br /> <br />
          <br />
        </div>
      );
    case "clear":
      setCommand([]);
      return "";
    case "resume":
      window.open(
        "https://drive.google.com/file/d/1i1vEkoe-iAnu7kx_5kQ3z1bWndZSYmX6/view?usp=sharing",
        "_blank"
      );
      return "Heading to resume...";
    default:
      return (
        <div>
          <span className="text-red-500"> Command not found. </span> <br />
          Type <span className="text-teal-400">help</span> to get a list of
          available commands.
        </div>
      );
  }
};
