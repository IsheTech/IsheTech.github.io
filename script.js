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

  // 3. DYNAMIC FOOTER GENERATION
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

  // 4. CUSTOM QUICK CHAT WITH BRANDED INLINE NAME STEP & CRISP INTEGRATION
  const chatButton = document.querySelector('.chat-button');
  const CRISP_WEBSITE_ID = "23325b2d-b159-4389-8745-1723bfa59002";

  if (CRISP_WEBSITE_ID) {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

    // Hide default Crisp floating button on page load
    $crisp.push(["do", "chat:hide"]);
    $crisp.push(["on", "chat:closed", function () {
      $crisp.push(["do", "chat:hide"]);
    }]);
  }

  // Create custom Quick Chat modal menu
  if (chatButton) {
    const chatPanel = document.createElement('div');
    chatPanel.className = 'chat-panel';
    
    const defaultMenuHTML = `
      <button class="chat-close" aria-label="Close chat">&times;</button>
      <p class="eyebrow">IsheTech Assistant</p>
      <h3>How can we help?</h3>
      <p>Select an option below to reach an engineer or jump directly to key site areas.</p>
      <div class="chat-links">
        <a href="#" id="open-crisp-agent" class="chat-agent-btn">
          <span class="status-pulse"></span> Connect to a Live Agent →
        </a>
        <a href="services.html">Explore IT Services →</a>
        <a href="contact.html">Contact Us →</a>
      </div>
    `;

    chatPanel.innerHTML = defaultMenuHTML;
    document.body.appendChild(chatPanel);

    const resetChatPanel = () => {
      chatPanel.innerHTML = defaultMenuHTML;
      bindPanelEvents();
    };

    const bindPanelEvents = () => {
      const closeBtn = chatPanel.querySelector('.chat-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          chatPanel.classList.remove('open');
          setTimeout(resetChatPanel, 200);
        });
      }

      const crispAgentBtn = chatPanel.querySelector('#open-crisp-agent');
      if (crispAgentBtn) {
        crispAgentBtn.addEventListener('click', function (e) {
          e.preventDefault();
          
          // Switch to branded inline name prompt
          chatPanel.innerHTML = `
            <button class="chat-close" aria-label="Close chat">&times;</button>
            <button type="button" class="chat-back" id="chat-back">← Back to Menu</button>
            <p class="eyebrow" style="margin-top: 10px;">Live Support Desk</p>
            <h4>What's your name?</h4>
            <p>Please enter your name so our technical engineer knows who they're speaking with.</p>
            <form id="crisp-name-form" class="chat-name-form">
              <input type="text" id="crisp-visitor-name" placeholder="Enter your name..." required autofocus class="chat-name-input" />
              <button type="submit" class="chat-agent-btn chat-submit-action">
                <span class="status-pulse"></span> Start Live Chat →
              </button>
            </form>
          `;

          // Back button logic
          chatPanel.querySelector('#chat-back').addEventListener('click', function() {
            resetChatPanel();
          });

          // Close button logic inside step 2
          chatPanel.querySelector('.chat-close').addEventListener('click', function () {
            chatPanel.classList.remove('open');
            setTimeout(resetChatPanel, 200);
          });

          // Submit handler
          const nameForm = chatPanel.querySelector('#crisp-name-form');
          nameForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            const nameInput = chatPanel.querySelector('#crisp-visitor-name');
            const visitorName = nameInput ? nameInput.value.trim() : '';

            if (visitorName && window.$crisp) {
              $crisp.push(["set", "user:nickname", [visitorName]]);
            }

            chatPanel.classList.remove('open');
            setTimeout(resetChatPanel, 200);

            if (window.$crisp) {
              $crisp.push(['do', 'chat:show']);
              $crisp.push(['do', 'chat:open']);
            }
          });
        });
      }
    };

    bindPanelEvents();

    // Toggle custom menu on mint button click
    chatButton.addEventListener('click', function () {
      if (!chatPanel.classList.contains('open')) {
        resetChatPanel();
      }
      chatPanel.classList.toggle('open');
    });
  }
});















































































































































































