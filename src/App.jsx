import { useEffect, useMemo, useState } from 'react';

const categories = ['All', 'Wellness', 'First aid', 'Personal care', 'Supplements'];

const fmt = (value) => `₹${Number(value).toLocaleString('en-IN')}`;

function App() {
  const [medicines, setMedicines] = useState([]);
  const [tests, setTests] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [bookingTest, setBookingTest] = useState(null);
  const [prescriptionOpen, setPrescriptionOpen] = useState(false);

  useEffect(() => {
    fetch('/api/medicines')
      .then((res) => res.json())
      .then((data) => setMedicines(data.data || []))
      .catch(() => setMessage('Could not load medicines.'));

    fetch('/api/tests')
      .then((res) => res.json())
      .then((data) => setTests(data.data || []))
      .catch(() => setMessage('Could not load lab tests.'));
  }, []);

  const filteredMedicines = useMemo(() => {
    const query = search.trim().toLowerCase();
    return medicines.filter((item) => {
      const matchCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch =
        !query ||
        [item.name, item.category, item.description].some((field) =>
          String(field).toLowerCase().includes(query)
        );
      return matchCategory && matchSearch;
    });
  }, [medicines, activeCategory, search]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (medicine) => {
    setCart((current) => {
      const exists = current.find((item) => item.id === medicine.id);
      if (exists) {
        return current.map((item) =>
          item.id === medicine.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...current, { ...medicine, qty: 1 }];
    });
    setMessage(`${medicine.name} added to your bag.`);
    setShowCart(true);
  };

  const updateQty = (id, delta) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleCheckout = async () => {
    if (!cart.length) {
      setMessage('Your bag is empty.');
      return;
    }

    const payload = {
      items: cart,
      customer: {
        name: 'Guest Customer',
        phone: '+91 98765 43210',
      },
      address: 'Sample delivery address',
      prescription: null,
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      setMessage(result.message || 'Order placed successfully.');
      setCart([]);
      setShowCart(false);
    } catch (error) {
      setMessage('Checkout failed. Please try again.');
    }
  };

  const handleBooking = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      test: bookingTest?.name,
      patientName: form.get('patientName'),
      phone: form.get('phone'),
      address: form.get('address'),
      date: form.get('date'),
      slot: form.get('slot'),
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      setMessage(result.message || 'Booking received.');
      setBookingTest(null);
      event.target.reset();
    } catch (error) {
      setMessage('Booking could not be sent.');
    }
  };

  const handlePrescriptionSubmit = (event) => {
    event.preventDefault();
    setMessage('Prescription request sent. Our team will contact you soon.');
    setPrescriptionOpen(false);
    event.target.reset();
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">✚</div>
          <div>
            <div className="brand-name">Bajrang Medicose</div>
            <div className="brand-sub">care, delivered</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#medicines">Medicines</a>
          <a href="#tests">Tests</a>
        </nav>

        <div className="header-actions">
          <button className="pill-btn">Deliver to your area</button>
          <button className="bag-btn" onClick={() => setShowCart(true)}>
            Bag <span>{cart.reduce((sum, item) => sum + item.qty, 0)}</span>
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">Your neighborhood health partner</div>
            <h1>Better health, made a little easier.</h1>
            <p>
              Order medicines or book a blood test. We bring trusted care to your home.
            </p>
            <div className="hero-actions">
              <a href="#medicines" className="primary-btn">Order medicines →</a>
              <a href="#tests" className="secondary-btn">Book a test</a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orb" />
            <div className="hero-emoji">🩺</div>
            <div className="floating-tag one">✓ Trusted local care</div>
            <div className="floating-tag two">🏠 Home collection</div>
          </div>
        </section>

        <section className="services-grid">
          <button className="service-card" onClick={() => document.getElementById('medicines')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="icon">💊</span>
            <span>
              <strong>Medicines delivered</strong>
              <small>Browse essentials</small>
            </span>
          </button>

          <button className="service-card" onClick={() => document.getElementById('tests')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="icon">🧪</span>
            <span>
              <strong>Book a blood test</strong>
              <small>Choose a convenient slot</small>
            </span>
          </button>

          <button className="service-card" onClick={() => setPrescriptionOpen(true)}>
            <span className="icon">📋</span>
            <span>
              <strong>Have a prescription?</strong>
              <small>Get help with your order</small>
            </span>
          </button>
        </section>

        <section id="medicines" className="catalog-section">
          <div className="section-header">
            <div>
              <h2>Everyday essentials</h2>
              <p>Popular pharmacy picks, ready when you need them.</p>
            </div>
            <div className="search-box">
              <span>⌕</span>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medicines"
              />
            </div>
          </div>

          <div className="chip-row">
            {categories.map((category) => (
              <button
                key={category}
                className={category === activeCategory ? 'chip active' : 'chip'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredMedicines.length ? (
              filteredMedicines.map((item) => (
                <article className="product-card" key={item.id}>
                  <div className="product-top">
                    <div className="product-icon">{item.icon}</div>
                    <span className="product-tag">{item.category}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="product-bottom">
                    <strong>{fmt(item.price)}</strong>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">No medicines match your search.</div>
            )}
          </div>
        </section>

        <section id="tests" className="tests-section">
          <div className="section-header">
            <div>
              <h2>Popular lab tests</h2>
              <p>Qualified phlebotomists. Home sample collection. </p>
            </div>
            <button className="text-button">View all tests →</button>
          </div>

          <div className="test-grid">
            {tests.map((test) => (
              <article className="test-card" key={test.id}>
                <div className="test-head">
                  <h3>{test.name}</h3>
                  <span>🧬</span>
                </div>
                <p>{test.description}</p>
                <div className="meta-line">
                  <span>◷ {test.turnaround}</span>
                  <span>⏱ {test.fasting}</span>
                </div>
                <div className="test-bottom">
                  <strong>{fmt(test.price)}</strong>
                  <button className="primary-btn small" onClick={() => setBookingTest(test)}>
                    Book test
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div>
            <h3>Skip the waiting room.</h3>
            <p>Book a home collection and choose a time that works for you.</p>
          </div>
          <button className="secondary-btn" onClick={() => document.getElementById('tests')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore home collection →
          </button>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Bajrang Medicose</span>
        <span>Your neighborhood health partner</span>
      </footer>

      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Your bag</h3>
              <button onClick={() => setShowCart(false)}>×</button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-state large">Your bag is waiting for you.</div>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-row" key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{fmt(item.price)} each</small>
                    </div>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                ))}

                <div className="cart-total">
                  <span>Subtotal</span>
                  <strong>{fmt(cartTotal)}</strong>
                </div>

                <button className="primary-btn full" onClick={handleCheckout}>
                  Continue to order
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {bookingTest && (
        <div className="modal-overlay" onClick={() => setBookingTest(null)}>
          <div className="modal-panel narrow" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Book your blood test</h3>
              <button onClick={() => setBookingTest(null)}>×</button>
            </div>

            <form onSubmit={handleBooking} className="form-grid">
              <label>
                Patient name
                <input type="text" name="patientName" required placeholder="Full name" />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" required placeholder="Phone number" />
              </label>
              <label>
                Home address
                <input type="text" name="address" required placeholder="Address" />
              </label>
              <label>
                Preferred date
                <input type="date" name="date" required />
              </label>
              <label>
                Preferred time
                <select name="slot" required>
                  <option value="">Choose a slot</option>
                  <option value="7:00 am - 9:00 am">7:00 am - 9:00 am</option>
                  <option value="9:00 am - 11:00 am">9:00 am - 11:00 am</option>
                  <option value="11:00 am - 1:00 pm">11:00 am - 1:00 pm</option>
                  <option value="4:00 pm - 6:00 pm">4:00 pm - 6:00 pm</option>
                </select>
              </label>

              <div className="booking-info">
                <strong>{bookingTest.name}</strong>
                <span>{fmt(bookingTest.price)}</span>
              </div>

              <button className="primary-btn full" type="submit">Request booking</button>
            </form>
          </div>
        </div>
      )}

      {prescriptionOpen && (
        <div className="modal-overlay" onClick={() => setPrescriptionOpen(false)}>
          <div className="modal-panel narrow" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Prescription assistance</h3>
              <button onClick={() => setPrescriptionOpen(false)}>×</button>
            </div>

            <form onSubmit={handlePrescriptionSubmit} className="form-grid">
              <label>
                Your name
                <input type="text" name="name" required placeholder="Name" />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" required placeholder="Phone number" />
              </label>
              <label>
                Prescription file (optional)
                <input type="file" accept="image/*,.pdf" />
              </label>

              <div className="notice-box">
                Please share prescription medicines only with a licensed pharmacist. Availability and requirements are confirmed by our team.
              </div>

              <button type="submit" className="primary-btn full">Request a callback</button>
            </form>
          </div>
        </div>
      )}

      {message && <div className="toast">{message}</div>}
    </div>
  );
}

export default App;
