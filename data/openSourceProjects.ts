import { OpenSourceProject } from "@/types";

const openSourceProjects: OpenSourceProject[] = [
    {
        repoName: 'TheOdinProject/curriculum',
        repoDescripion: 'The open curriculum for learning web development.',
        isFeatured: true,
        languagesUsed: ['Markdown'],
        deploymentURL: 'https://www.theodinproject.com/',
        contributions: {
            'Pull requests': 'https://github.com/TheOdinProject/curriculum/pulls?q=is:pr+author:JamesGJ5',
        },
    },
];

export default openSourceProjects;
