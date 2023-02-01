import React from "react"
import Link from "next/link"
import styles from "../styles/Layouts.module.css"
import Head from 'next/head'
import { useRouter } from "next/router";

const Layout = ({ children }: {children: any}) => {
  const router = useRouter();
  const navSearchPage = async event => {
    event.preventDefault()
    
    var navSearch = event.target.navSearch.value.trim();
    event.target.reset();

    if(navSearch == 'contact' || navSearch == 'contact me' || navSearch == 'email'){
      router.push('/contact');
    } else if(navSearch== 'home' || navSearch == '~' || navSearch == '..' || navSearch == ''){
        router.push('/');
    } else if(navSearch== 'projects' || navSearch == 'project' || navSearch == 'work'){
        router.push('/projects');
    } else if(navSearch == 'resume' || navSearch == 'cv'){
        router.push('/resume');
    } else if(navSearch == 'github'){
        router.push("https://github.com/RaphaelChevallier");
    } else if(navSearch == 'linkedin' || navSearch == 'linked in'){
        router.push("https://www.linkedin.com/in/raphael-c/");
    }
  }
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
        <link rel="icon" href="/connectionColor.png" />
      </Head>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.profileIcons}>
            <span>
              <Link href="/contact">
                <a>
                  <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="33" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                  </svg>
                </a>
              </Link>
            </span>
            <span>
              <Link href="https://www.linkedin.com/in/raphael-c/">
                <a target="_blank">
                  <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="33" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </Link>
            </span>
            <span>
              <Link href="https://github.com/RaphaelChevallier">
                <a target="_blank">
                  <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="33" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </Link>
            </span>
          </div>
          <div className={styles.searchBar}>
            <p>{'>'}~ cd /Home/</p>
              <form onSubmit={navSearchPage}>
                <input className={styles.navSearch} placeholder="&#9646;" name="navSearch" type="text" />
                <input type="submit" className={styles.navSearchSubmit}  />
              </form>
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
                <a className={router.pathname == "/resume" ? styles.activeLink : styles.link}>Resume</a>
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