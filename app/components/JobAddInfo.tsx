import styles from './JobAddInfo.module.css';
import languageNames from '@/app/lib/languageNames';

function getInfo(job: Job, lang: string) {
    const formatter = new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
    });

    let info = [];

    if (job.payMin != null && job.payMax != null) {
        info.push({
            property: "salary",
            value: formatter.format(job.payMin) + " - " + formatter.format(job.payMax)
        });
    }

    if (job.languages.length > 0) {
        info.push({
            property: "languages",
            value: job.languages.map((l: string) => languageNames[l]).join(", ")
        });
    }

    if (job.country != null) {
        info.push({
            property: "location",
            value: job.city + ", " + job.country
        });
    }

    if (job.datePosted != null) {
        info.push({
            property: "date",
            value: job.datePosted
        });
    }

    return info;
}

export default function JobAddInfo({ job, lang }: any) {
    const info = getInfo(job, lang);

    const icons: any = {
        "date": "📅",
        "location": "📍",
        "languages": "🌐",
        "salary": "💶",
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