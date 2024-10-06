import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      {/* Introduction Section */}
      <header className="home-header">
        <h1>Welcome to the Research/Projects Portal</h1>
        <p>
          Empowering students and researchers by providing a platform to connect with experts,
          explore research domains, and access valuable resources.
        </p>
      </header>

      {/* Navigation to Other Sections */}
      <section className="home-navigation">
        <div className="nav-card">
          <h3>Research Doubts</h3>
          <p>Got research queries? Get guidance from expert mentors.</p>
          <Link to="/research-doubts" className="nav-link">Explore Research Doubts</Link>
        </div>
        {/* <div className="nav-card">
          <h3>Projects</h3>
          <p>Explore ongoing projects or share your own with the community.</p>
          <Link to="/projects" className="nav-link">View Projects</Link>
        </div> */}
        {/* <div className="nav-card">
          <h3>Resources</h3>
          <p>Access research journals and other academic resources.</p>
          <Link to="/resources" className="nav-link">Browse Resources</Link>
        </div>
        <div className="nav-card">
          <h3>Contact Us</h3>
          <p>Have any questions? Get in touch with us.</p>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div> */}
      </section>
      </div>
  )
}

export default Home
