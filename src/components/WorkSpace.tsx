import React, {FC, useEffect, useState} from 'react';
import styles from '../styles/workSpace.module.scss';
import {WorkSpaceProps} from "../types/NoteTypes";

export const WorkSpace: FC<WorkSpaceProps> = ({onSaveItem, title, description}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState('');
    const handleSaveButtonClick = () => {
        onSaveItem(newTitle, newDescription);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'
            ];
            const month = monthNames[now.getMonth()];
            const day = now.getDate();
            const year = now.getFullYear();
            const time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

            const formattedDateTime = `${month} ${day}, ${year} - ${time}`;
            setCurrentDateTime(formattedDateTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setNewTitle(title);
        setNewDescription(description);
    }, [title, description])

    return (
        <div className={styles.container_work_space}>
            <span>{currentDateTime}</span>

            <div className={styles.input_wrapper}>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <button className={styles.btn_save} onClick={handleSaveButtonClick}>Save</button>
            </div>
        </div>
    );
};
