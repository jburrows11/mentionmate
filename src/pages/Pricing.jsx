export default function Pricing() {
  return (
    <div className="bg-white text-gray-900 px-6 py-16 font-sans">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Scalable Pricing</h1>
        <p className="text-gray-600 text-lg">Choose a plan that fits your business or agency needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Starter",
            price: "$49",
            desc: "Perfect for small businesses getting started with UGC.",
            features: ["Track up to 25 posts/mo", "Basic dashboard", "Manual repost approval"],
            popular: false,
          },
          {
            name: "Growth",
            price: "$149",
            desc: "For brands who need automation and higher volume.",
            features: ["Up to 100 posts/mo", "Auto-repost workflows", "Branded messages", "Weekly email reports"],
            popular: true,
          },
          {
            name: "Agency",
            price: "$499",
            desc: "Full white-label dashboard and client sub-accounts.",
            features: ["Unlimited clients", "Agency branding", "Dedicated onboarding", "Client reporting suite"],
            popular: false,
          },
        ].map((plan) => (
          <div key={plan.name} className="bg-white border border-gray-200 rounded-xl shadow p-6 relative">
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold">MOST POPULAR</div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg font-normal">/mo</span></p>
            <p className="text-gray-500 mb-6">{plan.desc}</p>
            <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
              {plan.features.map((f, i) => <li key={i}>✔️ {f}</li>)}
            </ul>
            <a href="/setup" className="block w-full text-center bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700">Select</a>
          </div>
        ))}
      </div>
    </div>
  );
}