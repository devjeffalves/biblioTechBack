const Sequelize = require('sequelize');
const database = require('../data_base/db');

const userProfile = database.define('user_profile', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        },
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    nick_name: {
        type: Sequelize.STRING, 
        allowNull: true
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[0-9()+\- ]+$/i // Expressão regular para validar números de telefone
        
    }}
}, {
        //configurações do modelo
        timestamps: true, // habilita createdAt e updatedAt
        hooks: {
            beforeCreate: (User, options) => {
                const now = new Date();
                const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
                User.createdAt = threeHoursLater;
                User.updatedAt = threeHoursLater;

            },
            beforeUpdate: (User, options) => {
                const now = new Date();
                const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
                User.updatedAt = threeHoursLater;

        }
    }

    });

    module.exports = userProfile;