import { useEffect, useState } from "react";

export default function AgencyDashboard() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients([
      { name: "Joe's Tacos", posts: 34, approved: 27, status: "Active" },
      { name: "Glow Hair Studio", posts: 18, approved: 14, status: "Trial" },
    ]);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Agency Control Panel</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-xl p-5">
            <p className="text-sm text-gray-500">Total Clients</p>
            <p className="text-3xl font-semibold">{clients.length}</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-5">
            <p className="text-sm text-gray-500">Avg. Posts Per Client</p>
            <p className="text-3xl font-semibold">
              {clients.reduce((sum, c) => sum + c.posts, 0) / clients.length}
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-5">
            <p className="text-sm text-gray-500">Active Plans</p>
            <p className="text-3xl font-semibold">{clients.filter(c => c.status === "Active").length}</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">Client Overview</h2>
          <table className="min-w-full table-auto text-left text-sm">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-2 pr-4">Client</th>
                <th className="pb-2 pr-4">Posts</th>
                <th className="pb-2 pr-4">Approved</th>
                <th className="pb-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, idx) => (
                <tr key={idx} className="border-t text-gray-800">
                  <td className="py-2 pr-4 font-medium">{client.name}</td>
                  <td className="py-2 pr-4">{client.posts}</td>
                  <td className="py-2 pr-4">{client.approved}</td>
                  <td className="py-2 pr-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${client.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {client.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}