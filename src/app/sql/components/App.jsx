"use client";
import { useEffect, useState } from "react";
import { initDatabase } from "../lib/sql";

export default function App() {
    const [result, setResult] = useState(null);

    useEffect(() => {
        async function runSQL() {
            const db = await initDatabase();
            db.run("CREATE TABLE test (col1, col2);");
            db.run("INSERT INTO test VALUES (?, ?), (?, ?);", [1, 'foo', 2, 'bar']);
            const res = db.exec("SELECT * FROM test;");
            setResult(JSON.stringify(res));
        }

        runSQL();
    }, []);

    return (
        <div>
            <h1>Hello World!</h1>
            <pre>{result}</pre>
        </div>
    );
}