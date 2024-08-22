import styles from "./JobPostMinimal.module.css";
import {resolveCid} from "@/app/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function JobPostMinimal({ job, lang }: any) {
    return (
        <Link href={`/${lang}/jobs/${job.company.id}/${job.id}`} className={"noDecoration"}>
            <div className={[styles.container, "transparentCard", "clickable"].join(" ")}>
                <div className={styles.logoDiv}>
                    {/* TODO change to Image eventually */}
                    {/*<img alt="" src={resolveCid(job.company.logoCid)} />*/}
                    <Image alt="" src="" fill={true} />
                </div>
                <div className={styles.jobTitle}>{job.title}</div>
            </div>
        </Link>
    )
}