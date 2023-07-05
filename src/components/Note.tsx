import React, {FC} from 'react';
import styles from '../styles/note.module.scss';

interface NoteProps {
    title: string;
    description: string;
    onActiveNote: () => void
}

export const Note: FC<NoteProps> = ({title, description, onActiveNote}) => {
    return (
        <div onClick={onActiveNote} className={styles.note_container}>
            <div className={styles.note}>
                <p>{title}</p>
                <div className={styles.note_details}>
                    <span>{new Date().toLocaleString()}</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};
