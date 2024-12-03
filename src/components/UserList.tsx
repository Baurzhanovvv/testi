import React, { useState, useEffect } from "react";
import axios from "axios";

import { User, ApiResponse } from "../types/User";
import UserCard from "./UserCard";

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchUsers = async (page: number) => {
        setIsLoading(true);
        try {
            const response = await axios.get<ApiResponse>(
                `https://reqres.in/api/users?page=${page}&per_page=6`
            );
            setUsers(response.data.data);
            setTotalPages(response.data.total_pages);
            setError("");
        } catch (err) {
            setError("Failed to fetch users.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const filteredUsers = users.filter((user) =>
        `${user.first_name} ${user.last_name}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Поиск..."
                className="p-2 border border-gray-300 rounded mb-4 w-full"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {isLoading && <p>Загрузка...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Предыдущая
                </button>
                <span>
                    Страница {currentPage} из {totalPages}
                </span>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Следующяя
                </button>
            </div>
        </div>
    );
};

export default UserList;
