'use client';
import { useEffect, useState } from 'react';
import Animation from '../Animations/Animations';
import styles from './Faq.module.scss';

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (i: any) => {
    if (i === openIndex) {
      setIsOpen(false);
      setOpenIndex(null);
    } else {
      setIsOpen(true);
      setOpenIndex(i);
    }
  };

  useEffect(() => {
    console.log(openIndex);
    console.log(isOpen);
  }, [isOpen, openIndex]);

  return (
    <div className={styles.main} id="">
      <div className={styles.main_top}>
        <div className={styles.main_top_left}>
          <Animation
            delay={200}
            variant="slide-left"
            // className={styles.main_top_left}
          >
            <h3>Looking for a reliable software development company?</h3>
          </Animation>
          <Animation
            delay={300}
            variant="slide-left"
            // className={styles.main_top_left}
          >
            <p>
              Build a high-quality FinTech product designed for seamless
              scaling, active user acquisition, and stable performance under
              high loads with Yalantis
            </p>
          </Animation>
        </div>
        <div className={styles.main_top_right}>
          <Animation
            delay={250}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <button>Book a call</button>
          </Animation>
        </div>
      </div>
      <div className={styles.main_center}>
        <div className={styles.main_center_left}>
          <Animation
            delay={200}
            variant="slide-left"
            // className={styles.main_top_left}
          >
            <h1>FAQ</h1>
          </Animation>
        </div>
        <div className={styles.main_center_right}>
          <Animation
            delay={200}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <div
              className={`${styles.main_center_right_dropdown} ${
                isOpen && openIndex === 1
                  ? styles.main_center_right_dropdown_open
                  : ''
              }`}
            >
              <div
                className={styles.main_center_right_dropdown_question}
                onClick={() => toggleDropdown(1)}
              >
                <h2>
                  How does your software developer company ensure product
                  security?
                </h2>
                <span className={styles.main_center_right_dropdown_icon}>
                  <p>{isOpen && openIndex === 1 ? '-' : '+'}</p>
                </span>
              </div>
              <div
                className={styles.main_center_right_dropdown_answer}
                onClick={() => toggleDropdown(1)}
              >
                <p>
                  Our software development agency has obtained ISO 27001 and ISO
                  9001 certifications for software development groups. These
                  certifications demonstrate that Yalantis management and
                  development processes comply with international quality and
                  security standards introduced by the International
                  Organization for Standardization (ISO).
                </p>
                <p>
                  Being ISO 9001-certified, our software development firm
                  delivers quality software engineering services in full
                  accordance with the needs of our clients, employees, and
                  regulatory bodies. Our processes are well-established and
                  polished to continually improve performance and operational
                  efficiency.
                </p>
                <p>
                  As an ISO 27001-certified software developer company, we build
                  highly secure software solutions that comply with business,
                  legal, contractual, and regulatory requirements, and we are
                  constantly streamlining our information security management
                  system.
                </p>
              </div>
            </div>
          </Animation>
          <Animation
            delay={200}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <div
              className={`${styles.main_center_right_dropdown} ${
                isOpen && openIndex === 2
                  ? styles.main_center_right_dropdown_open
                  : ''
              }`}
            >
              <div
                className={styles.main_center_right_dropdown_question}
                onClick={() => toggleDropdown(2)}
              >
                <h2>
                  How does your software developer company ensure product
                  security?
                </h2>
                <span className={styles.main_center_right_dropdown_icon}>
                  <p>{isOpen && openIndex === 2 ? '-' : '+'}</p>
                </span>
              </div>
              <div
                className={styles.main_center_right_dropdown_answer}
                onClick={() => toggleDropdown(2)}
              >
                <p>
                  Our software development agency has obtained ISO 27001 and ISO
                  9001 certifications for software development groups. These
                  certifications demonstrate that Yalantis management and
                  development processes comply with international quality and
                  security standards introduced by the International
                  Organization for Standardization (ISO).
                </p>
                <p>
                  Being ISO 9001-certified, our software development firm
                  delivers quality software engineering services in full
                  accordance with the needs of our clients, employees, and
                  regulatory bodies. Our processes are well-established and
                  polished to continually improve performance and operational
                  efficiency.
                </p>
                <p>
                  As an ISO 27001-certified software developer company, we build
                  highly secure software solutions that comply with business,
                  legal, contractual, and regulatory requirements, and we are
                  constantly streamlining our information security management
                  system.
                </p>
              </div>
            </div>
          </Animation>
          <Animation
            delay={200}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <div
              className={`${styles.main_center_right_dropdown} ${
                isOpen && openIndex === 3
                  ? styles.main_center_right_dropdown_open
                  : ''
              }`}
            >
              <div
                className={styles.main_center_right_dropdown_question}
                onClick={() => toggleDropdown(3)}
              >
                <h2>
                  How does your software developer company ensure product
                  security?
                </h2>
                <span className={styles.main_center_right_dropdown_icon}>
                  <p>{isOpen && openIndex === 3 ? '-' : '+'}</p>
                </span>
              </div>
              <div
                className={styles.main_center_right_dropdown_answer}
                onClick={() => toggleDropdown(3)}
              >
                <p>
                  Our software development agency has obtained ISO 27001 and ISO
                  9001 certifications for software development groups. These
                  certifications demonstrate that Yalantis management and
                  development processes comply with international quality and
                  security standards introduced by the International
                  Organization for Standardization (ISO).
                </p>
                <p>
                  Being ISO 9001-certified, our software development firm
                  delivers quality software engineering services in full
                  accordance with the needs of our clients, employees, and
                  regulatory bodies. Our processes are well-established and
                  polished to continually improve performance and operational
                  efficiency.
                </p>
                <p>
                  As an ISO 27001-certified software developer company, we build
                  highly secure software solutions that comply with business,
                  legal, contractual, and regulatory requirements, and we are
                  constantly streamlining our information security management
                  system.
                </p>
              </div>
            </div>
          </Animation>
          <Animation
            delay={200}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <div
              className={`${styles.main_center_right_dropdown} ${
                isOpen && openIndex === 4
                  ? styles.main_center_right_dropdown_open
                  : ''
              }`}
            >
              <div
                className={styles.main_center_right_dropdown_question}
                onClick={() => toggleDropdown(4)}
              >
                <h2>
                  How does your software developer company ensure product
                  security?
                </h2>
                <span className={styles.main_center_right_dropdown_icon}>
                  <p>{isOpen && openIndex === 4 ? '-' : '+'}</p>
                </span>
              </div>
              <div
                className={styles.main_center_right_dropdown_answer}
                onClick={() => toggleDropdown(4)}
              >
                <p>
                  Our software development agency has obtained ISO 27001 and ISO
                  9001 certifications for software development groups. These
                  certifications demonstrate that Yalantis management and
                  development processes comply with international quality and
                  security standards introduced by the International
                  Organization for Standardization (ISO).
                </p>
                <p>
                  Being ISO 9001-certified, our software development firm
                  delivers quality software engineering services in full
                  accordance with the needs of our clients, employees, and
                  regulatory bodies. Our processes are well-established and
                  polished to continually improve performance and operational
                  efficiency.
                </p>
                <p>
                  As an ISO 27001-certified software developer company, we build
                  highly secure software solutions that comply with business,
                  legal, contractual, and regulatory requirements, and we are
                  constantly streamlining our information security management
                  system.
                </p>
              </div>
            </div>
          </Animation>
          <Animation
            delay={200}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <div
              className={`${styles.main_center_right_dropdown} ${
                isOpen && openIndex === 5
                  ? styles.main_center_right_dropdown_open
                  : ''
              }`}
            >
              <div
                className={styles.main_center_right_dropdown_question}
                onClick={() => toggleDropdown(5)}
              >
                <h2>
                  How does your software developer company ensure product
                  security?
                </h2>
                <span className={styles.main_center_right_dropdown_icon}>
                  <p>{isOpen && openIndex === 5 ? '-' : '+'}</p>
                </span>
              </div>
              <div
                className={styles.main_center_right_dropdown_answer}
                onClick={() => toggleDropdown(5)}
              >
                <p>
                  Our software development agency has obtained ISO 27001 and ISO
                  9001 certifications for software development groups. These
                  certifications demonstrate that Yalantis management and
                  development processes comply with international quality and
                  security standards introduced by the International
                  Organization for Standardization (ISO).
                </p>
                <p>
                  Being ISO 9001-certified, our software development firm
                  delivers quality software engineering services in full
                  accordance with the needs of our clients, employees, and
                  regulatory bodies. Our processes are well-established and
                  polished to continually improve performance and operational
                  efficiency.
                </p>
                <p>
                  As an ISO 27001-certified software developer company, we build
                  highly secure software solutions that comply with business,
                  legal, contractual, and regulatory requirements, and we are
                  constantly streamlining our information security management
                  system.
                </p>
              </div>
            </div>
          </Animation>
          <Animation
            delay={200}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <div
              className={`${styles.main_center_right_dropdown} ${
                isOpen && openIndex === 6
                  ? styles.main_center_right_dropdown_open
                  : ''
              }`}
            >
              <div
                className={styles.main_center_right_dropdown_question}
                onClick={() => toggleDropdown(6)}
              >
                <h2>
                  How does your software developer company ensure product
                  security?
                </h2>
                <span className={styles.main_center_right_dropdown_icon}>
                  <p>{isOpen && openIndex === 6 ? '-' : '+'}</p>
                </span>
              </div>
              <div
                className={styles.main_center_right_dropdown_answer}
                onClick={() => toggleDropdown(6)}
              >
                <p>
                  Our software development agency has obtained ISO 27001 and ISO
                  9001 certifications for software development groups. These
                  certifications demonstrate that Yalantis management and
                  development processes comply with international quality and
                  security standards introduced by the International
                  Organization for Standardization (ISO).
                </p>
                <p>
                  Being ISO 9001-certified, our software development firm
                  delivers quality software engineering services in full
                  accordance with the needs of our clients, employees, and
                  regulatory bodies. Our processes are well-established and
                  polished to continually improve performance and operational
                  efficiency.
                </p>
                <p>
                  As an ISO 27001-certified software developer company, we build
                  highly secure software solutions that comply with business,
                  legal, contractual, and regulatory requirements, and we are
                  constantly streamlining our information security management
                  system.
                </p>
              </div>
            </div>
          </Animation>
          <Animation
            delay={200}
            variant="slide-right"
            // className={styles.main_top_left}
          >
            <div
              className={`${styles.main_center_right_dropdown} ${
                isOpen && openIndex === 7
                  ? styles.main_center_right_dropdown_open
                  : ''
              }`}
            >
              <div
                className={styles.main_center_right_dropdown_question}
                onClick={() => toggleDropdown(7)}
              >
                <h2>
                  How does your software developer company ensure product
                  security?
                </h2>
                <span className={styles.main_center_right_dropdown_icon}>
                  <p>{isOpen && openIndex === 7 ? '-' : '+'}</p>
                </span>
              </div>
              <div
                className={styles.main_center_right_dropdown_answer}
                onClick={() => toggleDropdown(7)}
              >
                <p>
                  Our software development agency has obtained ISO 27001 and ISO
                  9001 certifications for software development groups. These
                  certifications demonstrate that Yalantis management and
                  development processes comply with international quality and
                  security standards introduced by the International
                  Organization for Standardization (ISO).
                </p>
                <p>
                  Being ISO 9001-certified, our software development firm
                  delivers quality software engineering services in full
                  accordance with the needs of our clients, employees, and
                  regulatory bodies. Our processes are well-established and
                  polished to continually improve performance and operational
                  efficiency.
                </p>
                <p>
                  As an ISO 27001-certified software developer company, we build
                  highly secure software solutions that comply with business,
                  legal, contractual, and regulatory requirements, and we are
                  constantly streamlining our information security management
                  system.
                </p>
              </div>
            </div>
          </Animation>
        </div>
      </div>
      
    </div>
  );
}
