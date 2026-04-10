const skills = [
  "HTML",
  "CSS",
  "JavaScript", 
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Python",
  "Django",
  "SQL",
]

function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
            </div>
          ))}
          </div>
          </section>
  )
}

export default Skills
      
          