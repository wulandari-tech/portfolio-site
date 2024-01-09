import OpenSourceProject from "@/components/OpenSourceProject";
import openSourceProjects from "@/data/openSourceProjects";
import OpenSourceProjectList from "@/components/OpenSourceProjectList";

export default function OpenSourcePage() {
    return (
      <main>
        <h1>My Open Source Contributions...</h1>
        <section>
            <h2>Featured...</h2>
            <OpenSourceProjectList projectList={openSourceProjects} contributorUsername="JamesGJ5"/>
        </section>
        <section>
            <h2>More...</h2>
        </section>
      </main>
    );
}
