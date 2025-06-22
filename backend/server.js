require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const WaitlistEntry = require('./models/waitlistentry');
const emailTemplate = require('./utils/emailtemplate');
const path = require('path');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/auth');


// sendgrid mail Setup
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const allowedOrigins = ['https://junkcycle.ca', 'http://localhost:5173'];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // limit each IP to 3 requests per windowMs
  message: "Too many requests, please try again later."
});
app.use('/join-waitlist', limiter);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Waitlist Endpoint
app.post('/join-waitlist', async (req, res) => {
  const { firstname, lastname, role, province, city, email, phone, nickname } = req.body;

  // Honeypot Field Check
  if (nickname) {
    return res.status(400).json({ message: "Bot detected" });
  }

  // Basic Validation
  if (!firstname.trim() || !lastname.trim()) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: 'Invalid phone number' });
  }

  try {
    const entry = new WaitlistEntry({ firstname, lastname, role, province, city, email, phone });
    await entry.save();

    
    // Send Confirmation Email for sendgrid mail
    // await sgMail.send({
    //   to: email,
    //   from: 'hello@junkcycle.ca', // must be a verified sender on SendGrid
    //   subject: 'Thanks for joining the JunkCycle Waitlist!',
    //   html: emailTemplate(firstname)
    // });

    res.status(200).json({ message: 'Successfully joined the waitlist!' });
  } catch (err) {
    console.error('Error saving waitlist entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Test MongoDB Connection
app.get('/', (req, res) => {
  res.send('JunkCycle backend is running 🚀');
});

// Admin Dashboard Endpoint
app.get('/api/waitlist', authenticateToken, async (req, res) => {
  try {
    const entries = await WaitlistEntry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    console.error('Failed to fetch entries:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Public Waitlist API Endpoint
app.post('/api/waitlist', async (req, res) => {
  const { firstname, lastname, role, province, city, email, phone, nickname } = req.body;

  // Honeypot Field Check
  if (nickname) {
    return res.status(400).json({ message: "Bot detected" });
  }

  // Basic Validation
  if (!firstname.trim() || !lastname.trim()) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: 'Invalid phone number' });
  }

  try {
    const entry = new WaitlistEntry({ firstname, lastname, role, province, city, email, phone });
    await entry.save();

    // Send Confirmation Email
    await transporter.sendMail({
      from: `"JunkCycle" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thanks for joining the JunkCycle Waitlist!',
      html: emailTemplate(firstname),
      // attachments: [{
      //   filename: 'logo.svg',
      //   path: path.join(__dirname, 'assets', 'logo.svg'),
      //   cid: 'logo'
      // }]
    });

    res.status(201).json({ message: "Waitlist entry saved successfully" });
  } catch (error) {
    console.error("Error saving waitlist entry:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Admin Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});
