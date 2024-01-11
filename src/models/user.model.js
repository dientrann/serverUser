import { connectDB, connection } from '../database/connect.js'

connectDB();


export default {
    findAll: async () => {
        const sql = `SELECT * FROM user`;

        const result = new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        })

        return result;
    },
    create: async (user) => {
        console.log("user", user);
        let { userName, pass, avatar, email } = user;

        // const sql = `INSERT INTO user (userName, pass, avatar, email) VALUES (${userName}, ${pass}, ${avatar}, ${email})`;

        const sql = `INSERT INTO user (userName, pass, avatar, email) VALUES (?, ?, ?, ?)`;

        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [userName, pass, avatar, email], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });

        return result;

    },
    findById: async (id) => {
        const sql = `SELECT * FROM user WHERE id = ${id}`;

        const result = new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        })
    },
    update: async (id, userUpdate) => {
        let dataSql = "";
        for(let key in userUpdate){
            dataSql += `${key} = '${userUpdate[key]}',`;
        }
        const sql = `UPDATE user SET ${dataSql.slice(0,-1)}  WHERE id = ?`;
        const result = new Promise((resolve, reject) => {
            connection.query(sql, [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        })
        return result;
    },
    delete : async (id) => {
        const sql = `DELETE FROM user WHERE id = ${id}`;
        const result = new Promise((resolve, reject) => {
            connection.query(sql, (err, result) =>{
                if (err) reject(err);
                resolve(result);
            })
        })
        return result;
    }
}