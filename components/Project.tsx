import { Project, ProjectProps } from "@/types"
import Image from "next/image";

function makeRepoURL(repoName: string): string {
    return `https://github.com/${repoName}`;
}

export default function Project({ project }: ProjectProps) {
    const { repoName, repoDescripion, languagesUsed, deploymentURL, projectImageSrc } = project;
    const repoURL = makeRepoURL(repoName);
    return (
        // TODO: consider replacing the outer div with just <></> here and in similar components to make them more modular
        <>
            <p>
                {repoName}
            </p>
            <p>
                Code: <a aria-label='Link to code (opens in new tab)' href={repoURL} target='_blank'>{repoURL}</a>
            </p>
            {repoDescripion && <p>{repoDescripion}</p>}
            <p>
                {languagesUsed.join(', ')}
            </p>
            {deploymentURL && <p>
                Try at <a aria-label='Link to deployment (opens in new tab)' href={deploymentURL} target='_blank'>{deploymentURL}</a>
            </p>}
            {projectImageSrc && <Image src={projectImageSrc} alt='' width={50/96*98} height={50} />}
        </>
    );
}
