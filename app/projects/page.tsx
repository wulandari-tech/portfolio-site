import projects from "../../data/projects";
import Project from "@/components/Project"

export default function Index() {
    return (
      // TODO: link skills with certifications to their certifications
      <main>
        <h1>My Projects...</h1>
        <section>
            <h2>Featured...</h2>
            {/* <Project project={projects[0]}/> */}
        </section>
        <section>
            <h2>More...</h2>
        </section>
      </main>
    )
  }