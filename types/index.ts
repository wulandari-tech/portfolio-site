// TODO: consider whether it's best to have all types and interfaces in one file or if some would be better elsewhere
// TODO: finalise which of the below should be types vs interfaces
// TODO: finalise type hierarchy

export interface Experience {
    position: string,
    org: string,
    orgSrc?: string,
    startYear: number,
    endYear?: number,
    description: string,
    skills: string[],
    orgLinkedInUrl?: string,
    orgHomePageUrl?: string,
}

export interface ExperienceProps {
    experience: Experience,
}

export interface GitHubRepo {
    full_name: string,
    description: string | null,
    topics: string[],
    languages_url: string,
    created_at: string,
    homepage: string | null,
}

export interface RepoLanguageStats {
    [language: string]: number,
}

export interface Commit {
    commit: {
        author: {
            date: string,
        },
    },
}

// TODO: consider combining Project and GitHubRepo in some way
export interface Project {
    repoName: string,
    repoDescripion: string | null,
    isFeatured: boolean,
    languagesUsed: string[],
    lastModified: Date,
    deploymentURL: string | null,
    projectImageSrc?: string,
}

export interface OpenSourceProject extends Omit<Project, 'lastModified'> {
    contributions: {
        [type: string]: string,
    }
}

export interface ProjectProps {
    project: Omit<Project, 'lastModified'>,
}

// TODO: consider having OpenSourceProjectProps extend ProjectProps in some way as OpenSourceProject renders Project
export interface OpenSourceProjectProps {
    openSourceProject: OpenSourceProject,
}

export interface ProjectListProps {
    projectList: Project[],
}

export interface OpenSourceProjectListProps {
    projectList: Project[],
    contributorUsername: string,
}

export interface ListProps<T extends object> {
    dataList: T[],
    ListedComponent: React.ComponentType<T>,
}

// TODO: consider making FeaturedUnfeaturedProps extend/compose ListProps but with two dataList keys rather than one
export interface FeaturedUnfeaturedProps<T extends object> {
    featuredProps: T[],
    unfeaturedProps: T[],
    ListedComponent: React.ComponentType<T>,
}
