import axios, { type AxiosResponse } from 'axios';

export type ApiInstance = {
  apiGet: (path: string, params?: any) => Promise<AxiosResponse>;
  apiPost: (path: string, data: any) => Promise<AxiosResponse>;
  apiPut: (path: string, data: any) => Promise<AxiosResponse>;
  apiDelete: (path: string) => Promise<AxiosResponse>;
};

const axiosInstance = () => {
  const config = useRuntimeConfig();

  return axios.create({
    baseURL: config.public.baseApiUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const apiGet = async (path: string, params?: any): Promise<AxiosResponse> => {
  return axiosInstance().get(path, { params });
};

export const apiPost = async (path: string, data: any): Promise<AxiosResponse> => {
  return axiosInstance().post(path, data);
};

export const apiPut = async (path: string, data: any): Promise<AxiosResponse> => {
  return axiosInstance().put(path, data);
};

export const apiDelete = async (path: string): Promise<AxiosResponse> => {
  return axiosInstance().delete(path);
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: {
        apiGet,
        apiPost,
        apiPut,
        apiDelete,
      } as ApiInstance,
    },
  };
});
