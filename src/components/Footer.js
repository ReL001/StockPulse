import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer">
          <article>
            <div className="logo">
              <i className="fas fa-chart-line fa-2x"></i>
              <h2>Stock<span>Pulse</span></h2>
            </div>
            <p>
              Stay updated with the latest news and analysis on stocks and financial markets.
            </p>
          </article>

          <article>
            <h4>NEWSLETTER</h4>
            <p>Subscribe to our newsletter to receive updates on the latest trends and investment opportunities.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter Email..." required />
              <button type="submit">Subscribe</button>
            </form>
          </article>

          <article>
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a href="#">Help &amp; Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </article>
        </div>

        <div className="copyright">
          <p>Copyright &copy; 2024, Stock Pulse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;