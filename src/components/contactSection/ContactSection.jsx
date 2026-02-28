import React from "react";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <span className="note">Contact Us</span>
          <h2>Contact Our Team</h2>
          <p>
            Are you a cerftified veterian? Or do you have some personal
            experience with your pets? Let's spread knowledge!
          </p>
          <p>Or is there something wrong? Tell us now.</p>
        </div>

        <form
          className="contact-form"
          //   action="https://formspree.io/f/maqdobev"
          method="POST"
        >
          <select name="contactType" required>
            <option value="" disabled selected>
              I am contacting you as...
            </option>
            <option value="Veterinarian">Veterinarian</option>
            <option value="Personal Experience">Personal Experience</option>
            <option value="Other">Other</option>
          </select>

          
          <input name="Name" type="text" placeholder="Your Name" required />
          <input name="Email" type="email" placeholder="Your Email" required />
          <input name="Phone" type="number" placeholder="Your Phone number" />

          <textarea name="msg" placeholder="Your Message" rows="4" required />

          <button type="submit" className="cta2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
