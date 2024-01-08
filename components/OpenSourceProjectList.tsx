// TODO: rather than continuing with this component, consider adhering to the Liskov substitution principle regarding the Project and OpenSourceProject components, the latter of which composes the former. Do this by modifying the ProjectList component such that it can render a list of Project components or any of its child components without having to modify the code in ProjectList every time a new child of Project is made and is to be featured in a ProjectList
// TODO: make sure interfaces and types in this project extend each other well in general, whether they are in the types folder or in component files
import OpenSourceProjectComponent from "./OpenSourceProject";
import { Project } from "@/types";

interface OpenSourceProjectListProps {
    projectList: Project[],
    contributorUsername: string,
}

export default function OpenSourceProjectList({ projectList, contributorUsername }: OpenSourceProjectListProps) {
    return (
        <ol>
            {projectList.map(project => <li>
                <OpenSourceProjectComponent project={project} contributorUsername={contributorUsername}/>
            </li>)}
        </ol>
    )
}
