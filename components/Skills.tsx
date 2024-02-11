import { SkillsProps } from "@/types";

export default function Skills({ skills }: SkillsProps) {
    return (
        <ul>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
    );
}