import {DataTypes, sequelize} from '../database/database.config.js';
import DealModel from "./deal-model.js";

const ServiceModel = sequelize.define(
    'Service',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'services',
        timestamps: false,
    },
);

ServiceModel.hasMany(DealModel, {
    foreignKey: 'serviceId',
    onDelete: 'CASCADE',
    hooks: true,
});

export default ServiceModel;