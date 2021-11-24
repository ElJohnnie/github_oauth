import { Router } from 'express';
import { AuthenticateuserController } from './controllers/AuthenticateUserController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middlware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateuserController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router };
