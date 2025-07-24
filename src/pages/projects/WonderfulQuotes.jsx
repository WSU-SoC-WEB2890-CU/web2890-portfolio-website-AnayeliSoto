import "./ProjectDetails.css"
import { Link } from "react-router-dom"

export default function WonderfulQuotes() {
  return (
    <div className="project-details">
      <div className="project-details-card">
        <h1>Wonderful Quotes</h1>
        <p className="tagline">A simple, effective quotes generator with smooth functionality.</p>

        <section>
          <h2>Project Details</h2>
          <ul>
            <li>
              <strong>Client:</strong> Class project
            </li>
            <li>
              <strong>Target Audience:</strong> Users looking for motivational quotes
            </li>
            <li>
              <strong>Timeline:</strong> Completed in one week
            </li>
          </ul>
        </section>

        <section>
          <h2>Purpose, Goals, and Scope</h2>
          <p>Display random inspirational quotes in a clean, minimal interface.</p>
        </section>

        <section>
          <h2>Expectations & Requirements</h2>
          <ul>
            <li>Dynamic quote generation</li>
            <li>Simple, accessible layout</li>
          </ul>
        </section>

        <section>
          <h2>Design Decisions</h2>
          <ul>
            <li>Minimalist design to keep focus on quotes</li>
            <li>Centered text with generous spacing</li>
          </ul>
        </section>

        <section>
          <h2>Strongest Features</h2>
          <ul>
            <li>Dynamic content updates</li>
            <li>Clean, distraction-free layout</li>
          </ul>
        </section>

        <section>
          <h2>Results</h2>
          <p>Created a simple, effective quotes generator with smooth functionality.</p>
        </section>

        <div className="project-links">
          <a href="https://sunny-paprenjak-c216d4.netlify.app/" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  )
}
