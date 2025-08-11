import "./ProjectDetails.css"
import { Link } from "react-router-dom"

export default function WeatherAPI() {
  return (
    <div className="project-details">
      <div className="project-details-card">
        <h1>Weather API</h1>
        <p className="tagline">A fully functional weather app that fetches real-time weather data.</p>

        <section>
          <h2>Project Details</h2>
          <ul>
            <li>
              <strong>Client:</strong> Class project
            </li>
            <li>
              <strong>Target Audience:</strong> Users looking for real-time weather updates
            </li>
            <li>
              <strong>Timeline:</strong> Completed in two weeks
            </li>
          </ul>
        </section>

        <section>
          <h2>Purpose, Goals, and Scope</h2>
          <p>
            Create an application that fetches real-time weather data via API and displays it in a user-friendly format.
          </p>
        </section>

        <section>
          <h2>Expectations & Requirements</h2>
          <ul>
            <li>API integration</li>
            <li>Real-time data display</li>
            <li>Search functionality</li>
          </ul>
        </section>

        <section>
          <h2>Design Decisions</h2>
          <ul>
            <li>Simple card layout to present weather info clearly</li>
            <li>High-contrast typography for readability</li>
          </ul>
        </section>

        <section>
          <h2>Strongest Features</h2>
          <ul>
            <li>Real-time API integration</li>
            <li>Search functionality with error feedback</li>
          </ul>
        </section>

        <section>
          <h2>Results</h2>
          <p>Built a fully functional weather app with live data fetching and responsive design.</p>
        </section>

        <div className="project-links">
          <a href="https://dapper-manatee-a50ed5.netlify.app/" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  )
}
