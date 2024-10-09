import axios, { AxiosResponse } from 'axios';

export const onRequest = (url: string) => {
  async function getPosts() {
    try {
      const response: AxiosResponse = await axios.get(url);
      return await response.data;
    } catch (error: unknown) {
      console.log(error);
    }
  }
  return getPosts();
}