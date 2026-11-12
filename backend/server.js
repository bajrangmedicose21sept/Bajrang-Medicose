import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const medicines = [
  { id: 1, name: 'Vitamin C', category: 'Supplements', price: 149, icon: '🍊', description: '500 mg · 60 tablets' },
  { id: 2, name: 'Adhesive Bandages', category: 'First aid', price: 65, icon: '🩹', description: 'Assorted · 20 strips' },
  { id: 3, name: 'Digital Thermometer', category: 'Personal care', price: 199, icon: '🌡️', description: 'Fast read · 1 unit' },
  { id: 4, name: 'Electrolyte Powder', category: 'Wellness', price: 89, icon: '🥤', description: 'Orange · 5 pack' },
  { id: 5, name: 'Hand Sanitizer', category: 'Personal care', price: 75, icon: '🧴', description: '70% alcohol · 100 ml' },
  { id: 6, name: 'Daily Multivitamin', category: 'Supplements', price: 225, icon: '🍃', description: '30 tablets · adult' },
  { id: 7, name: 'First Aid Kit', category: 'First aid', price: 349, icon: '🧰', description: 'Compact home kit' },
  { id: 8, name: 'Protective Masks', category: 'Wellness', price: 99, icon: '😷', description: '3-ply · pack of 10' },
];

const tests = [
  { id: 101, name: 'Complete Blood Count (CBC)', category: 'General Health', price: 399, description: 'Broad overview of blood cells and general health.', turnaround: '24 hrs', fasting: 'Not required' },
  { id: 102, name: 'Blood Sugar (Fasting)', category: 'Diabetes', price: 149, description: 'Measures glucose after overnight fasting.', turnaround: '12 hrs', fasting: '8–10 hrs fasting' },
  { id: 103, name: 'Thyroid Profile (TSH)', category: 'Hormone', price: 349, description: 'Screens thyroid function with a simple blood sample.', turnaround: '24 hrs', fasting: 'Not required' },
  { id: 104, name: 'Vitamin D Test', category: 'Wellness', price: 499, description: 'Checks vitamin D levels for better immunity and bone health.', turnaround: '36 hrs', fasting: 'Fasting not required' },
];

app.get('/api/health', (_, res) => {
  res.json({ ok: true, message: 'Bajrang Medicose API is running.' });
});

app.get('/api/medicines', (_, res) => {
  res.json({ data: medicines });
});

app.get('/api/tests', (_, res) => {
  res.json({ data: tests });
});

app.post('/api/orders', (req, res) => {
  const { items, customer, address, prescription } = req.body;
  const orderTotal = (items || []).reduce((sum, item) => sum + item.price * item.qty, 0);

  res.status(201).json({
    message: 'Order created successfully.',
    order: {
      id: `BM-${Date.now()}`,
      total: orderTotal,
      items,
      customer,
      address,
      prescription: prescription || null,
      status: 'Confirmed',
    },
  });
});

app.post('/api/bookings', (req, res) => {
  const { test, patientName, phone, address, date, slot } = req.body;

  res.status(201).json({
    message: 'Booking request received.',
    booking: {
      id: `BT-${Date.now()}`,
      test,
      patientName,
      phone,
      address,
      date,
      slot,
      status: 'Pending confirmation',
    },
  });
});

app.listen(PORT, () => {
  console.log(`Bajrang Medicose API listening on http://localhost:${PORT}`);
});
