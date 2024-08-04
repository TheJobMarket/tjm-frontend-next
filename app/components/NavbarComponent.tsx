import React from "react";
import styles from "./NavbarComponent.module.css";
import "../../public/logo_tjm_white.png";
import Image from "next/image";
import logo from "../../public/logo_tjm_white.png";
import {log} from "node:util";

export default function NavbarComponent() {

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
            <div>Post a job</div>
        </div>
    )
}