// TODO: use Eslint to enforce things like consistent quotation marks and indentations
import Project from "@/components/Project";
import FeaturedUnfeatured from "@/components/FeaturedUnfeatured";
import { makeFeaturedProjectList, makeUnfeaturedProjectList, getPortfolioProjects } from "@/utils/projectUtils";

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects('JamesGJ5');
  const featuredProjects = makeFeaturedProjectList(projects);
  const unfeaturedProjects = makeUnfeaturedProjectList(projects);
  return (
    // TODO: link skills to their certifications, here and in the open source page for example
    <main>
      <h1>My Projects...</h1>
      <FeaturedUnfeatured
        featuredProps={featuredProjects.map(project => ({project}))}
        unfeaturedProps={unfeaturedProjects.map(project => ({project}))}
        ListedComponent={Project}
      />
    </main>
  );
}
