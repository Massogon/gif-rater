const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GifPair extends Model { }

GifPair.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gif_id_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gif_id_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gif_pair',
  }
);

module.exports = GifPair;