// TODO: use Eslint to enforce things like consistent quotation marks
import ProjectComponent from "@/components/Project";
import List from "@/components/List";
import { GitHubRepo, RepoLanguageStats, Project } from "@/types";
import { makeFeaturedProjectList, makeUnfeaturedProjectList } from "@/utils/projectUtils";

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

async function getPortfolioProjects(): Promise<Project[]> {
  const portfolioRepos = await getPortfolioRepos();
  return Promise.all(portfolioRepos.map(makeProject));
}

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects();
  const featuredProjects = makeFeaturedProjectList(projects);
  const unfeaturedProjects = makeUnfeaturedProjectList(projects);
  return (
    // TODO: link skills to their certifications, here and in the open source page for example
    <main>
      <h1>My Projects...</h1>
      {/* TODO: consider refactoring the below with similar constructions in the open source page */}
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
