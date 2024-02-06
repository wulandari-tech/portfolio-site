// TODO: use Eslint to enforce things like consistent quotation marks and indentations
import PersonalProject from "@/components/PersonalProject";
import FeaturedUnfeatured from "@/components/FeaturedUnfeatured";
import { makeFeaturedProjectList, makeUnfeaturedProjectList, getPersonalProjects } from "@/utils/projectUtils";

export default async function ProjectsPage() {
  const projects = await getPersonalProjects('JamesGJ5');
  if (projects.length === 0) {
    throw new Error();
  }
  const featuredProjects = makeFeaturedProjectList(projects);
  const unfeaturedProjects = makeUnfeaturedProjectList(projects);
  return (
    // TODO: link skills to their certifications, here and in the open source page for example
    <main>
      <h1>My Projects...</h1>
      <FeaturedUnfeatured
        featuredProps={featuredProjects.map(personalProject => ({ personalProject }))}
        unfeaturedProps={unfeaturedProjects.map(personalProject => ({ personalProject }))}
        ListedComponent={PersonalProject}
      />
    </main>
  );
}
