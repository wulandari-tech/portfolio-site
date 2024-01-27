// TODO: use Eslint to enforce things like consistent quotation marks and indentations
import ProjectComponent from "@/components/Project";
import List from "@/components/List";
import { makeFeaturedProjectList, makeUnfeaturedProjectList, getPortfolioProjects } from "@/utils/projectUtils";

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects('JamesGJ5');
  if (!projects) {
    return (<p>Sorry, no projects to be displayed right now...</p>);
  }
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
