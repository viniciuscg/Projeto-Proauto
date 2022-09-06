import mysql from 'mysql'
import { dbconfig } from '../config/db.config.js'
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.DB_CONNECTION)

export const connection = mysql.createConnection(String(process.env.DB_CONNECTION))