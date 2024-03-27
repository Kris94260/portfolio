import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>:)</h1>
        <p>
          Envoyez moi un email :{" "}
          <a href="mailto:contact.krismoreau@gmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Trouver moi sur :</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            contact.krismoreau@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +262 692 00 00 00
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Reunion 974
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" netlify>
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="text" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
