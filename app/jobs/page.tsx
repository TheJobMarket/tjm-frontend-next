import JobPostContainer from "@/app/components/JobPostContainer";
import styles from "./page.module.css";

export default async function Page() {
    const jobs = await fetch("http://localhost:8080/jobs", { mode: "cors", method: "GET" })
        .then(res => res.json());

    return (
        <div className={styles.jobListPage}>
            <div className={styles.banner}></div>
            <div className={styles.jobsContainer}>
                <h1 className={styles.title}>Explore jobs</h1>
                <div className={styles.containerFlex}>
                    {jobs.map((job: any, i: number) =>
                        <JobPostContainer
                            key={i}
                            job={job}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}