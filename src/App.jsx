import React from "react";
import "./index.css";
// Import your profile image

function App() {
  return (
    <div className="card">
      {/* Profile Image */}
      <div className="profile-img">
        <img src="/profile2.jpeg" alt="Purushottam Jha" />
      </div>

      {/* Header Section */}
      <h1>Purushottam Jha</h1>
      <p>
        📞 9569479140 | 📧 jhspurushottam2@gmail.com |{" "}
        <a
          href="https://www.linkedin.com/in/purushottam-jha-8a2366230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>

      {/* Professional Summary */}
      <div className="section">
        <h2>Professional Summary</h2>
        <p>
          A motivated software developer with a solid foundation in Node.js and
          a strong interest in MERN stack development. Familiar with backend
          development and API integration, aiming to apply and grow these skills
          in building scalable web applications.
        </p>
      </div>

      {/* Education */}
      <div className="section">
        <h2>Education</h2>
        <p>
          <strong>Chandigarh University</strong> <br />
          Bachelors in Computer Science and Engineering (Aug. 2020 – June 2024)
        </p>
      </div>

      {/* Experience */}
      <div className="section">
        <h2>Experience</h2>
        <p>
          <strong>Front-End Developer</strong> (May 2022 – July 2022)
        </p>
        <ul>
          <li>
            Developed and optimized web pages for an online gaming site, hotel
            stay website, and e-commerce platform.
          </li>
          <li>
            Implemented responsive UI using React.js and Angular.js for enhanced
            user experience.
          </li>
          <li>
            Collaborated on deployment and testing, ensuring stable and timely
            project launches.
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="section">
        <h2>Projects</h2>
        <p>
          <strong>Damnn - Realtime Chat Web Application:</strong> Built using
          MERN stack with real-time chat via WebSocket.
        </p>
        <p>
          <strong>YouTube Clone:</strong> Implemented video streaming, likes,
          and subscriptions with full MERN stack.
        </p>
        <p>
          <strong>Bring Home - Pet Adoption App:</strong> Cross-platform mobile
          app built using React Native and Firebase.
        </p>
      </div>

      {/* Skills */}
      <div className="section">
        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> Java, C/C++, SQL, JavaScript, HTML/CSS,
          Elixir <br />
          <strong>Frameworks:</strong> React, Node.js, Express.js, Angular,
          Phoenix <br />
          <strong>Tools:</strong> Git, Figma, Firebase, VS Code, Google Cloud
          Platform
        </p>
      </div>
    </div>
  );
}

export default App;
