type Job = {
    id: string;
    datePosted: string;
    title: string;
    description: string;
    company: Company;
    active: boolean;
    applicationUrl: string | null;
    payMin: number | null;
    payMax: number | null;
    city: string;
    country: string;
    languages: string[] | null;
    workplace: string | null;
    jobType: string;
};

type Company = {
    id: string;
    dateAdded: string;
    name: string;
    website: string;
    logoCid: string;
    description: string;
};