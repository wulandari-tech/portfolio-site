import projects from "../../data/projects";
import ProjectList from "@/components/ProjectList";
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
    const featuredProjects = makeFeaturedProjectList(projects);
    const unfeaturedProjects = makeUnfeaturedProjectList(projects);
    return (
      // TODO: link skills with certifications to their certifications
      <main>
        <h1>My Projects...</h1>
        {/* TODO: consider rendering each list only if there are relevant projects and amending their headings accordingly depending on which lists are rendered (e.g. shouldn't say "More..." if there's only one list) */}
        <section>
            <h2>Featured...</h2>
            <ProjectList projectList={featuredProjects}/>
        </section>
        <section>
            <h2>More...</h2>
            <ProjectList projectList={unfeaturedProjects}/>
        </section>
      </main>
    );
  }