// src/pages/ProfilePage.js

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
  // Placeholder user data. In a real app, this would come from a user context or API.
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "Member since 2023",
    location: "New York, USA"
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <FaUserCircle style={{ fontSize: '100px', color: '#ccc' }} />
        <h1>{user.name}</h1>
        <p style={{ color: '#666' }}>{user.email}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h3>Account Information</h3>
          <p><strong>Joined:</strong> {user.joined}</p>
          <p><strong>Location:</strong> {user.location}</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h3>Settings</h3>
          <p>Manage your password and other security settings.</p>
        </div>
      </div>
      
      <div style={{ marginTop: '40px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <h3>Recent Orders</h3>
        <p>You have no recent orders.</p>
      </div>
    </div>
  );
};

export default ProfilePage;