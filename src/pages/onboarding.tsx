import { useState } from "react";
import { GetServerSideProps } from 'next';
import { fetchCountries } from '../services/countryService';

const steps = [
  { title: "Your details", description: "Provide an email and password" },
  { title: "Verify your email", description: "Enter your verification code" },
  { title: "Upload a proof of your identity", description: "Complete KYC verification" },
  { title: "Welcome to Untitled!", description: "Get up and running in 3 minutes" },
];

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch countries server-side
    const countries = await fetchCountries();
  
    return {
      props: { countries },
    };
  };

const Onboarding = ({countries}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    verificationCode: "",
    documentType: "",
    country: "",
    file1: null,
    file2: null,
  });
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [confirmKYC, setConfirmKYC] = useState(false);

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => currentStep > 0 && setCurrentStep((prevStep) => prevStep - 1);
  const skipStep = () => setCurrentStep((prevStep) => prevStep + 1);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file uploads and preview
  const handleFileChange = (e, fileNumber) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      if (fileNumber === 1) {
        setFormData({ ...formData, file1: file });
        setPreview1(previewURL);
      } else {
        setFormData({ ...formData, file2: file });
        setPreview2(previewURL);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:block w-1/3 bg-gray-100 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Dealdrop Onboarding</h1>
        </div>
        <ul>
          {steps.map((step, index) => (
            <li key={index} className={`py-4 ${index <= currentStep ? "text-black" : "text-gray-400"}`}>
              <div className="flex items-center">
                <span className="mr-2">{index + 1}</span>
                <div>
                  <h2 className="font-semibold">{step.title}</h2>
                  <p className="text-sm">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Main Section */}
      <div className="flex-1 p-6 md:p-8 bg-white">
        <div className="md:hidden text-center mb-4">
          <h2 className="text-lg font-bold">{steps[currentStep].title}</h2>
          <p className="text-sm text-gray-600">{steps[currentStep].description}</p>
        </div>

        {/* Form Section */}
        <div className="w-full md:max-w-md mx-auto transition-all duration-700 ease-in-out transform">
          {/* Step 1: Provide email and password */}
          {currentStep === 0 && (
            <div className="animate-fade-in">
              <form onSubmit={nextStep}>
                <h2 className="text-xl font-bold mb-4">Create a free account</h2>
                <p className="text-sm mb-4">Provide your email and choose a password.</p>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm py-3 font-semibold">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 w-full rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm py-3 font-semibold">Password*</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 w-full rounded-md"
                    required
                  />
                </div>
                <button type="submit" className="bg-green-600 text-white py-3 px-4 rounded w-full">Continue</button>
              </form>
            </div>
          )}

          {/* Step 2: Verify your email */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <form onSubmit={nextStep}>
                <h2 className="text-xl font-bold mb-4">Verify your email</h2>
                <p className="text-sm mb-4">We sent a code to {formData.email}.</p>
                <div className="mb-4">
                  <label htmlFor="verificationCode" className="block py-3 text-sm font-semibold">Verification Code</label>
                  <input
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 w-full rounded-md"
                    required
                  />
                </div>
                <button type="submit" className="bg-green-600 text-white py-3 px-4 rounded w-full">Continue</button>
                <button type="button" className="mt-4 bg-gray-500 text-white py-3 px-4 rounded w-full" onClick={prevStep}>Back</button>
              </form>
            </div>
          )}

          {/* Step 3: Upload proof of identity (KYC) */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-4">Upload a proof of your identity</h2>
              <p className="text-sm mb-4">Apex Markets Requires a valid government-issued ID (drivers license, passport, national ID).</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold">Your Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 w-full rounded-md"
                  >
                    <option value="">Select...</option>
                    {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="documentType" className="block text-sm font-semibold">Document Type</label>
                  <select
                    id="documentType"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 w-full rounded-md"
                  >
                    <option value="">Select...</option>
                    <option value="National ID">National ID</option>
                    <option value="Passport">Passport</option>
                    {/* Add more document types as needed */}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First file upload */}
                <div className="border-2 border-dashed p-4 text-center rounded-md">
                  {preview1 ? (
                    <div>
                      <p>Uploading complete <a href="#" className="text-blue-500">{formData.file1?.name}</a></p>
                      <img src={preview1} alt="Preview 1" className="h-20 mx-auto" />
                      <button
                        type="button"
                        className="text-blue-500"
                        onClick={() => setPreview1(null)}
                      >
                        Change File
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="file"
                        id="file1"
                        onChange={(e) => handleFileChange(e, 1)}
                        className="hidden"
                      />
                      <label htmlFor="file1" className="text-blue-500 cursor-pointer">Choose a File</label>
                    </div>
                  )}
                </div>

                {/* Second file upload */}
                <div className="border-2 border-dashed p-4 text-center rounded-md">
                  {preview2 ? (
                    <div>
                      <p>Uploading complete <a href="#" className="text-blue-500">{formData.file2?.name}</a></p>
                      <img src={preview2} alt="Preview 2" className="h-20 mx-auto" />
                      <button
                        type="button"
                        className="text-blue-500"
                        onClick={() => setPreview2(null)}
                      >
                        Change File
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="file"
                        id="file2"
                        onChange={(e) => handleFileChange(e, 2)}
                        className="hidden"
                      />
                      <label htmlFor="file2" className="text-blue-500 cursor-pointer">Choose a File</label>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="checkbox"
                  id="confirmKYC"
                  checked={confirmKYC}
                  onChange={() => setConfirmKYC(!confirmKYC)}
                  className="mr-2"
                />
                <label htmlFor="confirmKYC" className="text-sm">
                  I confirm that I uploaded a valid government-issued photo ID. This ID includes my picture, signature, name, date of birth, and address.
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded w-full"
                  onClick={nextStep}
                  disabled={!confirmKYC}
                >
                  Continue
                </button>
                <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded w-full" onClick={prevStep}>Previous</button>
                <button type="button" className="text-gray-500" onClick={skipStep}>Skip</button>
              </div>
            </div>
          )}

          {/* Step 4: Welcome */}
          {currentStep === 3 && (
            <div className="animate-fade-in text-center">
              <h2 className="text-xl font-bold mb-4">Welcome to Untitled!</h2>
              <p className="text-sm mb-4">Get up and running in 3 minutes.</p>
              <button onClick={() => window.location.href = "/dashboard"} className="bg-green-600 text-white py-2 px-4 rounded">
                Finish up
              </button>
            </div>
          )}
        </div>

        {/* Carousel Dots - Mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentStep ? "bg-green-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
