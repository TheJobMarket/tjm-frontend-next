"use client"

import styles from "./LanguageSwitcher.module.css";
import React from "react";
import "../globals.css"
import {Locale, i18n} from "@/i18n-config";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {

    const pathName = usePathname();
    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };
    const restOfLangs = i18n.locales
        .filter(l => l !== lang)

    function showDropdown() {
        document.getElementById("dropdownContent")!.style.display = "block";
    }

    function hideDropdown() {
        document.getElementById("dropdownContent")!.style.display = "none";
    }

    return (
        <div id="dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className={styles.dropdown}>
            <button className={styles.dropbtn}>{lang?.toUpperCase()}</button>
            <div id="dropdownContent" className={styles.dropdownContent}>
                <div className={styles.linkContainer}>
                    {restOfLangs.map((l, i) =>
                        // <a key={i} href={""}>{l}</a>
                        <Link key={i} href={redirectedPathName(l)}>{l.toUpperCase()}</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

