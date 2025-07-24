import { motion } from "framer-motion"
import { FaGraduationCap, FaCode, FaHeart } from "react-icons/fa"
import "./About.css"

export default function About() {
  return (
    <div className="about">
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
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I'm Yeli Soto — a passionate web developer with a love for crafting clean, responsive, and intuitive digital
        experiences. I enjoy blending creativity with functionality, and I’m always learning something new in tech.
      </motion.p>

      <div className="about-cards">
        <motion.div className="about-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <FaCode className="about-icon" />
          <h3>Skills</h3>
          <ul>
            <li>HTML5, CSS3, Sass</li>
            <li>JavaScript (ES6+), React</li>
            <li>Firebase, Git & GitHub</li>
            <li>Figma, Responsive Design</li>
          </ul>
        </motion.div>

        <motion.div className="about-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <FaGraduationCap className="about-icon" />
          <h3>Education</h3>
          <p>Studying Web Development with a minor in Computer Science at Weber State University.</p>
          <p>Strong focus on frontend technologies, design systems, and UI/UX best practices.</p>
        </motion.div>

        <motion.div className="about-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <FaHeart className="about-icon" />
          <h3>Fun Facts</h3>
          <ul>
            <li>I love designing intuitive user experiences</li>
            <li>Big fan of Lorcana TCG and playing video games 🎴</li>
            <li>Enjoy exploring new hikes around Utah</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
