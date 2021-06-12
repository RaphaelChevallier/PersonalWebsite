import React from "react"
import { useState } from 'react';
import Layout from "../layouts/main_layout"
import styles from "../styles/contact.module.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailContact = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
    };
    console.log(data);
  };

  return (
    <Layout>
      <div className={styles.contacts}>
        <form onSubmit={handleEmailContact} className={styles.columns}>
            <label className={styles.label} htmlFor="name">Name:</label>
            <input className={styles.contactInfo}
              id="name"
              type="text"
              onChange={e => setName(e.target.value)}
            />
            <label className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.contactInfo}
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            <label className={styles.label} htmlFor="phone">Phone Number:</label>
            <input className={styles.contactInfo}
              id="phone"
              type="phone"
              onChange={e => setPhone(e.target.value)}
            />
            <label className={styles.label} htmlFor="message">Message:</label>
            <textarea className={styles.message}
              id="message"
              onChange={e => setMessage(e.target.value)}
            />
            <button className={styles.submit} type="submit">Send</button>
          </form>
        <div className={styles.columns}>
          <h1 className={styles.titleBar}>Welcome! My name is Raphael Chevallier.</h1>
          <h2 className={styles.secondTitle}> Software Engineer based in the Bay Area.</h2>
          <p className={styles.aboutMe}> Innovation and progress is what I am after. Transforming ideas to reality is my goal. I strive to better the world in every way I can. I am constantly learning more and apply what I learn.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact