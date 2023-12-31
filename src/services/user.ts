import http from "../http-common";
import { AxiosResponse } from "axios";
import { setAuthTokenToAxios, setAuthTokenToCookie } from "../hooks/auth";

interface User {
  username: string;
  email: string;
  password: string;
  googleId?: string;
  resetToken?: string;
  resetTokenExpiration?: Date;
  createdAt: Date;
  followedCommunities: string[];
}

interface Token {
  token: string;
}

class UserDataService {
  register(email: string, password: string): Promise<AxiosResponse<Token>> {
    return http
      .post("/user/register", { email: email, password: password })
      .then((response: AxiosResponse<Token>) => {
        const { token } = response.data;
        setAuthTokenToCookie("token", token, 365);
        setAuthTokenToAxios(token);
        return response;
      });
  }

  login(email: string, password: string): Promise<AxiosResponse<Token>> {
    return http
      .post("/user/login", { email: email, password: password })
      .then((response: AxiosResponse<Token>) => {
        const { token } = response.data;
        setAuthTokenToCookie("token", token, 365);
        setAuthTokenToAxios(token);
        return response;
      });
  }

  getUsernameRecommendation(): Promise<AxiosResponse<string[]>> {
    return http.get("/user/username");
  }

  setNewUsername(newUsername: string): Promise<AxiosResponse<Token>> {
    return http
      .post("/user/set-username", { username: newUsername })
      .then((response: AxiosResponse<Token>) => {
        const { token } = response.data;
        setAuthTokenToCookie("token", token, 365);
        setAuthTokenToAxios(token);
        return response;
      });
  }

  getUserDetails(username: string): Promise<AxiosResponse<User>> {
    return http.get(`/user/${username}`);
  }
}

export default new UserDataService();
