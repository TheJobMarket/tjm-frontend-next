import {resolveCid} from "@/app/lib/utils";
import styles from './JobPostContainer.module.css';
import JobAddInfo from "@/app/components/JobAddInfo";
import Image from "next/image";

export default function JobPostContainer({ job }: any) {
    return (
        <div className={styles.jobContainer}>
            <a href={`http://localhost:3000/jobs/${job.id}`}>
                <div className={styles.leftDiv}>
                    <div className={styles.logoDiv}>
                        {/*<Image alt="" src={resolveCid(job.company.logoCid)} fill={true}/>*/}
                        {/* TODO: Change to Image once the image resolution issue is fixed*/}
                        <img alt="" src={resolveCid(job.company.logoCid)}/>
                    </div>
                    <div className={styles.titleAndDescription}>
                        <div className="job-title">{job.title}</div>
                        <div className="company-title">{job.company.name}</div>
                    </div>
                </div>
                <JobAddInfo job={job}/>
            </a>
        </div>
    )
}