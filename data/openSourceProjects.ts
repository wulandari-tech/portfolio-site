import { Project } from "@/types";

const openSourceProjects: Project[] = [
    {
        repoName: 'TheOdinProject/curriculum',
        repoDescripion: 'The open curriculum for learning web development.',
        isFeatured: true,
        languagesUsed: ['Markdown'],
        // TODO: consider dynamically loading the date of last modified from GitHub or ranking open source projects with another metric (or even a static one)
        lastModified: new Date(2023, 5, 24, 21, 37, 0),
        deploymentURL: 'https://www.theodinproject.com/',
    },
];

export default openSourceProjects;
