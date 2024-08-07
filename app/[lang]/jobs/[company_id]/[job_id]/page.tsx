import styles from './page.module.css';
import '../../../../globals.css';
import JobPostMinimal from "@/app/components/JobPostMinimal";
import {resolveCid} from "@/app/lib/utils";
import JobAddInfo from "@/app/components/JobAddInfo";
import Link from "next/link";

export default async function Page({ params }: any) {

    const job: Job = await fetch(
        `http://localhost:8080/jobs/${params.job_id}`,
        { mode: "cors", method: "GET", cache: "no-store" }
    ).then(res => res.json());

    // TODO change to:
    // const similarJobs = await fetch(`http://localhost:8080/jobs?${job.title}+${job.company}`, { mode: "cors", method: "GET" })
    const similarJobs = await fetch(`http://localhost:8080/jobs`, { mode: "cors", method: "GET", cache: "no-store"})
        .then(res => res.json());

    const dictionary = await import(`@/app/dictionaries/${params.lang}.json`).then((module) => module.default);

    return (
        <div className={styles.positionPage}>
            <h1 className={styles.title}>{dictionary.text.positionPageTitle}</h1>
            <div className={styles.positionContainer}>
                <div className={[styles.positionHeader, "transparentCard"].join(" ")}>
                    <div className={styles.top}>
                        <div className={styles.logoAndPositionDescription}>
                            <div className={styles.logoDiv}>
                                <img alt="" src={resolveCid(job.company.logoCid)} />
                            </div>
                            <div className={styles.titleAndCompany}>
                                <div className={styles.jobTitle}>{job.title}</div>
                                <div className={styles.companyName}>{job.company.name}</div>
                            </div>
                        </div>
                        <div className={styles.applyDiv}>
                            {job.applicationUrl ? (
                                <Link href={job.applicationUrl} target={"_blank"}>
                                    <button className={[styles.applyButton, "clickable"].join(" ")}>
                                        {dictionary.text.apply}
                                    </button>
                                </Link>
                            ) : (
                                <button className={styles.applyButton} disabled>
                                    {dictionary.text.apply}
                                </button>
                            )}
                        </div>
                    </div>
                    <JobAddInfo job={job} />
                </div>
                <div className={styles.roleOuterContainer}>
                    <h2 className={styles.subtitle}>{dictionary.text.roleSectionTitle}</h2>
                    <div className={[styles.roleInfoCard, "transparentCard"].join(" ")}>
                        <div className={styles.contextText}>{job.description}</div>
                    </div>
                </div>
                <div className={styles.companyOuterContainer}>
                    <h2 className={styles.subtitle}>{dictionary.text.companySectionTitle}</h2>
                    <div className={[styles.companyInfoCard, "transparentCard"].join(" ")}>
                        <div className={styles.contentText}>{job.company.description}</div>
                    </div>
                </div>
                <div className={styles.simOpsOuterContainer}>
                    <h2 className={styles.subtitle}>{dictionary.text.similarSectionTitle}</h2>
                    <div className={styles.listOfOpportunities}>
                        {similarJobs.map((job: any, i: number) => <JobPostMinimal key={i} job={job} lang={params.lang} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}