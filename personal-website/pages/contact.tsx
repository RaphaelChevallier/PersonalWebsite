import React from "react"
import { useState } from 'react';
import Layout from "../layouts/main_layout"
import styles from "../styles/contact.module.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailContact = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
  };

  return (
    <Layout>
      <form onSubmit={handleEmailContact} className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
    </Layout>
  )
}

export default Contact