const { conn } = require('../config/conn');

const getUser = async () => {
    try {
        const [rows] = await conn.query('SELECT email, password FROM user;');
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }    
    } finally {
        conn.releaseConnection();
    };
};

const createUser = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO user (name, lastname, email, password) VALUES ?;', [params]);
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }    
    } finally {
        conn.releaseConnection();
    };
};

module.exports = {
    getUser,
    createUser
};
