import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Wedding Planner</h1>
        <p className="text-xl mb-8">
          Your comprehensive wedding planning solution. Plan your perfect day with ease.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/login" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            Register
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Planning Tools</h2>
            <p>Manage your budget, guest list, seating arrangements, and timeline all in one place.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Vendor Directory</h2>
            <p>Find and connect with the best vendors for your special day.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">RSVP Management</h2>
            <p>Easily track guest responses and meal preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
