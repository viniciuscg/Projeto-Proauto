import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.DB_CONNECTION)

export const connection = mysql.createConnection(String(process.env.DB_CONNECTION))