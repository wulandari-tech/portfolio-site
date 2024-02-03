import { GitHubRepo, RepoLanguageStats, Commit, PersonalProject } from "@/types";

function sortProjects(projects: PersonalProject[]): PersonalProject[] {
    return projects.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}
  
export function makeFeaturedProjectList(projects: PersonalProject[]): PersonalProject[] {
    const featuredProjects = projects.filter(project => project.isFeatured);
    return sortProjects(featuredProjects);
}

export function makeUnfeaturedProjectList(projects: PersonalProject[]): PersonalProject[] {
    const unfeaturedProjects = projects.filter(project => !project.isFeatured);
    return sortProjects(unfeaturedProjects);
}

async function fetchWithCheck(url: string): Promise<any> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Error fetching data from ${url}: ${res.status}`);
    }
    return res;
}

async function getPortfolioRepos(gitHubUsername: string): Promise<GitHubRepo[]> {
  const res = await fetchWithCheck(`https://api.github.com/users/${gitHubUsername}/repos`);
  const repos: GitHubRepo[] = await res.json();
  return repos.filter(repo => repo.topics.includes('for-portfolio'));
}

async function getLanguages(languagesUrl: string): Promise<string[]> {
  const res = await fetchWithCheck(languagesUrl);
  const languageStats: RepoLanguageStats = await res.json();
  return Object.keys(languageStats);
}

async function getLastModificationDateTime(repoName: string, createdAt: string): Promise<Date> {
    const res = await fetchWithCheck(`https://api.github.com/repos/${repoName}/commits`);
    const commits: Commit[] = await res.json();
    return (commits.length > 0) ? new Date(commits[0].commit.author.date) : new Date(createdAt);
}

async function makeProject(repo: GitHubRepo): Promise<PersonalProject> {
  const languagesUsed = await getLanguages(repo.languages_url);
  const lastModified = await getLastModificationDateTime(repo.full_name, repo.created_at);
  return {
    repoName: repo.full_name,
    repoDescripion: repo.description,
    isFeatured: repo.topics.includes('featured'),
    languagesUsed,
    lastModified,
    deploymentURL: repo.homepage,
  };
}

export async function getPersonalProjects(gitHubUsername: string): Promise<PersonalProject[]> {
    const portfolioRepos = await getPortfolioRepos(gitHubUsername);
    if (portfolioRepos.length === 0) {
      throw new Error();
    }
    return Promise.all(portfolioRepos.map(makeProject));
}
