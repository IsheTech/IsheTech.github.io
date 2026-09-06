document.addEventListener('DOMContentLoaded', function () {
  
  // 1. DYNAMIC HEADER NAVIGATION GENERATION
  const navWrap = document.querySelector('.nav-wrap');
  if (navWrap) {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    navWrap.innerHTML = `
      <a class="brand" href="index.html" aria-label="IsheTech Systems Home">
        <span class="brand-mark"><i></i></span>
        <span class="brand-text">Ishe<span>Tech</span></span>
      </a>
      <nav class="site-nav" id="site-nav">
        <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a>
        <a href="index.html#why-ishetech">Why IsheTech</a>
        <a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">About Us</a>
        <a href="services.html" class="${currentPath === 'services.html' ? 'active' : ''}">Services</a>
        <a href="team.html" class="${currentPath === 'team.html' ? 'active' : ''}">Our Team</a>
        <a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact Us</a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle Navigation">
        <span></span><span></span><span></span>
        <span class="sr-only">Menu</span>
      </button>
    `;
  }

  // 2. MOBILE MENU TOGGLE
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 3. DYNAMIC FOOTER GENERATION (CENTERED STATUS BADGE)
  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-main-redesign">
          <div class="footer-col">
            <a class="brand" href="index.html">
              <span class="brand-mark"><i></i></span>
              <span class="brand-text">Ishe<span>Tech</span></span>
            </a>
            <p class="footer-brand-desc">Your Smart IT Partner. Practical technology support, cloud infrastructure, and enterprise hardware setup for growing modern businesses.</p>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-links">
              <li><a href="services.html#support">IT Support &amp; Helpdesk</a></li>
              <li><a href="services.html#cloud">Cloud &amp; Systems</a></li>
              <li><a href="services.html#infrastructure">IT Setup &amp; Hardware</a></li>
              <li><a href="services.html#security">Cybersecurity &amp; WiFi</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links">
              <li><a href="about.html">About IsheTech</a></li>
              <li><a href="index.html#why-ishetech">Why Work With Us</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-col-title">Get in Touch</h4>
            <p class="footer-contact-line">General: <a href="mailto:info@ishetech.com" class="mint-link">info@ishetech.com</a></p>
            <p class="footer-contact-line">Support: <a href="mailto:support@ishetech.nl" class="mint-link">support@ishetech.nl</a></p>
            <p class="footer-contact-line">Phone: <a href="tel:+31619193177" class="mint-link">+31 6 1919 3177</a></p>
          </div>
        </div>
        <div class="footer-status-center">
          <div class="footer-status-pill">
            <span class="status-pulse"></span> All Systems Operational
          </div>
        </div>
        <div class="footer-bottom-redesign">
          <p>&copy; ${new Date().getFullYear()} IsheTech Systems. All rights reserved.</p>
          <a href="#main" class="back-to-top">Back to Top ↑</a>
        </div>
      </div>
    `;
  }

  // 4. FLOATING QUICK CHAT WIDGET
  const chatButton = document.querySelector('.chat-button');
  if (chatButton) {
    const chatPanel = document.createElement('div');
    chatPanel.className = 'chat-panel';
    chatPanel.innerHTML = `
      <button class="chat-close" aria-label="Close chat">&times;</button>
      <p class="eyebrow">Quick Help</p>
      <h3>Need immediate assistance?</h3>
      <p>Send a direct inquiry or email our support desk for emergency outages.</p>
      <a href="contact.html">Go to Contact Form →</a>
      <a href="mailto:support@ishetech.nl">Email Support Desk →</a>
    `;
    document.body.appendChild(chatPanel);

    chatButton.addEventListener('click', function () {
      chatPanel.classList.toggle('open');
    });

    chatPanel.querySelector('.chat-close').addEventListener('click', function () {
      chatPanel.classList.remove('open');
    });
  }
});