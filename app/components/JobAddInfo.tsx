import styles from './JobAddInfo.module.css';

function getInfo(job: any) {
    let info = [];

    if (job.salary != null) {
        info.push({
            property: "salary",
            value: job.salary
        });
    }

    if (job.languages != null) {
        info.push({
            property: "languages",
            value: job.languages
        });
    }

    if (job.location != null) {
        info.push({
            property: "location",
            value: job.location
        });
    }

    if (job.date != null) {
        info.push({
            property: "date",
            value: job.date
        });
    }

    return info;
}

export default function JobAddInfo({ job }: any) {
    const info = getInfo(job);

    const icons: any = {
        "date": "",
        "location": "",
        "languages": "",
        "salary": "",
    };

    return (
        <div className={styles.container}>
            {info.map((e, i) => (
                <div key={i} className={styles.infoItem}>
                    <div className={styles.icon}>{icons[e.property]}</div>
                    <div className={styles.text}>{e.value}</div>
                </div>
            ))}
        </div>
    )
}