import axios from 'axios';

const apiPost = async (endpoint: string, params: Record<string, unknown>) => {
  const result = await axios.post(`/api${endpoint}`, params, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
  return result.data;
};

export default apiPost;
