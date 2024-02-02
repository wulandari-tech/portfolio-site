import React from "react";
import Project from "./Project";
import { OpenSourceProjectProps } from "@/types";

function makeContributionElement(type: string, url: string): React.ReactElement {
    return <li><p>{type}: <a aria-label={`Link to ${type} (opens in new tab)`} href={url} target='_blank'>{url}</a></p></li>;
}

export default function OpenSourceProject({ openSourceProject }: OpenSourceProjectProps) {
    const {contributions, languagesUsed, ...project} = openSourceProject;
    return (
        <>
            <Project project={project}/>
            <p>
                {languagesUsed.join(', ')}
            </p>
            <ul>
                {Object.entries(contributions).map(([type, url]) => makeContributionElement(type, url))}
            </ul>
        </>
    );
}
