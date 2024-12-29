import { Model, DataTypes, Sequelize } from 'sequelize';

export interface UserAttributes {
    user_id: string;
    user_name: string;
    name: string;
    password: string;
    last_login?: Date | null;
}

export class User extends Model<UserAttributes> implements UserAttributes {
    public user_id!: string;
    public user_name!: string;
    public name!: string;
    public password!: string;
    public last_login!: Date | null;
}

export function UserModel(sequelize: Sequelize): typeof User {
    User.init(
        {
            user_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    name: 'unique_user_name',
                    msg: 'User name must be unique'
                }
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_login: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            tableName: 'users',
        }
    );

    return User;
}

