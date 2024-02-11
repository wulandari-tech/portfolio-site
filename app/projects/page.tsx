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
