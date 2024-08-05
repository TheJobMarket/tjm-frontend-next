
import styles from './JobSearchBar.module.css'

export default async function JobSearchBar({ lang }: any) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then((module) => module.default);

    return (
        <div className={styles.searchDiv}>
            <input type="text" placeholder={dictionary.text.searchPlaceholder} className={styles.searchBar} />
            <button className={[styles.searchButton].join(" ")}>🔍</button>
        </div>
    )
}