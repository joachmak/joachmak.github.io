
type ExperienceDoc = {
    title: string,
    date: [Date, Date | null],
    descriptionShort: string,
    descriptionExtended: string,
    skills: string[],
    url?: string
}

export type { ExperienceDoc }