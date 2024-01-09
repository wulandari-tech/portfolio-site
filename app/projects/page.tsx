import projects from "../../data/projects";
import ProjectComponent from "@/components/Project";
import List from "@/components/List";
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

export default function ProjectsPage() {
    const featuredProjects = makeFeaturedProjectList(projects);
    const unfeaturedProjects = makeUnfeaturedProjectList(projects);
    return (
      // TODO: link skills to their certifications, here and in the open source page for example
      <main>
        <h1>My Projects...</h1>
        {/* TODO: consider rendering each list only if there are relevant projects and amending their headings accordingly depending on which lists are rendered (e.g. shouldn't say "More..." if there's only one list), here and in the open source page for example */}
        <section>
            <h2>Featured...</h2>
            <List dataList={featuredProjects.map(project => ({project}))} ListedComponent={ProjectComponent}/>
            {/* <ProjectList projectList={featuredProjects}/> */}
        </section>
        <section>
            <h2>More...</h2>
            <List dataList={unfeaturedProjects.map(project => ({project}))} ListedComponent={ProjectComponent}/>
            {/* <ProjectList projectList={unfeaturedProjects}/> */}
        </section>
      </main>
    );
  }