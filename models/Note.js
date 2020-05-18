'use strict';

module.exports = function(sequelize, DataTypes) {

    const Note = sequelize.define("note", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT
        },
        userid: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true
    });

    /*   associate declared stright to utils/database.js
    Note.associate = (models) => {
        Note.belongsTo(models.User, { as: 'note-user', foreignKey: 'userid' });
    };*/

    return Note;
}