// ===== NOTIFICATION BAR =====
const NOTIF_MESSAGES = [
  '🎉 Special Offer: Open a Fixed Deposit today and earn up to 8.5% interest! <a class="notif-bar-link" href="pages/fixed-deposit.html">Learn More →</a>',
  '📱 TrustBank Mobile App is now available! Download and bank on the go. <a class="notif-bar-link" href="#">Download Now →</a>',
  '🔒 Your security matters. Enable 2-Factor Authentication today. <a class="notif-bar-link" href="#">Activate →</a>',
];
let notifIndex = 0;
function rotateNotif() {
  const el = document.getElementById('notif-msg');
  if (!el) return;
  el.style.animation = 'none';
  el.offsetHeight;
  el.innerHTML = NOTIF_MESSAGES[notifIndex % NOTIF_MESSAGES.length];
  el.style.animation = '';
  el.classList.remove('notif-slide');
  void el.offsetWidth;
  el.classList.add('notif-slide');
  notifIndex++;
}
document.addEventListener('DOMContentLoaded', () => {
  rotateNotif();
  setInterval(rotateNotif, 3500);
});

// ===== NAVBAR =====
const NAV_HTML = `
<div id="notif-bar">
  <span id="notif-msg" class="notif-slide"></span>
</div>
<nav id="navbar">
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">
      <img src="../img/logo.png" alt="TrustBank Logo" class="nav-logo-img">
    </a>
    <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li class="nav-item" id="accounts-nav">
        <button class="nav-link" id="accounts-btn">
          Accounts
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown">
          <a class="dropdown-item" href="../pages/savings.html">
            <div class="dropdown-item-icon">💰</div>
            <div class="dropdown-item-info"><strong>Savings Account</strong><span>Daily interest, flexible access</span></div>
          </a>
          <a class="dropdown-item" href="../pages/current.html">
            <div class="dropdown-item-icon">🏢</div>
            <div class="dropdown-item-info"><strong>Current Account</strong><span>Ideal for business transactions</span></div>
          </a>
          <a class="dropdown-item" href="../pages/fixed-deposit.html">
            <div class="dropdown-item-icon">📈</div>
            <div class="dropdown-item-info"><strong>Fixed Deposit</strong><span>High interest, guaranteed returns</span></div>
          </a>
          <a class="dropdown-item" href="../pages/student.html">
            <div class="dropdown-item-icon">🎓</div>
            <div class="dropdown-item-info"><strong>Student Account</strong><span>Zero fees for students</span></div>
          </a>
          <a class="dropdown-item" href="../pages/senior.html">
            <div class="dropdown-item-icon">👴</div>
            <div class="dropdown-item-info"><strong>Senior Citizen Account</strong><span>Extra benefits for seniors</span></div>
          </a>
          <a class="dropdown-item" href="../pages/nrb.html">
            <div class="dropdown-item-icon">✈️</div>
            <div class="dropdown-item-info"><strong>NRB / Foreign Account</strong><span>For non-resident Bangladeshis</span></div>
          </a>
        </div>
      </li>
      <li class="nav-item"><a class="nav-link" href="../pages/loans.html">Loans</a></li>
      <li class="nav-item"><a class="nav-link" href="../pages/cards.html">Cards</a></li>
      <li class="nav-item"><a class="nav-link" href="../pages/digital.html">Digital Banking</a></li>
      <li class="nav-item"><a class="nav-link" href="../pages/about.html">About Us</a></li>
      <li class="nav-item"><a class="nav-link" href="../pages/contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="#" class="btn-outline-green">Log In</a>
      <a href="../pages/savings.html" class="btn-green">Open Account</a>
    </div>
  </div>
</nav>`;

