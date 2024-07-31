import JobPostContainer from "@/app/components/JobPostContainer";
import JobSearchBar from "@/app/components/JobSearchBar";
import styles from "./page.module.css";
import '../../globals.css';

export default async function Page() {
    const jobs = await fetch("http://localhost:8080/jobs", { mode: "cors", method: "GET", cache: "no-store"})
        .then(res => res.json());

    return (
        <div className={styles.jobListPage}>
            <div className={styles.jobsContainer}>
                <h1 className={styles.title}>Explore jobs 💼</h1>
                <JobSearchBar />
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