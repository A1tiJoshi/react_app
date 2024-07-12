import axios from 'axios';

const API_BASE_URL = 'https://any-api.com/clever_com/clever_com/docs/API_Description';

const apiService = {
  getReferrals: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/referrals`);
      return response.data;
    } catch (error) {
      console.error('Error fetching referrals:', error);
      return [];
    }
  },
  getServices: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/services`);
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  },
};

export default apiService;
