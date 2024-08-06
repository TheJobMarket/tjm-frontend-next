import JobPostContainer from "@/app/[lang]/components/JobPostContainer";
import JobSearchBar from "@/app/[lang]/components/JobSearchBar";
import styles from "./page.module.css";
import '../../globals.css';


export default async function Jobs({ params }: any) {
    const jobs = await fetch("http://localhost:8080/jobs", { mode: "cors", method: "GET", cache: "no-store"})
        .then(res => res.json());

    const dictionary = await import(`@/app/dictionaries/${params.lang}.json`).then((module) => module.default);

    return (
        <div className={styles.jobListPage}>
            <div className={styles.jobsContainer}>
                <h1 className={styles.title}>{dictionary.text.mainPageTitle}</h1>
                <JobSearchBar lang={params.lang}/>
                <div className={styles.containerFlex}>
                    {jobs.length > 0 ? (
                        jobs.map((job: any, i: number) =>
                            <JobPostContainer
                                key={i}
                                job={job}
                                lang={params.lang}
                            />
                        )
                    ) : (
                        <div className={styles.noJobs}>{dictionary.text.noJobs}</div>
                    )}
                </div>
            </div>
        </div>
    )
}