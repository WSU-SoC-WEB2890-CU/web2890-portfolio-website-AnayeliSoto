import React from "react"
import "./ProjectDetails.css"
import "./LPLorcanaCaseStudy.css"
import { Link } from "react-router-dom"

export default function LPLorcanaCaseStudy() {
  return (
    <div className="case-study">
      <h1>LP Lorcana Case Study</h1>
      <section className="hero">
        <img src="../lp_lorcana.jpg" alt="LP Lorcana Homepage Preview" className="hero-image" />
      </section>

      <section className="section overview">
        <h2>Project Overview</h2>
        <p>
          This project was inspired by the Lorcana card game, designed to create a visually engaging, responsive
          homepage targeting fantasy card game fans.
        </p>
        <ul>
          <li>
            <strong>Client:</strong> Personal project inspired by the Lorcana trading card game.
          </li>
          <li>
            <strong>Purpose:</strong> Create a visually engaging landing page that simulates a homepage for a Lorcana
            fan community.
          </li>
          <li>
            <strong>Target Audience:</strong> Lorcana card collectors, game players, and fans of fantasy-themed card
            games.
          </li>
          <li>
            <strong>Expectations:</strong> Build a responsive, brand-centered homepage with a strong header, navigation,
            and footer.
          </li>
        </ul>
      </section>

      <section className="section planning-ux">
        <h2>Planning and UX Process</h2>
        <p>
          I began the project by researching similar card game websites to understand common UX patterns and layout
          styles. I created:
        </p>
        <ul>
          <li>A moodboard with color inspiration from fantasy games and Lorcana branding.</li>
          <li>Wireframes to structure the layout, emphasizing hero imagery and navigation.</li>
          <li>Style tiles to explore color palettes, fonts, and UI shapes.</li>
          <li>
            A persona focused on a Lorcana card enthusiast looking for easy navigation, visually appealing graphics, and
            quick access to community resources.
          </li>
        </ul>

        <div className="image-gallery">
          <div>
            <h3>Moodboard</h3>
            <img src="../lp_moodboard.jpg" alt="Moodboard" />
          </div>
          <div>
            <h3>Color Palette</h3>
            <img src="../lp_color.jpg" alt="Color Palette" />
          </div>
          <div>
            <h3>Typography</h3>
            <img src="../lp_typo.png" alt="Typography" />
          </div>
          <div>
            <h3>Persona</h3>
            <img src="../persona.jpg" alt="Persona" />
          </div>
          <div>
            <h3>Wireframes</h3>
            <img src="../wireframe.jpg" alt="Wireframes" />
          </div>
          <div>
            <h3>High Fidelity Wireframes</h3>
            <img src="../high.jpg" alt="High Fidelity Wireframes" />
          </div>
        </div>
      </section>

      <section className="section challenges">
        <h2>Challenges and Solutions</h2>
        <p>
          <strong>Challenge:</strong> The footer was initially not aligning correctly across all screen sizes.
        </p>
        <p>
          <strong>Solution:</strong> I resolved this by refining the flexbox alignment and using Bootstrap's responsive
          utilities to adjust spacing and justification.
        </p>
      </section>

      <section className="section outcome">
        <h2>Outcome</h2>
        <p>
          The LP Lorcana project showcases my ability to build visually appealing, responsive homepages with brand
          cohesion. The design is clean, engaging, and scalable for potential multi-page development.
        </p>
      </section>

      <div className="back-link">
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>
    </div>
  )
}
