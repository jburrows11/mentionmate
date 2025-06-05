export default function Landing() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">Automate UGC for Local Businesses</h1>
            <p className="text-lg text-white/90 mb-6">Tagr helps you collect, approve, and repost customer content — hands-free.</p>
            <a href="/setup" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">Start Free</a>
          </div>
          <img src="https://source.unsplash.com/featured/?dashboard" alt="App preview" className="rounded-xl mt-10 md:mt-0 md:ml-10 w-full md:w-[400px]" />
        </div>
      </header>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-3">📸</div>
            <h3 className="text-xl font-semibold mb-1">Capture</h3>
            <p className="text-gray-600">Automatically pull in posts where your business is tagged or mentioned.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-xl font-semibold mb-1">Approve</h3>
            <p className="text-gray-600">Choose the best content and set message templates or repost rules.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-3">📤</div>
            <h3 className="text-xl font-semibold mb-1">Publish</h3>
            <p className="text-gray-600">Schedule or instantly repost approved content to your social channels.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow text-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-16 h-16 rounded-full mx-auto mb-4" />
          <blockquote className="text-lg italic text-gray-700 mb-2">“Tagr simplified UGC for us. We save hours every week and our socials are always active.”</blockquote>
          <p className="text-sm text-gray-500">— Lisa T., Marketing Director</p>
        </div>
      </section>
    </div>
  );
}