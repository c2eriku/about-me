import createApiClient from './apiClient';

const githubApiClient = createApiClient('https://api.github.com');

export const getGithubRepos = async (username: string) => {
  try {
    const response = await githubApiClient.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};

export async function getUsersAvantar() {
  try {
    const response = await githubApiClient.get(`/users/c2eriku`);
    return response.data.avatar_url;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}

export async function getProjectDescription(projectName: string) {
  try {
    const response = await githubApiClient.get(`/repos/c2eriku/${projectName}`);
    return response.data.description;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}
