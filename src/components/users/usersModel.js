'use strict'

module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('user', {
        //Primary key to this resource
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        //Document type
        document_type: {
            type: Sequelize.ENUM,
            values: ['CC', 'CE', 'PASSPORT', 'NIT' ],
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        //Document number
        document: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                not: ["[a-z]",'i'],
                notNull: true,
                notEmpty: true
            }
        },
        //Email
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'This field does not have an email format'
                }
            }
        },
        //User state
        satate: {
            type: Sequelize.ENUM,
            values: [ 'ACTIVED', 'INACTIVED', 'SUSPENDED' ],
            defaultValue: 'ACTIVED',
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        //Mobile number
        mobile: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        //Phone number
        phone: {
            type: Sequelize.STRING
        }
    })
    .sync({ force: true })

    return User;
};