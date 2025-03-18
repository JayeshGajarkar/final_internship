import { ConnectionPool,config as sqlConfig } from 'mssql';
const config: sqlConfig = {
    user: 'j2',
    password: '123456',
    server: 'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port: 1982,
    database: 'JIBE_Main_Training',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export const poolPromise = new ConnectionPool(config).connect().then(pool => {
    console.log("Connected to SQL server");
    return pool;
}).catch(err => {
    console.log("Connection failed", err);
});

