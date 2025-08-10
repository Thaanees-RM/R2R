import express from 'express';
import multer from 'multer';
import Submission from '../models/Submission.js';
import path from 'path';

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Form submission route
router.post('/submit', upload.single('receipt'), async (req, res) => {
  try {
    const {
      fullName,
      email,
      whatsapp,
      country,
      position,
      sdg,
      university,
      bankName,
      branchName,
      beneficiary,
      accountNumber,
      beneficiaryAddress,
      switCode,
      bankCode
    } = req.body;

    const newSubmission = new Submission({
      fullName,
      email,
      whatsapp,
      country,
      position,
      sdg,
      university,
      bankName,
      branchName,
      beneficiary,
      accountNumber,
      beneficiaryAddress,
      switCode,
      bankCode,
      receiptFilePath: req.file.path
    });

    await newSubmission.save();

    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Form submission failed.' });
  }
});

export default router;
