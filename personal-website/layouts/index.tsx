import React from "react"
import Link from "next/link"
import styles from "../styles/Layouts.module.css"
import Head from 'next/head'
import { useRouter } from "next/router";
import Image from 'next/image';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <React.Fragment>
    <Head>
      <style>
          {`body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          a {
            text-decoration: none;
          }`}
        </style>
        <title>Raphael Chevallier</title>
        <meta name="description" content="Raphael Chevallier -Software Engineer- Personal Portfolio site" />
        <link rel="icon" href="/interconnectivity.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.profileIcons}>
          </div>
          <div className={styles.searchBar}>
            <p>{'>'}~ cd /Home/</p>
            <input className={styles.navSearch} placeholder="&#9646;" id="navSearch" type="text" />
          </div>
            <div className={styles.linkGroup}>
              <Link href="/">
              <a className={router.pathname == "/" ? styles.activeLink : styles.link}>Home</a>
              </Link>
              <Link href="/projects">
              <a className={router.pathname == "/projects" ? styles.activeLink : styles.link}>Projects</a>
              </Link>
              {/* <Link href="/blog">
              <a className={router.pathname == "/blog" ? styles.activeLink : styles.link}>Blog</a>
              </Link> */}
              <Link href="/resume">
              <a className={router.pathname == "/resume" ? styles.activeLink : styles.link}>About me</a>
              </Link>
              <Link href="/contact">
              <a className={router.pathname == "/contact" ? styles.activeLink : styles.link}>Contact</a>
              </Link>
            </div>
          </div>
        <div className={styles.pageBody}>{children}</div>
      </div>
    </React.Fragment>
  )
}

export default Layout