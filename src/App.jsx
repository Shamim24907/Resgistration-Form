import { useEffect, useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(saved);
  }, []);

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

  const deleteLast = () => {
    const updated = users.slice(0, -1);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  const clearAll = () => {
    localStorage.removeItem("users");
    setUsers([]);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#5067aa]">User Registration</h1>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 border border-[#324f7b]">
        <RegistrationForm onSave={saveUser} />

        <div className="flex justify-between mt-4">
          <button
            onClick={deleteLast}
            className="bg-[#5067aa] hover:bg-[#86a6de] text-white px-4 py-2 rounded-lg transition"
          >
            Delete Last
          </button>

          <button
            onClick={clearAll}
            className="bg-[#324f7b] hover:bg-[#5067aa] text-white px-4 py-2 rounded-lg transition"
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
