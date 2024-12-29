
import db from '../db/db';
import { generateHashedPassword } from '../utils/passwordUtils';

const User = db.users;

export const getAll = async () => {
    return await User.findAll();
};

export const getById = async (id: string) => {
    return await User.findByPk(id);
};

export const create = async (data: any) => {
    const password = await generateHashedPassword(data.password);
    data.password = password;
    const user = await User.create(data);
    delete user.dataValues.password;
    return user.dataValues;
};

export const update = async (id: string, data: any) => {
    const [updated] = await User.update(data, { where: { id } });
    return updated;
};

export const deleteOne = async (id: string) => {
    return await User.destroy({ where: { id } });
};
