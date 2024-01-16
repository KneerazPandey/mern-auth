export default class Setting {

    static get PORT(): number {
        if (process.env.PORT) {
            return parseInt(process.env.PORT);
        }
        throw Error('PORT is not definded in evnironment file');
    }

    static get SECRET_KEY() : string {
        if (process.env.SECRET_KEY) {
            return process.env.SECRET_KEY;
        }
        throw Error('SECRET_KEY is not defined in environment file');
    }

    static get DB_URL() : string {
        if (process.env.DB_URL) {
            return process.env.DB_URL;
        }
        throw Error('DB_URL is not defined in environment file');
    }

    static get DEBUG() : boolean {
        if (process.env.DEBUG) {
            if (process.env.DEBUG === 'true') {
                return true;
            }
            return false;
        }
        throw Error('DEBUG is not defined in environment file');
    }

}