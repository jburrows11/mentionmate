import { useState } from "react";

export default function Setup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ businessName: "", email: "", platform: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen bg-white py-12 px-6 flex items-center justify-center">
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Get Set Up in Minutes</h2>
        <div className="text-center text-sm text-gray-500 mb-6">Step {step} of 3</div>

        {step === 1 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-700">Business Name</span>
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </label>
            <button onClick={nextStep} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-700">Business Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </label>
            <div className="flex justify-between">
              <button onClick={prevStep} className="text-blue-600">Back</button>
              <button onClick={nextStep} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-700">Primary Platform</span>
              <select name="platform" value={formData.platform} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option value="">Select one</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="facebook">Facebook</option>
              </select>
            </label>
            <div className="flex justify-between">
              <button onClick={prevStep} className="text-blue-600">Back</button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">Finish</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}