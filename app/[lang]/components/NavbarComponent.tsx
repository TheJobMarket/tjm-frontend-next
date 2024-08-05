import React from "react";
import styles from "./NavbarComponent.module.css";
import "../../../public/logo_tjm_white.png";
import Image from "next/image";
import logo from "../../../public/logo_tjm_white.png";
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/getDictionary";

export default async function NavbarComponent({ lang }: { lang: Locale }) {

    const dictionary: any = await getDictionary(lang);

    const pages: string[] = [
        dictionary.navbar.about,
        dictionary.navbar.contact,
    ]

    return (
        <div className={styles.navbarComponent}>
            <div className={styles.pageList}>
                <div className={styles.logoDiv}>
                    <a href={`/${lang}`}>
                        <Image src={logo} alt="" width={80} />
                    </a>
                </div>
                {pages.map((page, i) => <div key={i} className={styles.pageName}>{page}</div>)}
            </div>
            <div className={styles.pageList}>
                <div>{dictionary.navbar.postJob}</div>
                <LanguageSwitcher lang={lang}/>
            </div>
        </div>
    )
}