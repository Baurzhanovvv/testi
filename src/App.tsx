import React from 'react';
import UserList from './components/UserList';


const App = () => {
    return (
        <div>
            <header className="bg-black text-white">
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold">Test Task by Amir Baurzhanov</div>
                        <nav className="flex space-x-4">
                            <a href="https://github.com/Baurzhanovvv" className="hover:text-gray-300">My Github</a>
                            <a href="https://www.linkedin.com/in/amir-baurzhanov-a8a39a24b/" className="hover:text-gray-300">My LinkedIn</a>
                            <a href="https://t.me/buttmanfff" className="hover:text-gray-300">My Telegram</a>
                        </nav>
                    </div>
                </div>
            </header>
            <UserList />
        </div>
    );
};

export default App;
