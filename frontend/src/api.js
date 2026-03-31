const API_URL = process.env.REACT_APP_API_URL || '';

export const api = {
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/api/user/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
    return response.json();
  },
  
  signup: async (email, password) => {
    const response = await fetch(`${API_URL}/api/user/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
    return response.json();
  },
  
  // Add other API endpoints as needed
  getWorkouts: async (token) => {
    const response = await fetch(`${API_URL}/api/workouts`, {
      headers: {'Authorization': `Bearer ${token}`}
    });
    return response.json();
  }
};
