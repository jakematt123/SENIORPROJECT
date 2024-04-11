"use client"

import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

export const ChangePasswordForm: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Add your form submission logic here, such as validating passwords and sending a request to change the password
      if (newPassword !== confirmNewPassword) {
        alert('Passwords do not match');
        return;
      }

      if (newPassword.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
      }

      alert('Password changed successfully!');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="border rounded-lg p-4 bg-gray-100">
          <h2 className="text-3xl mb-4">Change Password</h2>
          <p className="text-lg">
            This section will allow you to change your password.
          </p>
          <div className="mt-4">
            <label htmlFor="currentPassword" className="block text-lg font-semibold mb-2">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="newPassword" className="block text-lg font-semibold mb-2">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <PasswordStrengthBar password={newPassword} />
          <div className="mt-4">
            <label htmlFor="confirmNewPassword" className="block text-lg font-semibold mb-2">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Change Password</button>
          </div>
        </div>
      </form>
    );
  };