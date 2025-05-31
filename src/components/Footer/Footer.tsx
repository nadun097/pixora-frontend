import React from 'react';
import styles from './Footer.module.css';
import Facebook from '../../assets/images/facebook.png'; 
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
import Linkedin from '../../assets/images/linkedin.png';
import Pixora from '../../assets/images/pixoraLogoFooter.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.brand_info}>
        <img src={Pixora} alt="Pixora Logok" />
          <p>A pixel-art NFT brand for digital collectibles and Web3 innovation.</p>
        </div>

        <div className={styles.footer_links}>
          <div className={styles.links_column}>
            <h4>Information</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press / Media</a></li>
            </ul>
          </div>

          <div className={styles.links_column}>
            <h4>Legal & Compliance</h4>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
            </ul>
          </div>
          <div className={styles.links_column}>
            <h4>Community Guidelines</h4>
            <ul>
                <li><a href="/user-agreement">User Agreement</a></li>
                <li><a href="/privacy-policy">Privacy Notice</a></li>
                <li><a href="/cookie-settings">Cookie Preferences</a></li>
                <li><a href="/disclosure">Transparency Disclosure</a></li>
                <li><a href="/compliance">Regulatory Compliance</a></li>
            </ul>
          </div>

          <div className={styles.links_column}>
            <h4>Support</h4>
            <ul>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/help">Help Center</a></li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer_media_icon}>
          <a href="#"><img src={Facebook} alt="Facebook" /></a>
          <a href="#"><img src={Instagram} alt="Instagram" /></a>
          <a href="#"><img src={Twitter} alt="Twitter" /></a>
          <a href="#"><img src={Linkedin} alt="Linkedin" /></a>
      </div>

      <div className={styles.footer_bottom}>
          <div className={styles.footer_bottom_text}>
            <p>piXora LLC (Pvt) Ltd. – All Rights Reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;