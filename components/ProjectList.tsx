import ProjectComponent from "@/components/Project";
import { ProjectListProps } from "@/types";

export default function ProjectList({ projectList }: ProjectListProps) {
    return (
        <ol>
            {projectList.map(project => <li>
                <ProjectComponent project={project}/>
            </li>)}
        </ol>
    )
}
