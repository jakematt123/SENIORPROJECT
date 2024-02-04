'use client'
import React, { useState } from 'react';

const AccountCreationPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle form submission
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-1/3 p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2 font-medium">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default AccountCreationPage;