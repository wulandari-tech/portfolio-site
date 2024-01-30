import ProjectComponent from "./Project";
import { OpenSourceProjectProps } from "@/types";

export default function OpenSourceProject({ openSourceProject }: OpenSourceProjectProps) {
    return (
        <>
            <ProjectComponent project={openSourceProject}/>
            <ul>
                {Object.entries(openSourceProject.contributions).map(([type, url]) => <li><p>{type}: <a aria-label='Link to contributions (opens in new tab)' href={url} target='_blank'>{url}</a></p></li>)}
            </ul>
        </>
    );
}
