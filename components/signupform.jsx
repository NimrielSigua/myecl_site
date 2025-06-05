import { useState, useRef } from 'react';

function SignupForm() {

  const [fname, setFirstname] = useState("");
  const [mname, setMiddlename] = useState("");
  const [lname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [role] = useState("user");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({}); // Clear previous errors

    // Check if password and confirm password match
    if (password !== confirmpassword) {
        setErrors((prevErrors) => ({ ...prevErrors, confirmpassword: 'Passwords do not match' }));
        setIsLoading(false);
        return;
    }

    // Check if username already exists
    const usernameCheckResponse = await fetch(`http://localhost:3000/api/users?username=${username}`);
    const usernameCheckData = await usernameCheckResponse.json();

    if (usernameCheckData.users.length > 0) {
        setErrors((prevErrors) => ({ ...prevErrors, username: 'Username already exists' }));
        setIsLoading(false);
        return;
    }

    const userData = {
        fname,
        mname,
        lname,
        age,
        gender,
        role,
        address,
        username,
        password,
        confirmpassword
    };

    try {
        const res = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData)
        });

        if (res.ok) {
            setMsg('Registration successful!');
            // Reset form fields
            setFirstname("");
            setMiddlename("");
            setLastname("");
            setAge("");
            setGender("");
            setAddress("");
            setUsername("");
            setPassword("");
            setConfirmpassword("");
        } else {
            throw new Error("Failed to add user");
        }
    } catch (error) {
        console.error('Registration error:', error);
        setMsg('An error occurred. Please try again.');
    } finally {
        setIsLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        
        {msg && (
          <div className={`p-3 mb-4 rounded ${msg.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {msg}
          </div>
        )}

<div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFirstname(e.target.value)}
            className={`border ${errors.fname ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.fname && <p className="text-red-500 text-sm mt-1">{errors.fname}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="middlename">Middle Name</label>
          <input
            type="text"
            id="middlename"
            placeholder="Middle Name"
            value={mname}
            onChange={(e) => setMiddlename(e.target.value)}
            className={`border ${errors.mname ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.middlename && <p className="text-red-500 text-sm mt-1">{errors.mname}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLastname(e.target.value)}
            className={`border ${errors.lname ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lname}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`border ${errors.age ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Gender</label>
          <select
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
            id="gender"
            className={`border ${errors.gender ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>



        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
          <textarea
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            className={`border ${errors.address ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="3"
            required
          ></textarea>
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
            onChange={(e)=>setPassword(e.target.value)}
            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            className={`border ${errors.confirmpassword ? 'border-red-500' : 'border-gray-300'} text-black p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.confirmpassword && <p className="text-red-500 text-sm mt-1">{errors.confirmpassword}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 text-white py-2 rounded w-full hover:bg-blue-500 transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
  );
}

export default SignupForm;
