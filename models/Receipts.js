const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Receipts extends Model {}

Receipts.init(
    {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },

    //    user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //         model: 'User',
    //         key: 'id',
    //     },
    //    },
       
       rest_name: {
           type: DataTypes.STRING,
           allowNull: false,
       },

       og_amt: {
           type: DataTypes.REAL,
           allowNull: false
       },

       tip_choice_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'TipChoices',
            key: 'id',
        },
       },

       tip_amt: {
           type: DataTypes.REAL,
           allowNull: false
       },

       new_amt: {
           type: DataTypes.REAL,
           allowNull: false
       }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Receipts',
    }
)

module.exports = Receipts;