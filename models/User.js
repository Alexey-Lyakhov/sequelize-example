module.exports = function(sequelize, DataTypes) {

    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    });

    return User
}
