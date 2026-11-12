* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  background: #f4f7f4;
  color: #18352f;
}

a {
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 86px;
  border-bottom: 1px solid #dfe9e2;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: #167653;
  color: white;
  font-weight: 800;
  font-size: 24px;
}

.brand-name {
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
}

.brand-sub {
  font-size: 0.64rem;
  text-transform: uppercase;
  color: #5e726a;
  letter-spacing: 0.14em;
}

.nav {
  display: flex;
  gap: 10px;
  align-items: center;
}

.nav a {
  color: #4c635d;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 12px;
}

.nav a:hover {
  background: #eaf4ee;
  color: #0c5f45;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pill-btn,
.bag-btn,
.primary-btn,
.secondary-btn,
.service-card,
.chip,
.text-button,
.product-card button,
.test-card button {
  border: none;
}

.pill-btn {
  background: #fff;
  border: 1px solid #dde8e1;
  color: #4c635d;
  border-radius: 12px;
  padding: 10px 12px;
}

.bag-btn {
  background: #167653;
  color: white;
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 700;
}

.bag-btn span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #d8f179;
  color: #153d31;
  margin-left: 8px;
  font-size: 0.78rem;
}

.hero {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-radius: 28px;
  background: #deefe2;
  min-height: 310px;
  padding: 42px 48px;
  overflow: hidden;
  margin: 28px 0 32px;
}

.hero-copy {
  max-width: 620px;
  z-index: 1;
}

.eyebrow {
  display: inline-block;
  color: #0d6a4f;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.hero-copy h1 {
  font-family: 'Manrope', 'Segoe UI', sans-serif;
  letter-spacing: -0.06em;
  font-size: clamp(2.4rem, 5vw, 4.1rem);
  line-height: 1.04;
  margin: 14px 0 12px;
}

.hero-copy p {
  max-width: 440px;
  color: #526862;
  font-size: 1.03rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 18px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.15s ease;
}

.primary-btn {
  background: #167653;
  color: #fff;
}

.secondary-btn {
  background: #fff;
  color: #153d31;
}

.primary-btn:hover,
.secondary-btn:hover,
.bag-btn:hover,
.pill-btn:hover,
.service-card:hover,
.text-button:hover,
.chip:hover {
  transform: translateY(-1px);
}

.primary-btn.small {
  padding: 9px 12px;
  font-size: 0.84rem;
}

.hero-art {
  position: relative;
  width: 420px;
  height: 240px;
}

.orb {
  position: absolute;
  right: 18px;
  bottom: 0;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgba(142, 201, 155, 0.65);
}

.hero-emoji {
  position: absolute;
  right: 78px;
  bottom: 14px;
  font-size: 7rem;
  filter: drop-shadow(0 16px 10px rgba(0, 0, 0, 0.12));
}

.floating-tag {
  position: absolute;
  background: white;
  border-radius: 14px;
  padding: 10px 12px;
  box-shadow: 0 18px 30px rgba(20, 44, 38, 0.08);
  font-weight: 700;
  font-size: 0.74rem;
}

.floating-tag.one {
  right: 8px;
  top: 26px;
}

.floating-tag.two {
  left: 10px;
  bottom: 30px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 36px;
}

.service-card {
  background: white;
  color: #14392f;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid #e2ebe5;
  border-radius: 18px;
  padding: 18px 16px;
  text-align: left;
}

.service-card .icon {
  display: inline-grid;
  place-items: center;
  width: 49px;
  height: 49px;
  border-radius: 15px;
  background: #eef7f1;
  font-size: 1.6rem;
}

.service-card strong,
.service-card small {
  display: block;
}

.service-card strong {
  font-size: 0.98rem;
}

.service-card small {
  color: #64756e;
  margin-top: 4px;
}

.catalog-section,
.tests-section {
  margin-top: 10px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-bottom: 18px;
}

.section-header h2 {
  margin: 0 0 4px;
  font-size: clamp(1.6rem, 2vw, 2.3rem);
  letter-spacing: -0.05em;
}

.section-header p {
  margin: 0;
  color: #677a73;
}

.search-box {
  position: relative;
  min-width: min(100%, 350px);
}

.search-box span {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #72837b;
  font-size: 1.1rem;
}

