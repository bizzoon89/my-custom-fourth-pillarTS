import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//import { useHttp } from '../../hooks/http.hook';

import styles from './ContactForm.module.scss';

import { IdType } from '../../types';

interface IUser {
  id: IdType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | number;
  message: string;
  checkbox: boolean;
}

const ContactForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (firstName === '' || lastName === '' || email === '' || message === '' || firstName.length < 3 || lastName.length < 3 || email.length < 3 || message.length < 3) {
      return;
    }

    const newUser: IUser = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
      checkbox: checkbox,
    };

    console.log(JSON.stringify(newUser));
    
    axios.post('http://localhost:3001/contact', { newUser })
      .then(response => console.log(response, 'Sending successful'))
      .catch(error => console.log(error));
    
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCheckbox(false);
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.containerLg}>
        <h5>Contact us</h5>
        <form action="#" className={styles.contactForm} onSubmit={onSubmit}>
          <div className={styles.rowInput}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First name*</label>
              <input
                type="text"
                id="firstName"
                placeholder="Your first name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.rowInput}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone number</label>
              <input type="tel"
                id="phone"
                placeholder="Your phone number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.rowInput}>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Tell us how we can help you*</label>
              <textarea
                name="message"
                id="message"
                placeholder="Start typing here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <strong className="ttl">Consent</strong>
          <div className={styles.customCheckbox}>
            <input
              type="checkbox"
              name="checkbox"
              id="lbl-checkbox-01"
              checked={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
            />
            <label className={styles.formCheckLabel} htmlFor="lbl-checkbox-01">
              By selecting this box you agree to our <Link to='/privacyPolicy'>Privacy Policy</Link>
            </label>
          </div>
          <button className={`${styles.btn} ${styles.btnArrow}`} type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;
