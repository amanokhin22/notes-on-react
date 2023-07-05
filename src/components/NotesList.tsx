import React, {FC} from 'react';
import styles from '../styles/notesList.module.scss';
import {Note} from './Note';

interface NotesListProps {
    notes: {
        title: string,
        description: string
    }[];
    onActiveNote: (note: {
        title: string,
        description: string
    }) => void
}

export const NotesList: FC<NotesListProps> = ({notes, onActiveNote}) => {

    return (
        <div className={styles.list_container}>
            {notes.map((note, index) => (
                <Note onActiveNote={() => onActiveNote(note)} key={index} title={note.title}
                      description={note.description}/>
            ))}
        </div>
    );
};
