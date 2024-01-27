import { GitHubRepo, RepoLanguageStats, Project } from "@/types";

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

async function getPortfolioRepos(): Promise<GitHubRepo[]> {
  const res = await fetch('https://api.github.com/users/JamesGJ5/repos');
  const repos: GitHubRepo[] = await res.json();
  return repos.filter(repo => repo.topics.includes('for-portfolio'));
}

async function getLanguages(languagesUrl: string): Promise<string[]> {
  const res = await fetch(languagesUrl);
  const languageStats: RepoLanguageStats = await res.json();
  return Object.keys(languageStats);
}

async function makeProject(repo: GitHubRepo): Promise<Project> {
  const isFeatured = repo.topics.includes('featured');
  const languagesUsed = await getLanguages(repo.languages_url);
  return {
    repoName: repo.full_name,
    repoDescripion: repo.description,
    isFeatured,
    languagesUsed,
    lastModified: new Date(repo.updated_at),
    deploymentURL: repo.homepage,
  };
}

export async function getPortfolioProjects(): Promise<Project[]> {
  const portfolioRepos = await getPortfolioRepos();
  return Promise.all(portfolioRepos.map(makeProject));
}