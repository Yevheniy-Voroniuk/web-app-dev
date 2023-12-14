import {DataTypes, sequelize} from '../database/database.config.js';

const DealModel = sequelize.define(
    'Deal',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        realtyId: {
            type: DataTypes.INTEGER,
        },
        serviceId: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        tableName: 'deals',
        timestamps: false,
    }
);

export default DealModel;