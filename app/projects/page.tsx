import projects from "../../data/projects";
import ProjectComponent from "@/components/Project"
import { Project } from "@/types";

function sortProjects(projects: Project[]): Project[] {
  return projects.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}

function makeFeaturedProjectList(projects: Project[]): Project[] {
  const featuredProjects = projects.filter(project => project.isFeatured);
  return sortProjects(featuredProjects);
}

function makeUnfeaturedProjectList(projects: Project[]): Project[] {
  const unfeaturedProjects = projects.filter(project => !project.isFeatured);
  return sortProjects(unfeaturedProjects);
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
            <ol>
              {makeUnfeaturedProjectList(projects).map(project => <ProjectComponent project={project}/>)}
            </ol>
        </section>
      </main>
    )
  }