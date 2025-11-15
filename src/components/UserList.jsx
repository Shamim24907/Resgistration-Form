const UserList = ({ users }) => {
  return (
    <div className="mt-6 p-4 border rounded-xl bg-[#f8f8f8] border-[#324f7b]">
      <h2 className="text-xl font-semibold mb-3 text-[#5067aa]">Saved Users</h2>

      {users.length === 0 && (
        <p className="text-gray-500 text-center">No users found.</p>
      )}

      {users.map((u, index) => (
        <div key={index} className="p-3 border-b last:border-none rounded mb-2 bg-[#86a6de] shadow-sm text-white">
          <p><strong>Name:</strong> {u.name}</p>
          <p><strong>Email:</strong> {u.email}</p>
          <p><strong>Address:</strong> {u.address}</p>
          <p><strong>Phone:</strong> {u.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
