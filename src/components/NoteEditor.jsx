"use client";

import { Input } from "./Input";
import { NoteCard } from "./NoteCard";


export const NoteEditor = ({ notedData }) => {

    return (
        <div className="space-y-8">
            <Input />
            <div className="space-y-4">
                {notedData.map(({ id, content }) => {
                    return <NoteCard key={id} id={id} content={content} />;
                })}
            </div>
        </div>

    );
};