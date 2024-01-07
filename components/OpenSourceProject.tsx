import ProjectComponent from "./Project";
import { Project } from "@/types";

function makePullRequestsURL(repoName: string, contributorUsername: string): string {
    return `https://github.com/${repoName}/pulls?q=is:pr+author:${contributorUsername}`;
}

// TODO: consider whether it's necessary to use ProjectProps here rather than just project given that composition of a React component is being done and you want to ensure that the component's props specifically are satisfied. However, not sure this is strictly necessary.
interface OpenSourceProjectProps {
    project: Project,
    contributorUsername: string,
}

export default function OpenSourceProject({ project, contributorUsername }: OpenSourceProjectProps) {
    const pullRequestsURL = makePullRequestsURL(project.repoName, contributorUsername);
    return (
        <>
            <ProjectComponent project={project}/>
            Contributons: <a aria-label='Link to contributions (opens in new tab)' href={pullRequestsURL} target='_blank'>{pullRequestsURL}</a>
        </>
    );
}
