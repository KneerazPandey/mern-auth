import mongoose from "mongoose";

import Setting from "../conf/settings";


export default class Database {

    static async connect() {
        try {
            await mongoose.connect(Setting.DB_URL);
            console.log('Connected successfully to database');
        }catch(error) {
            throw Error('Unable to connect with mongooseDB.');
        }
    }

}