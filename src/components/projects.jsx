function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">

        <div className="project-card">
          <h3><a href="#">Project one</a></h3>
          <p>A web application built with React and Node.js</p>
          <div className="project-links">
            <a href="#">Live Demo</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3><a href="#">Project Two</a></h3>
          <p>A responsive website built with HTML CSS and JavaScript</p>
          <div className="project-links">
            <a href="#">Live Demo</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3><a href="#">Project Three</a></h3>
          <p>A full stack app with React frontend and Node.js backend</p>
          <div className="project-links">
            <a href="#">Live Demo</a>
            <a href="#">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects