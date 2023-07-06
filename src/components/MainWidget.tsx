import React, {useState} from 'react';
import styles from '../styles/mainWidget.module.scss';
import {Header} from './Header';
import {NotesList} from './NotesList';
import {WorkSpace} from './WorkSpace';

export interface Item {
    title: string;
    description: string;
    date: Date;
}

export const MainWidget = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [activeItem, setActiveItem] = useState<Item | null>(null);

    const handleCreateItem = (newTitle: string, newDescription: string) => {
        const newItem: Item = {
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        setItems([...items, newItem]);
        setActiveItem(newItem);
    };
    const handleSaveItem = (newTitle: string, newDescription: string) => {
        const updatedItem: Item = {
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        setItems(items.map((item) => (item === activeItem ? updatedItem : item)));
        setActiveItem(updatedItem);
    };

    const handleRemoveItem = () => {
        if (activeItem && window.confirm('Are you sure you want to delete the note?')) {
            setItems(items.filter((item) => item !== activeItem));
            setActiveItem(null);
        }
    };

    return (
        <div className={styles.global}>
            <Header onCreateItem={handleCreateItem} onRemoveItem={handleRemoveItem} activeItem={activeItem}/>
            <div className={styles.notes_wrapper}>
                <NotesList
                    notes={items}
                    onActiveNote={setActiveItem}
                    activeNote={activeItem}
                />
                {activeItem && (
                    <WorkSpace
                        onSaveItem={handleSaveItem}
                        title={activeItem.title}
                        description={activeItem.description}
                    />
                )}
            </div>
        </div>
    );
};
