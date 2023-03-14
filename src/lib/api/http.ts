import axios, {
	type AxiosError,
	type AxiosInstance,
	type AxiosRequestConfig,
	type AxiosResponse,
} from 'axios';

import { HttpStatusCodes } from './HttpStatusCode';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

declare module 'axios' {
	interface AxiosResponse<T = any> extends Promise<T> {}
}

export const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json; charset=utf-8',
	'X-Requested-With': 'XMLHttpRequest',
};

class Http {
	private instance: AxiosInstance | null = null;

	private get http(): AxiosInstance {
		return this.instance ?? this.initHttp();
	}

	initHttp() {
		const http = axios.create({
			baseURL,
			headers,
			withCredentials: true,
		});

		http.interceptors.response.use(
			({ data }: AxiosResponse) => data,
			async (error) => this.handleError(error)
		);

		this.instance = http;
		return http;
	}

	async request<T = any, R = AxiosResponse<T>>(
		config: AxiosRequestConfig
	): Promise<R> {
		return this.http.request(config);
	}

	async get<T = any, R = AxiosResponse<T>>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.get<T, R>(url, config);
	}

	async post<T = any, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.post<T, R>(url, data, config);
	}

	async put<T = any, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.put<T, R>(url, data, config);
	}

	async delete<T = any, R = AxiosResponse<T>>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.delete<T, R>(url, config);
	}

	private async handleError(error: AxiosError) {
		switch (error.response?.status) {
			case HttpStatusCodes.INTERNAL_SERVER_ERROR: {
				break;
			}

			case HttpStatusCodes.FORBIDDEN: {
				break;
			}

			case HttpStatusCodes.UNAUTHORIZED: {
				break;
			}

			case HttpStatusCodes.TOO_MANY_REQUESTS: {
				break;
			}

			default: {
				throw new Error('Not implemented yet: default case');
			}
		}

		return Promise.reject(error);
	}
}

export const http = new Http();
