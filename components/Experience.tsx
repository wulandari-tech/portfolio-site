import Image from "next/image"
import Skills from "@/components/Skills";
import { ExperienceProps } from "@/types";

export default function Experience({ experience }: ExperienceProps) {
    const { position, org, orgImageSrc, startYear, endYear, descriptions, skills, orgLinkedInUrl, orgHomePageUrl } = experience;
    let dateSpanText: string = String(startYear);
    if (!endYear) {
        dateSpanText += ` --`;
    } else if (endYear && endYear > startYear) {
        dateSpanText += ` -- ${endYear}`;
    }
    return (
        <>
            <h3>
                {position}
            </h3>
            <p>
                {org}
            </p>
            {orgHomePageUrl && <p>
                <a href={orgHomePageUrl}>{orgHomePageUrl}</a>
            </p>}
            {orgLinkedInUrl && <p>
                LinkedIn: <a href={orgLinkedInUrl}>{orgLinkedInUrl}</a>
            </p>}
            {orgImageSrc && <Image src={orgImageSrc} alt={`Logo of ${org}`} width={50/96*98} height={50} />}
            <p>
                {dateSpanText}
            </p>
            <ul>
                {descriptions.map(description => <p>{description}</p>)}
            </ul>
            <Skills skills={skills}/>
        </>
    )
}