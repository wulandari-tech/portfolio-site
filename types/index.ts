// TODO: finalise which of the below should be types vs interfaces

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

export interface Project {
    repoName: string,
    repoDescripion: string | null,
    isFeatured: boolean,
    deploymentURL: string | null,
    projectImageSrc?: string,
}

export interface PersonalProject extends Project {
    lastModified: Date,
    languagesUsed: string[],
}

export interface OpenSourceProject extends Project {
    contributions: {
        [type: string]: string, // URLs linking to contributions (e.g. issues, PRs etc.)
    },
    languagesUsed: string[],
}

export interface Certification {
    name: string,
    issuer: string,
    issueDate: Date,
    credentialUrl: string,
    credentialId: string,
}

export interface ProjectProps {
    project: Project,
}

export interface PersonalProjectProps{
    personalProject: PersonalProject,
}

export interface OpenSourceProjectProps {
    openSourceProject: OpenSourceProject,
}

export interface CertificationProps {
    certification: Certification,   
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
