import { useEffect, useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  // Load users from localStorage on page load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(saved);
  }, []);

  // Save new user
  const saveUser = (formData) => {
    const exists = users.some(u => u.email === formData.email);
    if (exists) {
      alert("This email has already been used!");
      return;
    }

    const updated = [...users, formData];
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  // Delete last user
  const deleteLast = () => {
    const updated = users.slice(0, -1);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  // Clear all users
  const clearAll = () => {
    localStorage.removeItem("users");
    setUsers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">User Registration</h1>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
        <RegistrationForm onSave={saveUser} />

        <div className="flex justify-between mt-4">
          <button
            onClick={deleteLast}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
          >
            Delete Last
          </button>

          <button
            onClick={clearAll}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Clear All
          </button>
        </div>

        <UserList users={users} />
      </div>
    </div>
  );
};

export default App;
