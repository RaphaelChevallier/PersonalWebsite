
import React from "react"
import Layout from "../layouts/main_layout"
import styles from "../styles/index.module.css"


const Home = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.background}></div>
        <div className={styles.paragraphGroup}>
          <h1 className={styles.titleBar}>Welcome! My name is Raphael Chevallier.</h1>
          <h2 className={styles.secondTitle}> I'm a Software Engineer and Data Scientist based in the Bay Area.</h2>
          <p className={styles.aboutMe}> Innovation and progress is what I am after. I work to constantly learn more and apply what I learn.</p>
        </div>
      </div>
    </Layout>
  )
}
export default Home