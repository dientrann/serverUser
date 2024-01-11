import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    authPlugin: process.env.MySQL_AUTH
});

export const connectDB = () =>{
    try{
        connection.connect();
        console.log("Connect DB Success");
    }catch(err){
        console.log("Connect DB Fail");
    }
}
