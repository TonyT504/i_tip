const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TipChoices extends Model {}

TipChoices.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },

        tip_percentage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user', 
    }
)

module.exports = TipChoices;