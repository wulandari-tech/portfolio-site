import { GitHubRepo, RepoLanguageStats, Commit, Project } from "@/types";

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

async function getPortfolioRepos(gitHubUsername: string): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${gitHubUsername}/repos`);
  const repos: GitHubRepo[] = await res.json();
  return repos.filter(repo => repo.topics.includes('for-portfolio'));
}

async function getLanguages(languagesUrl: string): Promise<string[]> {
  const res = await fetch(languagesUrl);
  const languageStats: RepoLanguageStats = await res.json();
  return Object.keys(languageStats);
}

async function getLastModificationDateTime(repoName: string, createdAt: string): Promise<Date> {
    const res = await fetch(`https://api.github.com/repos/${repoName}/commits`);
    const commits: Commit[] = await res.json();
    return (commits.length > 0) ? new Date(commits[0].commit.author.date) : new Date(createdAt);
}

async function makeProject(repo: GitHubRepo): Promise<Project> {
  const isFeatured = repo.topics.includes('featured');
  const languagesUsed = await getLanguages(repo.languages_url);
  const lastModified = await getLastModificationDateTime(repo.full_name, repo.created_at);
  return {
    repoName: repo.full_name,
    repoDescripion: repo.description,
    isFeatured,
    languagesUsed,
    lastModified,
    deploymentURL: repo.homepage,
  };
}

export async function getPortfolioProjects(gitHubUsername: string): Promise<Project[]> {
  const portfolioRepos = await getPortfolioRepos(gitHubUsername);
  return Promise.all(portfolioRepos.map(makeProject));
}