
import { Router } from 'express';
import { getAllUsers, getUser, createUser, updateUser, deleteUser} from '../../controllers/user.controller';

const router = Router();

router.get('/get-all', getAllUsers);
router.get('/get/:id', getUser);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;

