import { OpenSourceProject } from "@/types";

const openSourceProjects: OpenSourceProject[] = [
    {
        repoName: 'TheOdinProject/curriculum',
        repoDescripion: 'The open curriculum for learning web development.',
        isFeatured: true,
        languagesUsed: ['Markdown'],
        // // TODO: consider dynamically loading the date of last modified from GitHub or ranking open source projects with another metric (or even a static one)
        // lastModified: new Date(2023, 5, 24, 21, 37, 0),
        deploymentURL: 'https://www.theodinproject.com/',
        contributions: {
            'Pull requests': 'https://github.com/TheOdinProject/curriculum/pulls?q=is:pr+author:JamesGJ5',
        },
    },
];

export default openSourceProjects;
