// NOTE: this file is temporary and simply to aid in building the frontend before building the backend. Later, project details will be fetched directly from GitHub
import { Project } from "@/types";

const projects: Project[] = [
    {
        repoName: 'JamesGJ5/letterboxd-guessing-game',
        repoDescripion: 'A full-stack game made using TypeScript, MongoDB, Express, React and NodeJS. It features WCAG Level A accessibility, responsive design using vanilla CSS and Material UI, a web scraper using Puppeteer, an authenticated RESTful API and full-stack testing with Jest.',
        isFeatured: true,
        languagesUsed: ['TypeScript', 'JavaScript', 'CSS', 'Dockerfile'],
        lastModified: new Date(2023, 11, 30, 22, 19, 0),
        deploymentURL: 'https://letterboxd-guessing-game.up.railway.app/',
    },
    {
        repoName: 'JamesGJ5/yellowstone-permutation-integer-calculator',
        repoDescripion: 'A sequence calculator built using Python, AWS, vanilla JavaScript and HTML. It incorporates an AWS Lambda function written in Python, Amazon API Gateway, Amazon DynamoDB, Amazon IAM and AWS Amplify for hosting.',
        isFeatured: true,
        languagesUsed: ['Python', 'JavaScript', 'HTML', 'CSS'],
        lastModified: new Date(2023, 5, 15, 16, 0, 0),
        deploymentURL: 'https://main.d1xjk6ynccgx64.amplifyapp.com/',
    },
    {
        repoName: 'JamesGJ5/binary-search-trees',
        repoDescripion: 'An object-oriented project I made in Node.js and JavaScript to learn more about binary search trees.',
        isFeatured: false,
        languagesUsed: ['JavaScript'],
        lastModified: new Date(2023, 4, 27, 12, 55, 0),
        deploymentURL: null,
    },
    {
        repoName: 'JamesGJ5/admin-dashboard',
        repoDescripion: 'A static webpage made using HTML and CSS to learn to use CSS Grid.',
        isFeatured: false,
        languagesUsed: ['HTML', 'CSS'],
        lastModified: new Date(2023, 4, 26, 15, 24, 0),
        deploymentURL: 'https://htmlpreview.github.io/?https://github.com/JamesGJ5/admin-dashboard/blob/main/index.html',
    },
]

export default projects;