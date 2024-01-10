import { Project } from "@/types";

function sortProjects(projects: Project[]): Project[] {
    return projects.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}
  
export function makeFeaturedProjectList(projects: Project[]): Project[] {
    const featuredProjects = projects.filter(project => project.isFeatured);
    return sortProjects(featuredProjects);
}

export function makeUnfeaturedProjectList(projects: Project[]): Project[] {
    const unfeaturedProjects = projects.filter(project => !project.isFeatured);
    return sortProjects(unfeaturedProjects);
}
