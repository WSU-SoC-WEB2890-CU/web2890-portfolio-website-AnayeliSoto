import { motion } from "framer-motion"
import { FaGraduationCap, FaHeart, FaBriefcase, FaUserCircle } from "react-icons/fa"
import "./About.css"

export default function About() {
  return (
    <div className="about compact-layout">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="about-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hi, I’m Yeli Soto — a web developer who loves crafting clean and intuitive digital experiences. Beyond code, I’m
        passionate about design, innovation, and constantly leveling up my skills.
      </motion.p>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>
          <FaUserCircle className="section-icon" /> Who I Am
        </h2>
        <p>
          Currently studying Web and User Experience with a minor in Computer Science at Weber State University, I blend
          creativity with technology to build engaging web applications. My background also includes a rewarding
          military career and diverse work experiences.
        </p>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h2>
          <FaBriefcase className="section-icon" /> Work Experience
        </h2>

        <div className="job">
          <h3>Security Monitoring Specialist II — Rocky Mountain Power</h3>
          <span>Nov 2022 - Present</span>
          <ul>
            <li>Monitor and manage physical and cyber alarms and alerts</li>
            <li>Prepare documentation and follow regulatory requirements</li>
            <li>Maintain security infrastructure knowledge to ensure defense in depth</li>
          </ul>
        </div>

        <div className="job">
          <h3>System/Software Engineer Intern — Northrop Grumman</h3>
          <span>May 2021 - Oct 2022</span>
          <ul>
            <li>Developed flight software and unit tests</li>
            <li>Integrated code quality assurance tools</li>
            <li>Used C++, Java, SQL for system improvements</li>
          </ul>
        </div>

        <div className="job">
          <h3>Security Forces 3P015 — United States Air Force</h3>
          <span>Aug 2016 - Aug 2022</span>
          <ul>
            <li>Military rank E-5, honorable discharge</li>
            <li>Deployed 8 months overseas</li>
            <li>Protected classified military assets and personnel</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h2>
          <FaGraduationCap className="section-icon" /> Education
        </h2>
        <p>
          Pursuing a Bachelor’s in Web and User Experience with a minor in Computer Science at Weber State University
          with an Associates of Science degree completed. Focus areas include frontend technologies, design systems, and
          UI/UX best practices.
        </p>
      </motion.div>

      <motion.div
        className="about-section fun-facts"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <h2>
          <FaHeart className="section-icon" /> Fun Facts
        </h2>
        <ul>
          <li>I love designing intuitive user experiences</li>
          <li>Big fan of Lorcana TCG and video games </li>
          <li>Enjoy exploring new hikes around Utah</li>
          <li>Obtained Secret Clearance</li>
        </ul>
      </motion.div>
    </div>
  )
}
