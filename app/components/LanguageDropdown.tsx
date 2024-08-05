"use client"

import styles from "./LanguageDropdown.module.css";
import React from "react";
import "../globals.css"

export default function LanguageDropdown() {

    function showDropdown() {
        document.getElementById("dropdownContent")!.style.display = "block";
    }

    function hideDropdown() {
        document.getElementById("dropdownContent")!.style.display = "none";
    }

    return (
        <div id="dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className={styles.dropdown}>
            <button className={styles.dropbtn}>EN</button>
            <div id="dropdownContent" className={styles.dropdownContent}>
                <div className={styles.linkContainer}>
                    <a href="#">FR</a>
                    <a href="#">ES</a>
                </div>
            </div>
        </div>
    )
}

