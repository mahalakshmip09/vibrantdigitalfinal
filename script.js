  // ─── Navbar scroll effect ───
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ─── Mobile menu toggle ───
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  function closeMenu() { mobileMenu.classList.remove('open'); }

  // ─── Tab filtering helper ───
  function setActiveTabs(container, buttons) {
    buttons.forEach(b => b.classList.remove('active'));
  }

  // ─── Photo Frames filter ───
  function filterFrames(cat) {
    const cards = document.querySelectorAll('#frames-grid .product-card');
    const tabs = document.querySelectorAll('#frames-tabs .sub-tab');
    tabs.forEach((t, i) => {
      const cats = ['all','wooden','led','collage','custom'];
      t.classList.toggle('active', cats[i] === cat);
    });
    cards.forEach(c => {
      const show = cat === 'all' || c.dataset.cat === cat;
      c.style.display = show ? '' : 'none';
    });
  }

  // ─── Digital Prints filter ───
  function filterPrints(cat) {
    const cards = document.querySelectorAll('#prints-grid .product-card');
    document.querySelectorAll('#digital-prints .sub-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    cards.forEach(c => {
      const show = cat === 'all' || c.dataset.pcat === cat;
      c.style.display = show ? '' : 'none';
    });
  }

  // ─── Invitation Cards filter ───
  function filterCards(cat) {
    const cards = document.querySelectorAll('#cards-grid .product-card');
    document.querySelectorAll('#invitation-cards .sub-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    cards.forEach(c => {
      const show = cat === 'all' || c.dataset.icat === cat;
      c.style.display = show ? '' : 'none';
    });
  }

  // ─── Enquiry form → WhatsApp ───
  function sendEnquiryToWhatsApp() {
    const name = document.querySelector('.contact-form .form-input').value.trim();
    const phone = document.querySelectorAll('.contact-form .form-input')[1].value.trim();
    const service = document.querySelector('.contact-form .form-select').value;
    const message = document.querySelector('.contact-form .form-textarea').value.trim();
    if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
    const text = encodeURIComponent(
      `Hello Vibrant Digital Printers,\n\nName: ${name}\nPhone: ${phone}\nService: ${service || 'Not specified'}\n\nMessage: ${message || 'Please share your catalogue.'}`
    );
    window.open(`https://wa.me/917871920405?text=${text}`, '_blank');
  }

  // ─── Scroll reveal ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

