import projects from "../../data/projects";
import ProjectComponent from "@/components/Project"
import { Project } from "@/types";

function makeFeaturedProjectList(projects: Project[]): Project[] {
  return projects.filter(project => project.isFeatured).sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}

export default function Index() {
    return (
      // TODO: link skills with certifications to their certifications
      <main>
        <h1>My Projects...</h1>
        <section>
            <h2>Featured...</h2>
            <ol>
              {makeFeaturedProjectList(projects).map(project => <ProjectComponent project={project}/>)}
            </ol>
        </section>
        <section>
            <h2>More...</h2>
        </section>
      </main>
    )
  }