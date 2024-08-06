import styles from "./page.module.css";
import {getDictionary} from "@/getDictionary";

export default async function About({ params }: any ) {

    const dictionary = await getDictionary(params.lang);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>{dictionary.about?.title}</h1>
            {dictionary.about?.text.map((text: string, i: number) => <p key={i}>{text}</p>)}
        </div>
    )
}