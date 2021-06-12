
import React from "react"
import Layout from "../layouts/main_layout"
import styles from "../styles/index.module.css"


const Home = () => {
  return (
    <Layout>
      <h1 className={styles.titleBar}>Welcome! My name is Raphael Chevallier.</h1>
      <h2 className={styles.secondTitle}> Software Engineer based in the Bay Area.</h2>
      <p className={styles.aboutMe}> Innovation and progress is what I am after. Transforming ideas to reality is my goal. I strive to better the world in every way I can. I am constantly learning more and apply what I learn.</p>
    </Layout>
  )
}
export default Home