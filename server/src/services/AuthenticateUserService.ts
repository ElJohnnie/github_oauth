import axios from 'axios';
import prismaClient from '../prisma';
import { sign } from 'jsonwebtoken';

/*
 * Receber o código code(string)
 * Recuperar o access_token do git
 * Recuperar infos do user no git
 * Verificar a existência do user no DB
 * -----sim: gera um token
 * -----não: cria um e gera um token
 * Retorna o token com as infos do user logado
 */

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
  followers_url: string;
  following_url: string;
}

class AuthenticateuserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token';
    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      });
    const response = await axios.get<IUserResponse>(
      'https://api.github.com/user',
      {
        headers: {
          Authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    const { login, id, avatar_url, name } = response.data;

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id,
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: id,
          login,
          avatar_url,
          name,
        },
      });
    }

    const secret = process.env.JWT_SECRET as string;

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      secret,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return { token, user };
  }
}

export { AuthenticateuserService };
