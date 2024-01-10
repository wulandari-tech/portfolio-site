import ProjectComponent from "./Project";
import { OpenSourceProjectProps } from "@/types";

function makePullRequestsURL(repoName: string, contributorUsername: string): string {
    return `https://github.com/${repoName}/pulls?q=is:pr+author:${contributorUsername}`;
}

// TODO: consider just using Project components for open source projects and having contributorUsername as a parameter of Project components.
export default function OpenSourceProject({ project, contributorUsername }: OpenSourceProjectProps) {
    const pullRequestsURL = makePullRequestsURL(project.repoName, contributorUsername);
    return (
        <>
            <ProjectComponent project={project}/>
            Contributons: <a aria-label='Link to contributions (opens in new tab)' href={pullRequestsURL} target='_blank'>{pullRequestsURL}</a>
        </>
    );
}
