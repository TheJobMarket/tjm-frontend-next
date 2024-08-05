import {resolveCid} from "@/app/lib/utils";
import styles from './JobPostContainer.module.css';
import JobAddInfo from "@/app/[lang]/components/JobAddInfo";
import Link from "next/link";
import '../../globals.css';
import {Locale} from "@/i18n-config";

export default function JobPostContainer(
    { job, lang }: { job: any, lang: Locale }
) {
    return (
        <Link href={`http://localhost:3000/${lang}/jobs/${job.company.id}/${job.id}`} className={"noDecoration"}>
            <div className={[styles.jobContainer, "transparentCard", "clickable"].join(" ")}>
                <div className={styles.leftDiv}>
                    <div className={styles.logoDiv}>
                        {/*<Image alt="" src={resolveCid(job.company.logoCid)} fill={true}/>*/}
                        {/* TODO: Change to Image once the image URI resolution issue is fixed*/}
                        <img alt="" src={resolveCid(job.company.logoCid)}/>
                    </div>
                    <div className={styles.titleAndCompany}>
                        <div className={styles.jobTitle}>{job.title}</div>
                        <div className={styles.companyName}>{job.company.name}</div>
                    </div>
                </div>
                <JobAddInfo job={job}/>
            </div>
        </Link>
    )
}