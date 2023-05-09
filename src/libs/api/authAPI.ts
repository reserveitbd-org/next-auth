import config from '@/config';
import { SignInParams, SignInResponse } from './@types';
import { HttpService } from './httpService';

class AuthAPI {
	constructor(private http: HttpService) {}

	signIn(data: SignInParams) {
		return this.http.post<SignInResponse>('auth/login', data);
	}
}

const httpService = new HttpService(config.apiURL);
export const authAPI = new AuthAPI(httpService);
