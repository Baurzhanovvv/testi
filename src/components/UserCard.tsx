import React from "react";
import { User } from "../types/User";

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={user.avatar ?? "https://via.placehodlder.com/400"}
        alt={`${user.first_name} ${user.last_name}`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-lg font-bold text-center mt-2">
        {user.first_name} {user.last_name}
      </h2>
      <p className="text-center text-gray-500">{user.email}</p>
    </div>
  );
};

export default UserCard;
