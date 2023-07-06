import React, {FC} from 'react';
import styles from '../styles/notesList.module.scss';
import {Note} from './Note';

interface NotesListProps {
    notes: {
        title: string,
        description: string;
        date: Date;
    }[];
    onActiveNote: (note: {
        title: string,
        description: string;
        date: Date;
    }) => void;
    activeNote: {
        title: string;
        description: string;
        date: Date;
    } | null;
}

export const NotesList: FC<NotesListProps> = ({notes, onActiveNote, activeNote}) => {

    return (
        <div className={styles.list_container}>
            {notes.map((note, index) => (
                <Note
                    onActiveNote={() => onActiveNote(note)}
                    key={index}
                    title={note.title}
                    description={note.description}
                    date={note.date}
                    active={activeNote === note}
                />
            ))}
        </div>
    );
};
