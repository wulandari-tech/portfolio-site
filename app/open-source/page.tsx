import List from "@/components/List";
import OpenSourceProject from "@/components/OpenSourceProject";
import openSourceProjects from "@/data/openSourceProjects";
import { makeFeaturedProjectList, makeUnfeaturedProjectList } from "@/utils/projectUtils";

export default function OpenSourcePage() {
  const featuredProjects = makeFeaturedProjectList(openSourceProjects);
  const unfeaturedProjects = makeUnfeaturedProjectList(openSourceProjects);
  return (
    <main>
      <h1>My Open Source Contributions...</h1>
      {featuredProjects.length > 0 && <section>
          <h2>Featured...</h2>
          <List dataList={featuredProjects.map(project => ({project, contributorUsername: 'JamesGJ5'}))} ListedComponent={OpenSourceProject}/>
      </section>}
      {unfeaturedProjects.length > 0 && <section>
          <h2>{featuredProjects.length ? 'More' : 'Featured'}...</h2>
          <List dataList={unfeaturedProjects.map(project => ({project, contributorUsername: 'JamesGJ5'}))} ListedComponent={OpenSourceProject}/>
      </section>}
    </main>
  );
}
