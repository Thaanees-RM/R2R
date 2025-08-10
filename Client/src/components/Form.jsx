import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
// import { FaUpload } from 'react-icons/fa';
import upload from '../assets/upload.png'
import emailjs from '@emailjs/browser';



const countryOptions = [
  { value: '', label: '' },
  { value: 'Sri Lanka', label: 'Sri Lanka' },
  { value: 'India', label: 'India' },
  { value: 'Bangladesh', label: 'Bangladesh' },
  { value: 'Other', label: 'Other' },
];

const positionOptions = [
  { value: 'University Ambassador', label: 'University Ambassador' },
  { value: 'University Coordinator', label: 'University Coordinator' },
  { value: 'National Executive Committee Member', label: 'National Executive Committee Member' },
];

const sdgOptions = [
  { value: 'No Poverty', label: 'SDG 1: No Poverty' },
  { value: 'Zero Hunger', label: 'SDG 2: Zero Hunger' },
  { value: 'Good Health and Well-being', label: 'SDG 3: Good Health and Well-being' },
  { value: 'Quality Education', label: 'SDG 4: Quality Education' },
  { value: 'Gender Equality', label: 'SDG 5: Gender Equality' },
  { value: 'Clean Water and Sanitation', label: 'SDG 6: Clean Water and Sanitation' },
  { value: 'Affordable and Clean Energy', label: 'SDG 7: Affordable and Clean Energy' },
  { value: 'Decent Work and Economic Growth', label: 'SDG 8: Decent Work and Economic Growth' },
  { value: 'Industry, Innovation and Infrastructure', label: 'SDG 9: Industry, Innovation and Infrastructure' },
  { value: 'Reduced Inequalities', label: 'SDG 10: Reduced Inequalities' },
  { value: 'Sustainable Cities and Communities', label: 'SDG 11: Sustainable Cities and Communities' },
  { value: 'Responsible Consumption and Production', label: 'SDG 12: Responsible Consumption and Production' },
  { value: 'Climate Action', label: 'SDG 13: Climate Action' },
  { value: 'Life Below Water', label: 'SDG 14: Life Below Water' },
  { value: 'Life on Land', label: 'SDG 15: Life on Land' },
  { value: 'Peace, Justice and Strong Institutions', label: 'SDG 16: Peace, Justice and Strong Institutions' },
  { value: 'Partnerships for the Goals', label: 'SDG 17: Partnerships for the Goals' },
];


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '10px',
    borderColor: '#1E1E1E40',
    boxShadow: state.isFocused ? '0 0 0 2px #1E1E1E40' : 'none',
    paddingLeft: '8px',
    backgroundColor: '#fff',
    minHeight: '48px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#ECECF0' : 'white',
    color: '#1E1E1E',
    padding: 12,
    borderRadius: '10px',
    margin: '4px 4px',
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: '4px 4px 30px 0px #00000040',
    borderRadius: '10px',
    overflow: 'hidden',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 4,
  }),
  indicatorSeparator: () => null,
};

// Custom Dropdown Indicator component
const DropdownIndicator = (props) => {
  const {
    selectProps: { menuIsOpen },
  } = props;
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
    </components.DropdownIndicator>
  );
};

