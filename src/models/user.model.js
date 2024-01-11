import {connectDB, connection} from '../database/connect.js'

connectDB();


export default {
    findAll: async() => {
        const sql = `SELECT * FROM user`;

        const result = new Promise((resolve, reject) =>{
            connection.query(sql, (err, result) =>{
                if(err) reject(err);
                resolve(result);
            })
        })

        return result;
    }
}