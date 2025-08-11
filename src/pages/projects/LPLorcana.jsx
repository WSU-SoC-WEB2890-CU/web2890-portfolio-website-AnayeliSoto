import "./ProjectDetails.css"
import { Link } from "react-router-dom"

export default function LPLorcana() {
  return (
    <div className="project-details">
      <div className="project-details-card">
        <h1>LP Lorcana</h1>
        <section>
          <h2>Client</h2>
          <p>Personal project inspired by Lorcana trading card game</p>
        </section>
        <section>
          <h2>Target Audience</h2>
          <p>Fans of the Lorcana universe and card collectors</p>
        </section>
        <section>
          <h2>Timeline</h2>
          <p>Completed over three weeks</p>
        </section>
        <section>
          <h2>Purpose, Goals, and Scope</h2>
          <p>
            Create a visually appealing landing page for a fictional Lorcana card community, with modern layout and
            navigation.
          </p>
        </section>
        <section>
          <h2>Expectations & Requirements</h2>
          <ul>
            <li>Responsive design</li>
            <li>Strong visual branding</li>
            <li>Functional navigation and footer</li>
          </ul>
        </section>
        <section>
          <h2>Design Decisions</h2>
          <ul>
            <li>Warm, adventurous color palette</li>
            <li>Sharp, bold typography to align with card game themes</li>
            <li>Balanced whitespace for a clean layout</li>
          </ul>
        </section>
        <section>
          <h2>Strongest Features</h2>
          <p>
            Professional-looking header, navigation, and footer with a responsive layout that adapts across devices.
          </p>
        </section>
        <section>
          <h2>Results</h2>
          <p>Delivered a polished homepage that can easily scale into a multi-page site or e-commerce platform.</p>
        </section>
        <div className="project-links">
          <a href="https://celadon-pothos-c27968.netlify.app/" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  )
}
