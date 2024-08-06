import React from "react";
import styles from "./NavbarComponent.module.css";
import "../../../public/logo_tjm_white.png";
import Image from "next/image";
import logo from "../../../public/logo_tjm_white.png";
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/getDictionary";
import Link from "next/link";

export default async function NavbarComponent({ lang }: { lang: Locale }) {

    const dictionary: any = await getDictionary(lang);

    const pages = [
        { name: dictionary.navbar.about, link: `/${lang}/about` },
        { name: dictionary.navbar.contact, link: `/${lang}/contact` },
    ]

    return (
        <div className={styles.navbarComponent}>
            <div className={styles.pageList}>
                <div className={styles.logoDiv}>
                    <a href={`/${lang}`}>
                        <Image src={logo} alt="" width={80} />
                    </a>
                </div>
                {pages.map((page, i) =>
                    <Link key={i} className={styles.pageName} href={page.link}>{page.name}</Link>
                )}
            </div>
            <div className={styles.pageList}>
                <Link href={`/${lang}/post-job`} className={styles.pageName}>{dictionary.navbar.postJob}</Link>
                <LanguageSwitcher lang={lang}/>
            </div>
        </div>
    )
}