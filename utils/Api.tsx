import axios from 'axios';

const API_BASE_URL = 'https://cacaolook.com/api';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
};

export const getProjects = async (userId: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/project`, {
      user_id: userId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch projects');
  }
};

// export const downloadProject = async (projectId: number) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/detail_project`, {
//       params: {
//         project_id: projectId,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to download project');
//   }
// };