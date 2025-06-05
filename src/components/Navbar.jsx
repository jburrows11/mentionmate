import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Tagr</Link>
      <div className="space-x-4">
        <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
        <Link to="/setup" className="text-gray-700 hover:text-blue-600">Setup</Link>
        <Link to="/agency" className="text-gray-700 hover:text-blue-600">Agency</Link>
      </div>
    </nav>
  );
}