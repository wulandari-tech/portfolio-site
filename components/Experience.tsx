import Image from "next/image"
import { Experience } from "@/types";

interface ExperienceProps {
    experience: Experience,
}

export default function Experience({experience}: ExperienceProps) {
    const {position, org, orgSrc, startYear, endYear, description, skills} = experience;
    let dateSpanText: string = String(startYear);
    if (!endYear) {
        dateSpanText += ` --`;
    } else if (endYear && endYear > startYear) {
        dateSpanText += ` -- ${endYear}`;
    }
    return (
        <div>
            <p>
                {position}
            </p>
            <p>
                {org}
            </p>
            {orgSrc && <Image src={orgSrc} alt='' width={50/96*98} height={50} />}
            <p>
                {dateSpanText}
            </p>
            <p>
                {description}
            </p>
            <p>
                {skills.join(', ')}
            </p>
        </div>
    )
}