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
        {featuredProjects.length > 0 && <section>
            <h2>Featured...</h2>
            <List dataList={featuredProjects.map(project => ({project}))} ListedComponent={ProjectComponent}/>
        </section>}
        {unfeaturedProjects.length > 0 && <section>
            <h2>{featuredProjects.length ? 'More' : 'Featured'}...</h2>
            <List dataList={unfeaturedProjects.map(project => ({project}))} ListedComponent={ProjectComponent}/>
        </section>}
      </main>
    );
  }