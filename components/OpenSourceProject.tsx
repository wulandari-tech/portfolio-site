import ProjectComponent from "./Project";
import { Project } from "@/types";

function makePullRequestsURL(repoName: string, contributorUsername: string): string {
    return `https://github.com/${repoName}/pulls?q=is:pr+author:${contributorUsername}`;
}

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
