import React, {useState} from 'react';
import styles from '../styles/mainWidget.module.scss';
import {Header} from './Header';
import {NotesList} from './NotesList';
import {WorkSpace} from './WorkSpace';

export interface Item {
    title: string;
    description: string;
}

export const MainWidget = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [activeItem, setActiveItem] = useState<Item | null>(null);

    const handleCreateItem = (newTitle: string, newDescription: string) => {
        const newItem = {title: newTitle, description: newDescription};
        setItems([...items, newItem]);
        setActiveItem(newItem);
    };
    const handleSaveItem = (newTitle: string, newDescription: string) => {
        const updatedItem = {title: newTitle, description: newDescription};
        setItems(items.map((item) => {
            if (item !== activeItem) {
                return item
            } else {
                return updatedItem
            }
        }))
        setActiveItem(updatedItem)
    };

    return (
        <div className={styles.global}>
            <Header onCreateItem={handleCreateItem}/>
            <div className={styles.notes_wrapper}>
                <NotesList onActiveNote={(note) => setActiveItem(note)} notes={items}/>
                {
                    activeItem
                        ?
                        <WorkSpace
                            onSaveItem={handleSaveItem}
                            title={activeItem.title}
                            description={activeItem.description}/>
                        : ""
                }

            </div>
        </div>
    );
};
