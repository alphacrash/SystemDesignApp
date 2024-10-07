"use client";
import seed from "@/lib/data/seeds/pixar";
import { updateDb } from "@/lib/features/appSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initDatabase } from "../lib/sql";

export default function App() {
    const db = useSelector((state) => state.app.db);
    const dispatch = useDispatch()

    useEffect(() => {
        async function runSQL() {
            const db = await initDatabase();
            dispatch(updateDb(db));
        }

        runSQL();
    }, []);

    useEffect(() => {
        if (db && seed) {
            seed.forEach((sql) => {
                db.exec(sql);
            });
            const res = db.exec("SELECT * FROM pixar;");
            console.log(JSON.stringify(res));
        }
    }, [db, seed])

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}