// For root index.html (different path)
const NAV_HTML_ROOT = NAV_HTML
  .replace(/href="\.\.\/pages\//g, 'href="pages/')
  .replace(/href="\.\.\/index\.html"/g, 'href="index.html"')
  .replace(/\.\.\/img\/logo\.png/g, 'img/logo.png');

function injectNav() {
  const isRoot = !window.location.pathname.includes('/pages/');
  const html = isRoot ? NAV_HTML_ROOT : NAV_HTML;
  const container = document.getElementById('nav-root');
  if (container) container.innerHTML = html;
  // Re-run notif after inject
  rotateNotif();
  initNavInteractions();
}

function initNavInteractions() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
  const accountsBtn = document.getElementById('accounts-btn');
  const accountsNav = document.getElementById('accounts-nav');
  if (accountsBtn && accountsNav) {
    accountsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      accountsNav.classList.toggle('open');
    });
    document.addEventListener('click', () => accountsNav.classList.remove('open'));
  }
  // Highlight active link
  const links = document.querySelectorAll('.nav-link, .dropdown-item');
  links.forEach(link => {
    if (link.href && link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}

// ===== FOOTER =====
const FOOTER_HTML = `
<footer id="footer">
  <div class="footer-top">
    <div class="footer-brand">
      <a href="../index.html" class="footer-logo">
        <div class="footer-logo-icon">T</div>
        <span class="footer-logo-text">TrustBank</span>
      </a>
      <p class="footer-desc">Bangladesh's most trusted digital bank, serving over 2 million customers with innovative, secure, and convenient banking solutions since 1998.</p>
      <div class="footer-socials">
        <a href="#" class="social-btn" title="Facebook">f</a>
        <a href="#" class="social-btn" title="Twitter">𝕏</a>
        <a href="#" class="social-btn" title="LinkedIn">in</a>
        <a href="#" class="social-btn" title="YouTube">▶</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Accounts</h5>
      <ul>
        <li><a href="../pages/savings.html">Savings Account</a></li>
        <li><a href="../pages/current.html">Current Account</a></li>
        <li><a href="../pages/fixed-deposit.html">Fixed Deposit</a></li>
        <li><a href="../pages/student.html">Student Account</a></li>
        <li><a href="../pages/senior.html">Senior Citizen</a></li>
        <li><a href="../pages/nrb.html">NRB Account</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <ul>
        <li><a href="../pages/loans.html">Personal Loans</a></li>
        <li><a href="../pages/cards.html">Credit Cards</a></li>
        <li><a href="../pages/digital.html">Online Banking</a></li>
        <li><a href="#">Mobile Banking</a></li>
        <li><a href="#">Remittance</a></li>
        <li><a href="#">Insurance</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul>
        <li><a href="../pages/about.html">About TrustBank</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Press Room</a></li>
        <li><a href="../pages/contact.html">Contact Us</a></li>
        <li><a href="#">Branch Locator</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Support</h5>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Security Center</a></li>
        <li><a href="#">Forms & Downloads</a></li>
        <li><a href="#">Rates & Fees</a></li>
        <li><a href="#">Grievance</a></li>
        <li><a href="#">Sitemap</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-inner">
      <span>© 2025 TrustBank Ltd. All rights reserved. Licensed by Bangladesh Bank.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Accessibility</a>
      </div>
    </div>
  </div>
</footer>`;

const FOOTER_HTML_ROOT = FOOTER_HTML.replace(/href="\.\.\/pages\//g, 'href="pages/').replace(/href="\.\.\/index\.html"/g, 'href="index.html"');

function injectFooter() {
  const isRoot = !window.location.pathname.includes('/pages/');
  const container = document.getElementById('footer-root');
  if (container) container.innerHTML = isRoot ? FOOTER_HTML_ROOT : FOOTER_HTML;
}

// ===== FAQ =====
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.feature-card, .account-card, .why-card, .stat-item, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const isFloat = String(target).includes('.');
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = progress * target;
      el.textContent = (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(step);
        observer.disconnect();
      }
    });
    observer.observe(el);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  initFAQ();
  initScrollAnimations();
  animateCounters();
});
