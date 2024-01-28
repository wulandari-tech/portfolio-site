import OpenSourceProject from "@/components/OpenSourceProject";
import FeaturedUnfeatured from "@/components/FeaturedUnfeatured";
import openSourceProjects from "@/data/openSourceProjects";
import { makeFeaturedProjectList, makeUnfeaturedProjectList } from "@/utils/projectUtils";

export default function OpenSourcePage() {
  const featuredProjects = makeFeaturedProjectList(openSourceProjects);
  const unfeaturedProjects = makeUnfeaturedProjectList(openSourceProjects);
  return (
    <main>
      <h1>My Open Source Contributions...</h1>
      <FeaturedUnfeatured
        featuredProps={featuredProjects.map(project => ({project, contributorUsername: 'JamesGJ5'}))}
        unfeaturedProps={unfeaturedProjects.map(project => ({project, contributorUsername: 'JamesGJ5'}))}
        ListedComponent={OpenSourceProject}
      />
    </main>
  );
}
