import OpenSourceProject from "@/components/OpenSourceProject";
// TODO: make sure links elsewhere use @ like below
import openSourceProjects from "@/data/openSourceProjects";

export default function OpenSourcePage() {
    return (
      <main>
        <h1>My Open Source Contributions...</h1>
        <section>
            <h2>Featured...</h2>
            <OpenSourceProject project={openSourceProjects[0]} contributorUsername="JamesGJ5"/>
        </section>
        <section>
            <h2>More...</h2>
        </section>
      </main>
    );
}
