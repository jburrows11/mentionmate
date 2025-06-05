export default function SetupWizard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Setup Wizard</h1>
      <div className="space-y-4 max-w-lg mx-auto bg-white p-6 shadow rounded-xl">
        <div>
          <label className="block mb-1 font-semibold">Business Name</label>
          <input type="text" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Instagram Handle</label>
          <input type="text" className="w-full border px-3 py-2 rounded" />
        </div>
        <div className="text-right">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Continue</button>
        </div>
      </div>
    </div>
  );
}