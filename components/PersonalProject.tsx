import Project from "@/components/Project";
import { PersonalProjectProps } from "@/types";

export default function PersonalProject({ personalProject }: PersonalProjectProps) {
    const { lastModified, languagesUsed, ...project } = personalProject;
    return (
        <>
            <Project project={project}/>
            <p>
                {languagesUsed.join(', ')}
            </p>
        </>
    );
}