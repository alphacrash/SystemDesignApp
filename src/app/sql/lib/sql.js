import { SQL_WASM } from '@/lib/constants';
import initSqlJs from 'sql.js';

export async function initDatabase() {
    const SQL = await initSqlJs({
        locateFile: file => SQL_WASM
    });
    const db = new SQL.Database();
    return db;
}