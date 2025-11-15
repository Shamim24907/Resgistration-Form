import { useState } from "react";

const RegistrationForm = ({ onSave }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSave(form);
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border border-[#324f7b] rounded-lg focus:ring-2 focus:ring-[#86a6de] outline-none"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border border-[#324f7b] rounded-lg focus:ring-2 focus:ring-[#86a6de] outline-none"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full p-3 border border-[#324f7b] rounded-lg focus:ring-2 focus:ring-[#86a6de] outline-none"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full p-3 border border-[#324f7b] rounded-lg focus:ring-2 focus:ring-[#86a6de] outline-none"
        required
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        className="w-full p-3 border border-[#324f7b] rounded-lg focus:ring-2 focus:ring-[#86a6de] outline-none"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-3 border border-[#324f7b] rounded-lg focus:ring-2 focus:ring-[#86a6de] outline-none"
        required
      />

      <button
        type="submit"
        className="w-full bg-[#5067aa] hover:bg-[#86a6de] text-white py-3 rounded-lg transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
