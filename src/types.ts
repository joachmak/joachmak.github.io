
interface Experience {
    title:string;
    dateFrom:Date;
    dateTo:Date | null;
    descriptionShort:string;
    descriptionLong:string;
    skills:string[];
    url?:string;
}

export type { Experience }