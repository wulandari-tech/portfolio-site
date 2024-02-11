import PersonalProject from "@/components/PersonalProject";
import FeaturedUnfeatured from "@/components/FeaturedUnfeatured";
import { makeFeaturedPersonalProjectList, makeUnfeaturedPersonalProjectList, getPersonalProjects } from "@/utils/personalProjectUtils";

export default async function ProjectsPage() {
  const projects = await getPersonalProjects('JamesGJ5');
  if (projects.length === 0) {
    throw new Error();
  }
  const featuredProjects = makeFeaturedPersonalProjectList(projects);
  const unfeaturedProjects = makeUnfeaturedPersonalProjectList(projects);
  return (
    <main>
      <h1>My Personal Projects...</h1>
      <FeaturedUnfeatured
        featuredProps={featuredProjects.map(personalProject => ({ personalProject }))}
        unfeaturedProps={unfeaturedProjects.map(personalProject => ({ personalProject }))}
        ListedComponent={PersonalProject}
      />
    </main>
  );
}
