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
    projectSrc?: string,
}
