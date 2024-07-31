import {resolveCid} from "@/app/lib/utils";
import styles from './JobPostContainer.module.css';
import JobAddInfo from "@/app/components/JobAddInfo";
import Image from "next/image";
import Link from "next/link";
import '../globals.css'


export default function JobPostContainer({ job }: any) {
    return (
        <Link href={`http://localhost:3000/jobs/${job.id}`} className={styles.noDecoration}>
            <div className={styles.jobContainer}>
                    <div className={styles.leftDiv}>
                        <div>
                        <div className={styles.logoDiv}>
                            {/*<Image alt="" src={resolveCid(job.company.logoCid)} fill={true}/>*/}
                            {/* TODO: Change to Image once the image resolution issue is fixed*/}
                            <img alt="" src={resolveCid(job.company.logoCid)}/>
                        </div>
                        </div>
                        <div className={styles.titleAndDescription}>
                            <div className={styles.jobTitle}>{job.title}</div>
                            <div className={styles.companyName}>{job.company.name}</div>
                        </div>
                    </div>
                    <JobAddInfo job={job}/>
            </div>
        </Link>
    )
}