export const getOutput = (command, setCommand) => {
    switch (command.toLowerCase()) {
      case "help":
        return (
          <div>
            {" "}
            Available commands: <br />
            <span className="text-teal-400 ml-3"> about</span> - If your only
            goal is to stalk me, go ahead with this one :) <br />
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
            Hi! Thanks for stalking me, lol! <br /> I am Manthan Kasle, a passionate 22-year-old Web Developer and Digital Marketer based in Pune. I hold a degree in Software Engineering, and my journey revolves around crafting digital experiences.
            <br />
            <br />
            <span className="text-teal-400">In a Nutshell:</span> 
            I spend my days immersed in my room, where I either embark on exciting new projects or dive into the endless realms of learning. My toolkit is minimalist but powerful – just my terminal, IDE, and browser. Oh, and yes, I'm a connoisseur of crafting great memes!
            <br />
            <br />
            <span className="text-teal-400">Professional Background:</span> 
            With a solid foundation in Software Engineering, I bring a unique blend of technical prowess and creative flair to the digital landscape. My focus lies in web development, where I thrive on turning ideas into reality.
            <br />
            <br />
            <span className="text-teal-400">Personal Pursuits:</span>Beyond the screen, I'm a sci-fi enthusiast, with a particular penchant for Christopher Nolan movies. There's something magical about the way he weaves intricate narratives that captivate the mind.
            <br />
            <br />
            <span className="text-teal-400">Building Dreams:</span>I find immense joy in creating things that make a difference. Whether it's a sleek website or a robust digital solution, I love the journey of turning concepts into tangible, impactful results.
            <br />
            <br />
            <span className="text-teal-400">Life in a Snapshot:</span>  <br/>
            Location: Pune, India  <br/>
            Workspace: My room, where the magic happens  <br/>
            Tools of the Trade: Terminal, IDE, Browser – the essentials  <br/>
            Leisure Time: Crafting memes, a skill that adds a dash of humor to life
            <br />
            <br />
            <span className="text-teal-400">Let's Connect:</span>Let's Connect:
            If you're as passionate about technology, creativity, and meaningful projects as I am, let's connect. I'm always up for collaborations and new adventures in the digital realm.
            <br/>
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
            Here, you can explore the stuff I'm currently working on.{" "} <br />
            <span className="text-purple-400 ml-3">
              <a href="https://www.linkedin.com/in/manthan-kasle-1953b2193/">
                LinkedIn{" "}
              </a>{" "}
              -{" "}
            </span>
            Here you can find my professional profile. (DMs preferred here){" "}
            <br />
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
            <span className="text-teal-400 ml-3">
              Languages -{" "}
            </span>
            <br />
            <span className="ml-7">
               Java, JavaScript, SpringBoot, C++, Dotnet{" "}
            </span>
            <br />
            <span className="text-teal-400 ml-3">Frameworks/Libraries - </span>
            <br />
            <span className="ml-7">
              {" "}
              ReactJS, jQuery, Vanilla CSS , Tailwind CSS
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
            >
              {" "}
              Riders Point{" "}
            </a>
            - This is my FullStack Project using ReactJS and SpringBoot {" "}
            {/* <span className="text-teal-400 ml-3">Riders Point</span>  */}
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
