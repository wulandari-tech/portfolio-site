import ProjectComponent from "@/components/Project";
import { Project } from "@/types";

interface ProjectListProps {
    projectList: Project[]
}

export default function ProjectList({ projectList }: ProjectListProps) {
    return (
        <ol>
            {projectList.map(project => <li>
                <ProjectComponent project={project}/>
            </li>)}
        </ol>
    )
}
