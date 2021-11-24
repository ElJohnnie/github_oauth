import { Request, Response } from 'express';
import { AuthenticateuserService } from '../services/AuthenticateUserService';

class AuthenticateuserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthenticateuserService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (err: any) {
      return response.json(err.message);
    }
  }
}

export { AuthenticateuserController };
