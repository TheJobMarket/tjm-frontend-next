import React from "react";
import styles from "./NavbarComponent.module.css";
import "../../../public/logo_tjm_white.png";
import Image from "next/image";
import logo from "../../../public/logo_tjm_white.png";
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher";
import {Locale} from "@/i18n-config";

export default function NavbarComponent({ lang }: { lang: Locale }) {

    const pages = [
        "About",
        "Contact",
    ]

    return (
        <div className={styles.navbarComponent}>
            <div className={styles.pageList}>
                <div className={styles.logoDiv}>
                    <a href={"/"}>
                        <Image src={logo} alt="" width={80} />
                    </a>
                </div>
                {pages.map((page, i) => <div key={i} className={styles.pageName}>{page}</div>)}
            </div>
            <div className={styles.pageList}>
                <div>Post a job</div>
                <LanguageSwitcher lang={lang}/>
            </div>
        </div>
    )
}