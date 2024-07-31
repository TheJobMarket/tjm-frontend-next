import styles from './page.module.css';
import '../../globals.css';

export default async function Page({ params }: any) {

    const job: any = await fetch(`http://localhost:8080/jobs/${params.id}`, { mode: "cors", method: "GET" })
        .then(res => res.json());

    return (
        <div className={styles.positionPage}>
            <h1 className={styles.title}>About the position</h1>
            <div className={styles.positionContainer}>
                <div className={[styles.positionHeader, styles.transparentCard].join(" ")}>

                </div>
                <div className={styles.roleOuterContainer}>
                    <h2 className={styles.subtitle}>The role 📝</h2>
                    <div className={styles.transparentCard}>
                        <div className={styles.contextText}>{job.description}</div>
                    </div>
                </div>
                <div className={styles.companyOuterContainer}>
                    <h2 className={styles.subtitle}>The company 🏢</h2>
                    <div className={styles.transparentCard}>
                        <div className={styles.contentText}>{job.company.description}</div>
                    </div>
                </div>
                <div className={styles.simOpsOuterContainer}>
                    <h2 className={styles.subtitle}>Similar opportunities 🧲</h2>
                    <div className={styles.listOfOpportunities}>
                        <div className={styles.transparentCard}>
                            <div className={styles.contextText}>AAAAA</div>
                        </div>
                        <div className={styles.transparentCard}>
                            <div className={styles.contextText}>AAAAA</div>
                        </div>
                        <div className={styles.transparentCard}>
                            <div className={styles.contextText}>AAAAA</div>
                        </div>
                        <div className={styles.transparentCard}>
                            <div className={styles.contextText}>AAAAA</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}