// TODO: consider whether it's best to have all types and interfaces in one file or if some would be better elsewhere

export interface Experience {
    position: string,
    org: string,
    orgSrc?: string,
    startYear: number,
    endYear?: number,
    description: string,
    skills: string[],
}

export interface ExperienceProps {
    experience: Experience,
}

export interface Project {
    repoName: string,
    repoDescripion: string | null,
    isFeatured: boolean,
    languagesUsed: string[],
    lastModified: Date,
    deploymentURL: string | null,
    projectImageSrc?: string,
}

export interface ProjectProps {
    project: Project,
}

export interface OpenSourceProjectProps extends ProjectProps {
    contributorUsername: string,
}

export interface ProjectListProps {
    projectList: Project[]
}

export interface OpenSourceProjectListProps {
    projectList: Project[],
    contributorUsername: string,
}

export interface ListProps<T extends object> {
    dataList: T[],
    ListedComponent: React.ComponentType<T>,
}
