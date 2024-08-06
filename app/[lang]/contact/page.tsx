import styles from "./page.module.css";
import {getDictionary} from "@/getDictionary";
import Link from "next/link";


export default async function Contact({ params }: any ) {

    const dictionary = await getDictionary(params.lang);
    const emailAddress = "info@thejobmarket.eu"

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>{dictionary.contact?.title}</h1>
            <p>{dictionary.contact?.text} <Link className={styles.link} href={`mailto:${emailAddress}`}><b>{emailAddress}</b></Link></p>
        </div>
    )
}