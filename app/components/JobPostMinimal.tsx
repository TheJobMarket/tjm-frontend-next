import styles from "./JobPostMinimal.module.css";
import {resolveCid} from "@/app/lib/utils";
import Link from "next/link";

export default function JobPostMinimal({ job, lang }: any) {
    return (
        <Link href={`http://localhost:3000/${lang}/jobs/${job.company.id}/${job.id}`} className={"noDecoration"}>
            <div className={[styles.container, "transparentCard", "clickable"].join(" ")}>
                <div className={styles.logoDiv}>
                    {/* TODO change to Image eventually */}
                    <img alt="" src={resolveCid(job.company.logoCid)} />
                </div>
                <div className={styles.jobTitle}>{job.title}</div>
            </div>
        </Link>
    )
}