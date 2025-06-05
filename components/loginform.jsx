import { useState } from 'react';
//import axios from 'axios';
import { useRouter } from 'next/navigation';

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({}); // Clear previous errors

    try {
      const res = await fetch("https://nsecl-b5bz4znoi-nimrielsiguas-projects.vercel.app/api/users/login", { // Adjust the URL as needed
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Send the password as is
      });

      if (res.ok) {
        const data = await res.json();
        setMsg(data.message);
        setTimeout(() => {
          if (data.role === "admin") {
            router.push('/homeadmin');
            
          } else {
            router.push('/homeloaner');
          }
        }, 1500);
      } else {
        const errorData = await res.json();
        setMsg(errorData.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMsg('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        {msg && (
          <div className={`p-3 mb-4 rounded ${msg.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {msg}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 text-white py-2 rounded w-full hover:bg-blue-500 transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
