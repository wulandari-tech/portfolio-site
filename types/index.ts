export interface SkillsProps {
    skills: string[],
}

export interface Experience {
    position: string,
    org: string,
    orgImageSrc?: string,
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
    credentialId?: string,
    certificationImageSrc?: string,
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

export interface ComponentListProps<T extends object> {
    dataList: T[],
    ListedComponent: React.ComponentType<T>,
}

export interface FeaturedUnfeaturedProps<T extends object> {
    featuredProps: T[],
    unfeaturedProps: T[],
    ListedComponent: React.ComponentType<T>,
}
