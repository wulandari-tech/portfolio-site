import { Project } from "@/types"
import Image from "next/image";

interface ProjectProps {
    project: Project,
}

export default function Project({ project }: ProjectProps) {
    const { repoName, repoUrl, repoDescripion, languagesUsed, lastModified, deploymentURL, projectSrc } = project;
    return (
        // TODO: consider replacing the outer div with just <></> here and in similar components to make them more modular
        <div>
            <p>
                {repoName}
            </p>
            <p>
                Code: <a aria-label='Link to code (opens in new tab)' href={repoUrl} target='_blank'>{deploymentURL}</a>
            </p>
            {repoDescripion && <p>{repoDescripion}</p>}
            <p>
                {languagesUsed.join(', ')}
            </p>
            <p>
                Last modified: {lastModified.toDateString()}
            </p>
            {deploymentURL && <p>
                Try at <a aria-label='Link to deployment (opens in new tab)' href={deploymentURL} target='_blank'>{deploymentURL}</a>
            </p>}
            {projectSrc && <Image src={projectSrc} alt='' width={50/96*98} height={50} />}
        </div>
    );
}
