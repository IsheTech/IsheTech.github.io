const page = window.location.pathname.split('/').pop() || 'index.html';
const isActive = (file) => page === file ? ' active' : '';

/* BRAND LOGO WITH EXACT ISHETECH CASING */
const brand = '<a class="brand" href="index.html" aria-label="IsheTech Systems home"><span class="brand-mark" aria-hidden="true"><i></i></span><span class="brand-text">ishe<span>Tech</span></span></a>';

const navigation = `<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><b class="sr-only">Open menu</b></button><nav id="site-nav" class="site-nav" aria-label="Main navigation"><a class="${isActive('index.html').trim()}" href="index.html">Home</a><div class="nav-dropdown"><a class="${isActive('about.html').trim()} ${isActive('team.html').trim()}" href="about.html">About Us <span>⌄</span></a><div class="submenu"><a href="about.html">Our story</a><a href="team.html">Our team</a></div></div><div class="nav-dropdown"><a class="${isActive('services.html').trim()}" href="services.html">Services <span>⌄</span></a><div class="submenu"><a href="services.html#support">IT support</a><a href="services.html#cloud">Cloud &amp; systems</a><a href="services.html#security">IT security</a><a href="services.html#infrastructure">Infrastructure</a><a href="services.html#strategy">IT strategy</a></div></div><a class="${isActive('why-ishetech.html').trim()}" href="why-ishetech.html">Why IsheTech</a><a class="${isActive('contact.html').trim()}" href="contact.html">Contact us</a></nav>`;

document.querySelectorAll('.site-header .nav-wrap').forEach((header) => {
  header.innerHTML = brand + navigation;
});

document.querySelectorAll('.site-footer').forEach((footer) => {
  footer.innerHTML = `<div class="container footer-main"><div>${brand}<p>Your Smart IT Partner.</p></div><div><b>Explore</b><a href="about.html">About us</a><a href="services.html">Services</a><a href="contact.html">Contact us</a></div><div><b>Connect</b><div class="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="WhatsApp">◔</a></div><small>Social links are ready for your real profiles.</small></div></div><div class="container footer-bottom">© <span id="year"></span> IsheTech Systems. All rights reserved.<a href="#main">Back to top ↑</a></div>`;
});

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const chatButton = document.querySelector('.chat-button');
if (chatButton) {
  const panel = document.createElement('aside');
  panel.className = 'chat-panel';
  panel.innerHTML = '<button class="chat-close" aria-label="Close quick chat">×</button><p class="eyebrow">IsheTech quick chat</p><h3>Hi, how can we help?</h3><p>Choose a topic and we’ll point you in the right direction. Live chat can be added when you are ready.</p><a href="services.html">Explore services →</a><a href="contact.html">Send an enquiry →</a>';
  document.body.append(panel);
  chatButton.addEventListener('click', () => panel.classList.toggle('open'));
  panel.querySelector('.chat-close').addEventListener('click', () => panel.classList.remove('open'));
}