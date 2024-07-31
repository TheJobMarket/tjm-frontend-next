
import styles from './JobSearchBar.module.css'

export default function JobSearchBar() {
    return (
        <div className={styles.searchDiv}>
            <input type="text" placeholder="Search by job title or description" className={styles.searchBar} />
            <button className={[styles.searchButton].join(" ")}>🔍</button>
        </div>
    )
}