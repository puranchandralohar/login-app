import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [user_id, setUser_id] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    country: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      gender: formData.gender,
      country: formData.country,
      password: formData.password
    };

    event.preventDefault();
    try {
      const response = await fetch('https://merd-api.merakilearn.org/user/talk_mitra/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setUser_id(data.user_id);
      } else {
        console.error('Error signing up:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };


  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="phoneNumber">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div>
        <p>
          Already have an account? <a href="/">Login Here</a>
        </p>
      </div>
      <div>
      {user_id && (
        <div>
                    Your user ID: {user_id}
                  </div>
                )}
      </div>
    </div>
  );
};

export default SignupForm;
