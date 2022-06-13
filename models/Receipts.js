const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Receipts extends Model {}

Receipts.init(
    {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },
       
       rest_name: {
           type: DataTypes.STRING,
           allowNull: false,
       },

       og_amt: {
           type: DataTypes.INTEGER,
           allowNull: false
       },

       tip_choice_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'TipChoice',
            key: 'id',
        },
       },

       tip_amt: {
           type: DataTypes.INTEGER,
           allowNull: false
       },

       new_amt: {
           type: DataTypes.INTEGER,
           allowNull: false
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

module.exports = Receipts;