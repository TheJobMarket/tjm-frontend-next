import styles from "./page.module.css";
import "../../globals.css";
import {getDictionary} from "@/getDictionary";
import Link from "next/link";

export default async function PostJob({ params }: any) {
    const dictionary = await getDictionary(params.lang);
    const emailAddress = "info@thejobmarket.eu";

    return (
        <div className={"page"}>
            <h1>{dictionary.postJob.title}</h1>
            <p>{dictionary.postJob.text} <Link className={"link"} href={`mailto:${emailAddress}`}><b>{emailAddress}</b></Link>.</p>
        </div>
    )
}