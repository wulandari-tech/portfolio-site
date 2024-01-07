import { Project } from "@/types";
// import { OpenSourceProject } from "@/types";

const openSourceProjects: Project[] = [
    {
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
