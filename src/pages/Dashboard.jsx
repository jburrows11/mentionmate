import { useEffect, useState } from "react";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      { username: "@localfan", date: "2025-06-01", link: "#", status: "Approved", repost: "Yes", download: "https://drive.google.com/example" },
      { username: "@foodie123", date: "2025-05-30", link: "#", status: "Pending", repost: "No", download: "https://drive.google.com/example" }
    ]);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Content Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-xl p-5">
            <p className="text-sm text-gray-500">Total Posts This Week</p>
            <p className="text-3xl font-semibold">24</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-5">
            <p className="text-sm text-gray-500">Approved Messages</p>
            <p className="text-3xl font-semibold">19</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-5">
            <p className="text-sm text-gray-500">Reposts Scheduled</p>
            <p className="text-3xl font-semibold">17</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">Tagged Posts</h2>
          <table className="min-w-full table-auto text-left text-sm">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-2 pr-4">User</th>
                <th className="pb-2 pr-4">Date</th>
                <th className="pb-2 pr-4">Link</th>
                <th className="pb-2 pr-4">Status</th>
                <th className="pb-2 pr-4">Repost</th>
                <th className="pb-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr key={idx} className="border-t text-gray-800">
                  <td className="py-2 pr-4">{post.username}</td>
                  <td className="py-2 pr-4">{post.date}</td>
                  <td className="py-2 pr-4"><a href={post.link} className="text-blue-600 underline">View</a></td>
                  <td className="py-2 pr-4">{post.status}</td>
                  <td className="py-2 pr-4">{post.repost}</td>
                  <td className="py-2"><a href={post.download} className="text-blue-600 underline">Download</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}