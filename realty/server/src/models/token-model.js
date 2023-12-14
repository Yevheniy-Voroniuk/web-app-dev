import {DataTypes, sequelize} from '../database/database.config.js';

const TokenModel = sequelize.define(
    'Token',
    {
        userId: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        refreshToken: {
            type: DataTypes.TEXT(),
            allowNull: false,
        },
    },
    {
        tableName: 'tokens',
        timestamps: false,
    },
);

export default TokenModel;