import "./ProjectDetails.css"
import { Link } from "react-router-dom"

export default function FoodOrderingApp() {
  return (
    <div className="project-details">
      <div className="project-details-card">
        <h1>Food Ordering App</h1>
        <p className="tagline">
          A responsive React-based meals store that allows users to browse meals and simulate an order process.
        </p>

        <section>
          <h2>Project Details</h2>
          <ul>
            <li>
              <strong>Client:</strong> Class project
            </li>
            <li>
              <strong>Target Audience:</strong> Users looking for an intuitive meal ordering experience
            </li>
            <li>
              <strong>Timeline:</strong> Completed over two weeks
            </li>
          </ul>
        </section>

        <section>
          <h2>Purpose, Goals, and Scope</h2>
          <p>
            To create an interactive storefront where users can view available meals, add them to a cart, and simulate
            placing an order with a modern, user-friendly UI.
          </p>
        </section>

        <section>
          <h2>Expectations & Requirements</h2>
          <ul>
            <li>React-based frontend with state management</li>
            <li>Dynamic cart functionality</li>
            <li>Clean and responsive design</li>
          </ul>
        </section>

        <section>
          <h2>Design Decisions</h2>
          <ul>
            <li>Modern and clean layout with focus on usability</li>
            <li>Consistent typography and spacing for readability</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        </section>

        <section>
          <h2>Strongest Features</h2>
          <ul>
            <li>Dynamic add-to-cart and cart management</li>
            <li>Responsive and attractive UI</li>
            <li>Efficient state handling with React Context API</li>
          </ul>
        </section>

        <section>
          <h2>Results</h2>
          <p>
            Delivered a polished food ordering interface that simulates the shopping experience with clear visuals and
            smooth interactivity.
          </p>
        </section>

        <div className="project-links">
          <a href="https://stunning-cactus-671856.netlify.app/" target="_blank" rel="noreferrer">
            🔗 Live Demo
          </a>
          <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
      </div>
    </div>
  )
}