.search-box input {
  width: 100%;
  border: 1px solid #dfe9e2;
  border-radius: 14px;
  padding: 12px 14px 12px 38px;
  background: white;
  outline: none;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 18px;
}

.chip {
  background: white;
  color: #4a5d57;
  border: 1px solid #dfe9e2;
  border-radius: 20px;
  padding: 8px 14px;
  font-weight: 600;
}

.chip.active {
  background: #ebf6ee;
  border-color: #cce4d3;
  color: #105d45;
}

.product-grid,
.test-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.product-card,
.test-card {
  background: white;
  border: 1px solid #e2ebe5;
  border-radius: 18px;
  padding: 16px;
}

.product-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: #f2f7f3;
  font-size: 1.6rem;
}

.product-tag {
  background: #f4f7f4;
  color: #5b6d66;
  border-radius: 999px;
  font-size: 0.68rem;
  padding: 5px 9px;
}

.product-card h3,
.test-card h3 {
  margin: 14px 0 6px;
  font-size: 1.08rem;
  letter-spacing: -0.03em;
}

.product-card p,
.test-card p {
  margin: 0 0 18px;
  color: #667a73;
  line-height: 1.5;
  min-height: 40px;
}

.product-bottom,
.test-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.product-card button,
.test-card button {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #ebf6ee;
  color: #167653;
  font-size: 1.6rem;
  font-weight: 700;
}

.text-button {
  background: transparent;
  color: #167653;
  font-weight: 700;
  padding: 8px 0;
}

.test-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 14px;
}

.meta-line {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: #677b74;
  font-size: 0.75rem;
  margin-bottom: 18px;
}

.cta-banner {
  margin-top: 36px;
  padding: 22px 24px;
  background: #143c30;
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.cta-banner h3 {
  margin: 0 0 6px;
  font-size: 1.7rem;
  letter-spacing: -0.04em;
}

.cta-banner p {
  margin: 0;
  color: #d8e1dc;
}

.footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: #768781;
  font-size: 0.76rem;
  padding: 26px 0 10px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 30, 27, 0.55);
  display: grid;
  place-items: center;
  z-index: 20;
  padding: 24px;
}

.modal-panel {
  width: min(560px, 100%);
  background: white;
  border-radius: 24px;
  padding: 20px 22px 22px;
  box-shadow: 0 22px 80px rgba(9, 25, 18, 0.22);
}

.modal-panel.narrow {
  width: min(460px, 100%);
}

.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.modal-head h3 {
  margin: 0;
  font-size: 1.6rem;
  letter-spacing: -0.04em;
}

.modal-head button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background: #f0f5f1;
  font-size: 1.3rem;
}

.cart-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #e7eeea;
  padding: 12px 0;
}

.cart-row strong,
.cart-row small {
  display: block;
}

.cart-row small {
  color: #65776f;
  margin-top: 4px;
}

.qty-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-controls button {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #dfe9e2;
  background: white;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 14px;
  font-size: 1.05rem;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-grid label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
  color: #234a40;
}

.form-grid input,
.form-grid select {
  border: 1px solid #dfe9e2;
  border-radius: 12px;
  background: white;
  padding: 12px 13px;
  outline: none;
}

.form-grid input:focus,
.form-grid select:focus,
.search-box input:focus {
  border-color: #91ba9d;
}

.booking-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f7f4;
  padding: 12px 14px;
  border-radius: 12px;
  color: #1f4037;
}

.notice-box {
  background: #f4f7f4;
  border-radius: 12px;
  padding: 12px 14px;
  color: #5c7269;
  line-height: 1.5;
}

.full {
  width: 100%;
}

.empty-state {
  background: #f6f8f6;
  border: 1px dashed #dbe8df;
  border-radius: 12px;
  padding: 18px;
  color: #5e7069;
}

.empty-state.large {
  padding: 28px 18px;
  text-align: center;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  background: #183d31;
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
  z-index: 30;
  font-size: 0.9rem;
}

@media (max-width: 980px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .test-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 70px;
  }

  .hero-art {
    width: 100%;
    max-width: 340px;
    align-self: flex-end;
  }
}

@media (max-width: 640px) {
  .page-shell {
    padding: 0 16px 28px;
  }

  .nav {
    display: none;
  }

  .header-actions {
    gap: 8px;
  }

  .pill-btn {
    display: none;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .section-header,
  .cta-banner,
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }
}
