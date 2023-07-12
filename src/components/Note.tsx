import React, {FC} from 'react';
import styles from '../styles/note.module.scss';
import {NoteProps} from "../types/NoteTypes";

export const Note: FC<NoteProps> = ({title, description, date, active, onActiveNote}) => {
    const formattedDate = date ? date.toLocaleString([], {hour: '2-digit', minute: '2-digit'}) : '';
    const noteClassName = active ? `${styles.note} ${styles.active}` : styles.note;

    return (
        <div onClick={onActiveNote} className={noteClassName}>
            <p>{title}</p>
            <div className={styles.note_details}>
                {formattedDate && <span>{formattedDate}</span>}
                <p>{description}</p>
            </div>
        </div>
    );
};
