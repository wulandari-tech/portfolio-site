import { Project } from "@/types";
// import { OpenSourceProject } from "@/types";

const openSourceProjects: Project[] = [
    {
        // TODO: address the fact that the repoName and repoUrl here are redundant and the fact that this might be similar for the main personal project objects
        repoName: 'TheOdinProject/curriculum',
        repoUrl: 'https://github.com/TheOdinProject/curriculum',
        repoDescripion: 'The open curriculum for learning web development.',
        isFeatured: true,
        languagesUsed: ['Markdown'],
        lastModified: new Date(2023, 11, 30, 22, 19, 0),
        deploymentURL: 'https://www.theodinproject.com/',
    },
];

export default openSourceProjects;
