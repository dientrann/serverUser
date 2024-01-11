import mysql from "mysql";

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userserver",
    authPlugin: 'mysql_native_password'
});

export const connectDB = () =>{
    try{
        connection.connect();
        console.log("Connect DB Success");
    }catch(err){
        console.log("Connect DB Fail");
    }
}
