import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma, FaPython } from "react-icons/fa"
import "./Home.css"

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Hi, I'm Yeli Soto 👋</h1>
          <p className="typed-text">
            <Typewriter
              words={["Web Developer", "UI/UX Designer", "Creative Problem Solver"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="tagline">
            I build modern, responsive websites with a strong focus on clean design and functionality.
          </p>
          <div className="buttons">
            <Link to="/portfolio" className="cta-button">
              View My Work
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/portfolio.jpg" alt="Yeli Soto" />
        </motion.div>
      </section>

      <section className="skills-section">
        <h2>Tech Stack</h2>
        <div className="skills">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaReact title="React" />
          <FaGithub title="GitHub" />
          <FaFigma title="Figma" />
          <FaPython title="Python" />
        </div>
      </section>

      <section className="cta-section">
        <h2>Let’s build something amazing together.</h2>
        <Link to="/contact" className="cta-button">
          Get in Touch
        </Link>
      </section>

      <blockquote className="motto">
        "Design is not just what it looks like and feels like. Design is how it works."
        <br />– Steve Jobs
      </blockquote>
    </div>
  )
}
