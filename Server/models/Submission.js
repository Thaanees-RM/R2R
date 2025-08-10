import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  whatsapp: String,
  country: String,
  position: String,
  sdg: String,
  university: String,
  bankName: String,
  branchName: String,
  beneficiary: String,
  accountNumber: String,
  beneficiaryAddress: String,
  switCode: String,
  bankCode: String,
  receiptFilePath: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Submission', submissionSchema);
