import styles from "./page.module.css";
import {getDictionary} from "@/getDictionary";
import Link from "next/link";

export default async function PostJob({ params }: any) {
    const dictionary = await getDictionary(params.lang);
    const emailAddress = "info@thejobmarket.eu";

    return (
        <div className={styles.page}>
            <h1>{dictionary.postJob.title}</h1>
            <p>{dictionary.postJob.text} <Link className={styles.link} href={`mailto:${emailAddress}`}><b>{emailAddress}</b></Link></p>
        </div>
    )
}