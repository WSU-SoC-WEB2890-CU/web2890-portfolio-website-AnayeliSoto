import "./ProjectDetails.css"
import { Link } from "react-router-dom"

export default function RecipeApp() {
  return (
    <div className="project-details">
      <div className="project-details-card">
        <h1>Recipe App</h1>
        <p className="tagline">A Firebase-powered recipe manager with real-time database integration.</p>

        <section>
          <h2>Project Details</h2>
          <ul>
            <li>
              <strong>Client:</strong> Class project
            </li>
            <li>
              <strong>Target Audience:</strong> Users who want to manage and discover recipes easily
            </li>
            <li>
              <strong>Timeline:</strong> Completed over two weeks
            </li>
          </ul>
        </section>

        <section>
          <h2>Purpose, Goals, and Scope</h2>
          <p>
            To build a user-friendly app where users can add, view, and manage recipes with ingredients and
            instructions.
          </p>
        </section>

        <section>
          <h2>Expectations & Requirements</h2>
          <ul>
            <li>Firebase real-time database integration</li>
            <li>Recipe creation and management</li>
            <li>Responsive and clean UI</li>
          </ul>
        </section>

        <section>
          <h2>Design Decisions</h2>
          <ul>
            <li>Simple, clean layout focusing on readability</li>
            <li>Intuitive form for adding and editing recipes</li>
            <li>Consistent styling with subtle accents for user actions</li>
          </ul>
        </section>

        <section>
          <h2>Strongest Features</h2>
          <ul>
            <li>Real-time updates with Firebase backend</li>
            <li>User-friendly recipe input forms</li>
            <li>Clean presentation of recipes with ingredients and instructions</li>
          </ul>
        </section>

        <section>
          <h2>Results</h2>
          <p>
            Delivered a fully functional recipe management app that offers real-time data syncing and an intuitive user
            experience.
          </p>
        </section>

        <div className="project-links">
          <a href="https://resilient-melba-3840ee.netlify.app/" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  )
}
