import "./ProjectDetails.css";
import { Link } from "react-router-dom";

export default function MyHobbies() {
  return (
    <div className="project-details">
      <div className="project-details-card">
        <h1>My Hobbies</h1>
        <p className="tagline">A hobby tracker built with React</p>

        <section>
          <h2>Project Details</h2>
          <ul>
            <li>
              <strong>Client:</strong> Personal project (class assignment)
            </li>
            <li>
              <strong>Target Audience:</strong> Users who want to track or
              organize their hobbies
            </li>
            <li>
              <strong>Timeline:</strong> Completed over two weeks
            </li>
          </ul>
        </section>

        <section>
          <h2>Purpose, Goals, and Scope</h2>
          <p>
            The goal was to create a simple and interactive form-based
            application that allows users to add, view, and manage hobbies.
          </p>
        </section>

        <section>
          <h2>Expectations & Requirements</h2>
          <ul>
            <li>Required form validation and dynamic content updates</li>
            <li>
              Demonstration of controlled components and React state management
            </li>
          </ul>
        </section>

        <section>
          <h2>Design Decisions</h2>
          <ul>
            <li>Clean, user-friendly layout</li>
            <li>Minimal color palette to maintain focus on form content</li>
            <li>Readable, accessible typography</li>
          </ul>
        </section>

        <section>
          <h2>Strongest Features</h2>
          <ul>
            <li>Dynamic form handling</li>
            <li>Real-time hobby list updates</li>
          </ul>
        </section>

        <section>
          <h2>Results</h2>
          <p>
            Successfully built a working hobby management tool with a clean,
            interactive interface.
          </p>
        </section>

        <div className="project-links">
          <a
            href="https://strong-smakager-6f49f7.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 Live Demo
          </a>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  );
}
