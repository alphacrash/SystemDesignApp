import initSqlJs from 'sql.js';

export async function initDatabase() {
    const SQL = await initSqlJs({
        locateFile: file => `/sql-wasm.wasm`
    });
    const db = new SQL.Database();
    return db;
}