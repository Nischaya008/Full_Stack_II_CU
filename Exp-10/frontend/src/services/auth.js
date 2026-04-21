import { API_URL } from './api.js';

export const signup = async (userData) => {
  const response = await fetch(`${API_URL}/api/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  if (data.token) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

export const signin = async (credentials) => {
  console.log('Attempting signin with:', {
    emailOrUsername: credentials.emailOrUsername,
    hasPassword: !!credentials.password
  });

  const response = await fetch(`${API_URL}/api/users/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Signin error:', data);
    throw data;
  }

  if (data.token) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};
