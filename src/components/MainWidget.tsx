import React, {useState} from 'react';
import styles from '../styles/mainWidget.module.scss';
import {Header} from './Header';
import {NotesList} from './NotesList';
import {WorkSpace} from './WorkSpace';
import {ViewSpace} from "./ViewSpace";

export interface Item {
    title: string;
    description: string;
    date: Date;
}

export const MainWidget = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [activeItem, setActiveItem] = useState<Item | null>(null);
    const [editMod, setEditMod] = useState<boolean>(false);

    const handleCreateItem = (newTitle: string, newDescription: string) => {
        const newItem: Item = {
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        setItems([...items, newItem]);
        setActiveItem(newItem);
        setEditMod(true);

    };
    const handleSetActiveItem = (note: Item) => {
        setActiveItem(note);
        setEditMod(false);
    }
    const handleSaveItem = (newTitle: string, newDescription: string) => {
        const updatedItem: Item = {
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        setItems(items.map((item) => (item === activeItem ? updatedItem : item)));
        setActiveItem(updatedItem);
        setEditMod(false);
    };

    const handleRemoveItem = () => {
        if (activeItem && window.confirm('Are you sure you want to delete the note?')) {
            setItems(items.filter((item) => item !== activeItem));
            setActiveItem(null);
        }
    };

    const handleEditItem = () => {
        setEditMod(true);
    };

    return (
        <div className={styles.global}>
            <Header
                onCreateItem={handleCreateItem}
                onRemoveItem={handleRemoveItem}
                activeItem={activeItem}
                onEditItem={handleEditItem}
            />
            <div className={styles.notes_wrapper}>
                <NotesList
                    notes={items}
                    onActiveNote={handleSetActiveItem}
                    activeNote={activeItem}
                />
                {activeItem && (
                    editMod
                        ? <WorkSpace
                            onSaveItem={handleSaveItem}
                            title={activeItem.title}
                            description={activeItem.description}
                        />
                        : <ViewSpace title={activeItem.title} description={activeItem.description}
                                     date={activeItem.date}/>
                )}
            </div>
        </div>
    );
};
