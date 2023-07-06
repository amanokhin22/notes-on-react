import React, {FC} from 'react';
import styles from '../styles/note.module.scss';

interface NoteProps {
    title: string;
    description: string;
    date: Date;
    active: boolean;
    onActiveNote: () => void
}

export const Note: FC<NoteProps> = ({title, description, date, active, onActiveNote}) => {
    const formattedDate = date.toLocaleString();
    const handleClick = () => {
        onActiveNote();
    };
    const noteClassName = active ? `${styles.note} ${styles.active}` : styles.note;

    return (
        <div onClick={handleClick} className={noteClassName}>
            <p>{title}</p>
            <div className={styles.note_details}>
                <span>{formattedDate}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};
