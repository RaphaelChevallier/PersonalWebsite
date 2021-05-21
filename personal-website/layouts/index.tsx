import React from "react"
import Link from "next/link"
import styles from "../styles/Layouts.module.css"
import Head from 'next/head'

const Layout = ({ children }) => {
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
        <div className={styles.header}>
            <Link href="/">
            <a>Home</a>
            </Link>
            <Link href="/projects">
            <a>Projects</a>
            </Link>
            <Link href="/blog">
            <a>Blog</a>
            </Link>
            <Link href="/resume">
            <a>Resume</a>
            </Link>
            <Link href="/contact">
            <a>Contact me</a>
            </Link>
        </div>
        <div className={styles.main}>{children}</div>
    </React.Fragment>
  )
}

export default Layout