const projectsList = [
  {
    id: 1,
    name: "Ethio Banks",
    description: "A fintech platform where users can earn money in Ethiopia. Built with Python and Django.",
    demo: "https://abdusalam.pythonanywhere.com/tasks/",
    github: "https://github.com/oumersalah2-cmd/EthioBucks"
  },
  {
    id: 2,
    name: "My Portfolio",
    description: "A personal portfolio website built with React and Vite showcasing my skills and projects.",
    demo: "https://oumersalah2-cmd.github.io/my-portfolio/",
    github: "https://github.com/oumersalah2-cmd/my-portfolio"
  },
  {
    id: 3,
    name: "Seif Online Passport",
    description: "A platform where Ethiopian citizens can apply for a passport through an agent easily online.",
    demo: "https://seif-online-services.vercel.app/",
    github: "https://github.com/oumersalah2-cmd/seif-online-passport"
  }
]

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div className="project-card" key={project.id}>
            <h3><a href={project.demo}>{project.name}</a></h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demo}>Live Demo</a>
              <a href={project.github}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects