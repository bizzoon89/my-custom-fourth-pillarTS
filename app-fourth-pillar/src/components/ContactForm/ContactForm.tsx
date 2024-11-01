import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';

import styles from './ContactForm.module.scss';

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  checkbox: boolean;
}

export const ContactForm = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (values: IFormValues, { setSubmitting, resetForm }: FormikHelpers<IFormValues>) => {
    try {
      const response = await axios.post('http://localhost:3001/contacts', values);
      console.log('Message sent successfully:', response);
      setMessage('Message sent successfully');
      resetForm();
    } catch (error) {
      console.error('Error sending message:', error);
      setMessage('Failed to send the message. Please try again.');
    } finally {
      setSubmitting(false);
      setTimeout(() => setMessage(null), 2000);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.containerLg}>
        <h5>Contact us</h5>
        {message && <div className={styles.message}>{message}</div>}
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            checkbox: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().min(3, 'First name must be at least 3 characters').required('First name is required'),
            lastName: Yup.string().min(3, 'Last name must be at least 3 characters').required('Last name is required'),
            email: Yup.string().email('Invalid email address').required('Email address is required'),
            phone: Yup.number().required('Phone number is required'),
            message: Yup.string().min(3, 'Message must be at least 3 characters').required('Message is required'),
            checkbox: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Please agree to the terms and conditions'),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.contactForm}>
              <div className={styles.rowInput}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First name*</label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last name*</label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
              <div className={styles.rowInput}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email address*</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone number*</label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
              <div className={styles.rowInput}>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message*</label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Your message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
              <strong className={styles.ttl}>Consent</strong>
              <div className={styles.customCheckbox}>
                <Field
                  type="checkbox"
                  name="checkbox"
                  id="lbl-checkbox"
                />
                <label
                  className={styles.formCheckLabel}
                  htmlFor="lbl-checkbox"
                >
                  By selecting this box you agree to our <Link to="/privacyPolicy">Privacy Policy</Link>
                </label>
              </div>
              <ErrorMessage
                name="checkbox"
                component="div"
                className={styles.error}
              />
              <button
                className={`${styles.btn} ${styles.btnArrow}`}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};