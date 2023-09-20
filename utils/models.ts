export type JobType = {
    title: string,
    startDate: Date,
    endDate: Date,
    locationFormat: 'remote' | 'office' | 'hybrid',
    workFormat: 'part time' | 'full time',
    description: string,
    requirements: string[]
    techStack: string[],
    company: string
}