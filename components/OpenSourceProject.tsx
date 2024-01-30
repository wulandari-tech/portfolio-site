import React from "react";
import ProjectComponent from "./Project";
import { OpenSourceProjectProps } from "@/types";

function makeContributionElement(type: string, url: string): React.ReactElement {
    return <li><p>{type}: <a aria-label={`Link to ${type} (opens in new tab)`} href={url} target='_blank'>{url}</a></p></li>;
}

export default function OpenSourceProject({ openSourceProject }: OpenSourceProjectProps) {
    const contributions = openSourceProject.contributions;
    return (
        <>
            <ProjectComponent project={openSourceProject}/>
            <ul>
                {Object.entries(contributions).map(([type, url]) => makeContributionElement(type, url))}
            </ul>
        </>
    );
}
