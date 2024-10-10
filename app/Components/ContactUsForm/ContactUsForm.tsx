import Animation from '../Animations/Animations';
import styles from './ContactUsForm.module.scss';

export function ContactUsForm() {
  return (
    <section className={styles.main_bottom} id="contacts">
      <article className={styles.main_bottom_left}>
        <Animation
          delay={200}
          variant="slide-left"
          // className={styles.main_top_left}
        >
          <h3>Collaborate with Soft Does</h3>
          <form action="" className={styles.main_bottom_left_form}>
            <div className={styles.main_bottom_left_form_block}>
              <div className={styles.main_bottom_left_form_block_left}>
                <input
                  type="text"
                  placeholder="Full name *"
                  className={styles.main_bottom_left_form_block_left_input}
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className={styles.main_bottom_left_form_block_left_input}
                />
              </div>
              <div className={styles.main_bottom_left_form_block_right}>
                <input
                  type="text"
                  placeholder="Email address *"
                  className={styles.main_bottom_left_form_block_left_input}
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className={styles.main_bottom_left_form_block_left_input}
                />
              </div>
            </div>
            <input type="text" placeholder="About your project *" />
            <input type="file" />
            <p></p>
            <div className={styles.main_bottom_left_form_block_checkbox}>
              <input type="checkbox" />
              <p>
                I have read <a href="">Privacy Notice *</a>
              </p>
            </div>
            <div className={styles.main_bottom_left_form_block_checkbox}>
              <input type="checkbox" />
              <p>
                I agree to receive marketing materials about news, events, and
                proposals from Soft Does
              </p>
            </div>
            <button>Send Message</button>
          </form>
        </Animation>
      </article>
      <article className={styles.main_bottom_right}>
        <Animation
          delay={200}
          variant="slide-right"
          className={styles.main_bottom_right_info}
        >
          <p>Project inquiries</p>
          <a href="">hello@softdoes.com</a>
        </Animation>
        <Animation
          delay={300}
          variant="slide-right"
          className={styles.main_bottom_right_info}
        >
          <p>Careers</p>
          <a href="">careers@softdoes.com</a>
        </Animation>
        <Animation
          delay={400}
          variant="slide-right"
          className={styles.main_bottom_right_info}
        >
          <p>Phone number</p>
          <a href="">+ 1 213 4019311</a>
        </Animation>
      </article>
    </section>
  );
}
