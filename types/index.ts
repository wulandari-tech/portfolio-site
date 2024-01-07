export interface Experience {
    position: string,
    org: string,
    orgSrc?: string,
    startYear: number,
    endYear?: number,
    description: string,
    skills: string[],
}

export interface Project {
    repoName: string,
    repoUrl: string,
    repoDescripion: string | null,
    isFeatured: boolean,
    languagesUsed: string[],
    lastModified: Date,
    deploymentURL: string | null,
    projectImageSrc?: string,
}

// Things needed by open source projects that aren't in the above interface:
// - URL to my PRs for the repo

// Things in the above interface that aren't relevant to open source projects:
// 