const Form = () => {
  const [country, setCountry] = useState(null);
  const [position, setPosition] = useState(null);
  const [sdg, setSdg] = useState(null);
  const [receiptFile, setReceiptFile] = useState(null);
  const [errors, setErrors] = useState({});

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setReceiptFile(acceptedFiles[0]);
    }
  });

  const validateForm = (e) => {
    const newErrors = {};

    if (!e.target.fullName.value.trim()) newErrors.fullName = "Full name is required";
    if (!e.target.email.value.trim()) newErrors.email = "Email is required";
    if (!e.target.whatsapp.value.trim()) newErrors.whatsapp = "WhatsApp number is required";
    if (!e.target.university.value.trim()) newErrors.university = "WhatsApp name is required";

    if (!country) newErrors.country = "Country is required";
    if (!position) newErrors.position = "Position is required";
    if (!sdg) newErrors.sdg = "SDG is required";

    // if (!e.target.bankname.value.trim()) newErrors.bankname = "Bank name is required";
    // if (!e.target.branchname.value.trim()) newErrors.branchname = "Branch name is required";
    // if (!e.target.beneficiary.value.trim()) newErrors.beneficiary = "Beneficiary is required";
    // if (!e.target.accountnumber.value.trim()) newErrors.accountnumber = "Account number is required";

    if (country?.value === 'Sri Lanka') {
      if (!e.target.bankname.value.trim()) newErrors.bankname = "Bank name is required";
      if (!e.target.branchname.value.trim()) newErrors.branchname = "Branch name is required";
      if (!e.target.beneficiary.value.trim()) newErrors.beneficiary = "Beneficiary is required";
      if (!e.target.accountnumber.value.trim()) newErrors.accountnumber = "Account number is required";
    } else {
      if (!e.target.foreign_bankname.value.trim()) newErrors.bankname = "Bank name is required";
      if (!e.target.foreign_branchname.value.trim()) newErrors.branchname = "Branch name is required";
      if (!e.target.foreign_beneficiary.value.trim()) newErrors.beneficiary = "Beneficiary is required";
      if (!e.target.foreign_accountnumber.value.trim()) newErrors.accountnumber = "Account number is required";
    }


    if (!e.target.beneficiaryaddress.value.trim()) newErrors.beneficiaryaddress = "Beneficiary address is required";
    if (!e.target.switcode.value.trim()) newErrors.switcode = "SWIT Code is required";
    if (!e.target.bankcode.value.trim()) newErrors.bankcode = "Bank Code is required";

    if (!receiptFile) newErrors.receipt = "Payment receipt is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(e)) {
      alert("Please fix the errors before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append('fullName', e.target.fullName.value);
    formData.append('email', e.target.email.value);
    formData.append('whatsapp', e.target.whatsapp.value);
    formData.append('country', country?.value);
    formData.append('position', position?.value);
    formData.append('sdg', sdg?.value);
    formData.append('university', e.target.university.value);

    // formData.append('bankName', e.target.bankname.value);
    // formData.append('branchName', e.target.branchname.value);
    // formData.append('beneficiary', e.target.beneficiary.value);
    // formData.append('accountNumber', e.target.accountnumber.value);

    if (country?.value === 'Sri Lanka') {
      formData.append('bankName', e.target.bankname.value);
      formData.append('branchName', e.target.branchname.value);
      formData.append('beneficiary', e.target.beneficiary.value);
      formData.append('accountNumber', e.target.accountnumber.value);
    } else {
      formData.append('bankName', e.target.foreign_bankname.value);
      formData.append('branchName', e.target.foreign_branchname.value);
      formData.append('beneficiary', e.target.foreign_beneficiary.value);
      formData.append('accountNumber', e.target.foreign_accountnumber.value);
    }

    formData.append('beneficiaryAddress', e.target.beneficiaryaddress.value);
    formData.append('switCode', e.target.switcode.value);
    formData.append('bankCode', e.target.bankcode.value);
    formData.append('receipt', receiptFile);  // File object

    try {
      const res = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        alert("Form submitted successfully!");

        // Send email
        // Prepare email params
        const emailParams = {
          to_email: e.target.email.value,
          to_name: e.target.fullName.value,
          subject: "G17 Membership Form Submission & Payment Confirmation",
          message: 
          `Thank you for submitting your G17 University Membership form and payment receipt. We have successfully received your onboarding details.

          Your submission is currently under review by the G17 Secretariat. You will be notified of the next steps shortly.

          If you have any questions, feel free to contact us at support@g17global.org.

          Warm regards,  
          G17 University Ambassadors Programme  
          www.g17global.org`,
          
        };

        try {
          await emailjs.send(
            'service_cfdqs5q',     // Replace with your actual service ID
            'template_6r4dpdi',    // Replace with your actual template ID
            emailParams,
            'Pr75KWAcTVcrriaWr'      // Replace with your actual public key
          );

          
        } catch (emailError) {
          console.error("Email sending error:", emailError);
          alert("Form was submitted, but failed to send confirmation email.");
        }

      } else {
        alert("Failed to submit form.");
      }

    } catch (error) {
      console.error('Submit Error:', error);
      alert("Server error.");
    }
  };



  return (
    <div className="px-4 py-10 md:px-24 md:py-20">
      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="bg-white px-4 py-6 md:py-14 md:px-20"
        style={{ boxShadow: '4px 4px 30px 0px #00000040' }}  
      >
        {/* Full Name Field */}
        <div className="mb-8">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
            required
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        {/* Email Address */}
        <div className="mb-8">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* WhatsApp Number */}
        <div className="mb-8">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            WhatsApp Number (with country code) <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="whatsapp"
            className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
            required
          />
          {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
        </div>

        {/* Country & Position */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Your Country */}
          <div>
            <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
              Your Country <span className="text-red-600">*</span>
            </label>
            <Select
              options={countryOptions}
              value={country}
              onChange={setCountry}
              styles={customStyles}
              components={{ DropdownIndicator }}
              placeholder=""
              isSearchable={false}
              required
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>

          {/* Your Position */}
          <div>
            <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
              Your Position at G17 <span className="text-red-600">*</span>
            </label>
            <Select
              options={positionOptions}
              value={position}
              onChange={setPosition}
              styles={customStyles}
              components={{ DropdownIndicator }}
              placeholder="Select your position"
              isSearchable={false}
              required
            />
            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
          </div>

        </div>

        {/* SDG Advocacy Field */}
        <div className="mb-8">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            If you are an Ambassador, what is the SDG that you are advocating for? <span className="text-red-600">*</span>
          </label>
          <Select
            options={sdgOptions}
            value={sdg}
            onChange={setSdg}
            styles={customStyles}
            components={{ DropdownIndicator }}
            placeholder="Select SDG"
            isSearchable={false}
            required
          />
          {errors.sdg && <p className="text-red-500 text-sm mt-1">{errors.sdg}</p>}
        </div>

        {/* university Field */}
        <div className="mb-8">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            Your University <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="university"
            className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
            required
          />
          {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
        </div>
        


        {/* for srilankan members */}
        <div className='flex flex-col gap-4'>
          <p className='text-black text-base font-semibold'>
            For Sri Lankan G17 members
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">

            {/* Bank Name */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Bank Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="bankname"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.bankname && <p className="text-red-500 text-sm mt-1">{errors.bankname}</p>}
            </div>
            {/* Branch Name */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Branch Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="branchname"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.branchname && <p className="text-red-500 text-sm mt-1">{errors.branchname}</p>}
            </div>
            {/* Beneficiary */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Beneficiary <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="beneficiary"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.beneficiary && <p className="text-red-500 text-sm mt-1">{errors.beneficiary}</p>}
            </div>
            {/* Account Number */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Account Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="accountnumber"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.accountnumber && <p className="text-red-500 text-sm mt-1">{errors.accountnumber}</p>}
            </div>

          </div>
        </div>


        {/* for Foreign members */}
        <div className='flex flex-col gap-4'>
          <p className='text-black text-base font-semibold'>
            For Foreign G17 members
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">

            {/* Bank Name */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Bank Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="foreign_bankname"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.bankname && <p className="text-red-500 text-sm mt-1">{errors.bankname}</p>}
            </div>
            {/* Branch Name */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Branch Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="foreign_branchname"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.branchname && <p className="text-red-500 text-sm mt-1">{errors.branchname}</p>}
            </div>
            {/* Beneficiary */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Beneficiary <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="foreign_beneficiary"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.beneficiary && <p className="text-red-500 text-sm mt-1">{errors.beneficiary}</p>}
            </div>
            {/* Account Number */}
            <div className="">
              <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
                Account Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="foreign_accountnumber"
                className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
                
              />
              {errors.accountnumber && <p className="text-red-500 text-sm mt-1">{errors.accountnumber}</p>}
            </div>

          </div>
        </div>


        {/* Address Of Beneficiary */}
        <div className="">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            Address Of Beneficiary <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="beneficiaryaddress"
            className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
            required
          />
          {errors.beneficiaryaddress && <p className="text-red-500 text-sm mt-1">{errors.beneficiaryaddress}</p>}
        </div>

        {/* bank details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 mt-8">
            {/* SWIT Code (International ) */}
          <div className="">
            <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
              SWIT Code (International ) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="switcode"
              className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
              required
            />
            {errors.switcode && <p className="text-red-500 text-sm mt-1">{errors.switcode}</p>}
          </div>
          {/* Bank code */}
          <div className="">
            <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
              Bank Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="bankcode"
              className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
              required
            />
            {errors.bankcode && <p className="text-red-500 text-sm mt-1">{errors.bankcode}</p>}
          </div>
          {/* Bank code
          <div className="">
            <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
              Bank Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="bankcode"
              className="w-full py-3 px-4 bg-white border border-[#1E1E1E40] rounded-md outline-none"
              required
            />
          </div> */}
        </div>

        {/* Payment Receipt Upload */}
        {/* <div className="mb-8">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            Attach your Payment Receipt (PDF/JPG/PNG) <span className="text-red-600">*</span>
          </label>

          <div
            {...getRootProps()}
            className="border border-dashed border-[#1E1E1E40] rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-center h-90 bg-[#FAFAFA] cursor-pointer hover:border-[#1E1E1E] transition"
          >
            <input {...getInputProps()} />

            
            <img src={upload} alt="" />

            {receiptFile ? (
              <p className="text-sm text-gray-700">{receiptFile.name}</p>
            ) : (
              <>
                <p className="text-base text-[#0076A1] font-semibold mb-1">Drag and drop file here</p>
                <p className="text-lg text-[#0076A1] font-semibold mb-1">
                  OR
                </p>
                <button
                  type="button"
                  className="text-white bg-[#0076A1] px-4 py-2 rounded-md text-sm font-medium mt-2 cursor-pointer"
                >
                  Browse Files
                </button>
              </>
            )}
          </div>
          {errors.receiptFile && <p className="text-red-500 text-sm mt-1">{errors.receiptFile}</p>}
        </div> */}

        {/* Payment Receipt Upload */}
        <div className="mb-8">
          <label className="block text-base font-semibold text-[#1E1E1E] mb-2">
            Attach your Payment Receipt <span className="text-red-600">*</span>
          </label>

          <div
            {...getRootProps()}
            className="border border-dashed border-[#1E1E1E40] rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-center h-90 bg-[#FAFAFA] cursor-pointer hover:border-[#1E1E1E] transition"
          >
            <input {...getInputProps()} />

            {!receiptFile && (
              <>
                <img src={upload} alt="" />
                <p className="text-base text-[#0076A1] font-semibold mb-1">Drag and drop file here</p>
                <p className="text-lg text-[#0076A1] font-semibold mb-1">OR</p>
                <button
                  type="button"
                  className="text-white bg-[#0076A1] px-4 py-2 rounded-md text-sm font-medium mt-2 cursor-pointer"
                >
                  Browse Files
                </button>
              </>
            )}

            {receiptFile && (
              <div className="w-full flex flex-col items-center gap-2">
                {receiptFile.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(receiptFile)}
                    alt="Uploaded receipt"
                    className="max-h-60 object-contain rounded-md"
                  />
                ) : receiptFile.type === "application/pdf" ? (
                  <iframe
                    src={URL.createObjectURL(receiptFile)}
                    title="PDF Preview"
                    className="max-w-60 max-h-70"
                  ></iframe>
                ) : (
                  <p className="text-sm text-gray-700">{receiptFile.name}</p>
                )}
              </div>
            )}
          </div>

          {errors.receiptFile && (
            <p className="text-red-500 text-sm mt-1">{errors.receiptFile}</p>
          )}
        </div>


        <div className='flex items-center justify-center'>
          <button
            type="submit"
            className="text-white bg-[#0076A1] px-4 py-2 rounded-md text-sm font-medium mt-2 cursor-pointer w-[80%]"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default Form;
