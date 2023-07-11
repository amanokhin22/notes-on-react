import React, {useEffect, useState} from 'react';
import styles from '../styles/mainWidget.module.scss';
import {Header} from './Header';
import {NotesList} from './NotesList';
import {WorkSpace} from './WorkSpace';
import {ViewSpace} from "./ViewSpace";
import {apiNote} from "../api/apiNotes";
import {CreateItem, NoteTypes} from "../types/NoteTypes";

export const MainWidget = () => {
    const [items, setItems] = useState<NoteTypes[]>([]);
    const [activeItem, setActiveItem] = useState<NoteTypes | null>(null);
    const [editMod, setEditMod] = useState<boolean>(false);

    const handleCreateItem = async (newTitle: string, newDescription: string) => {
        const newItem: CreateItem = {
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        try {
            const createdItem = await apiNote.create(newItem);
            setItems([...items, createdItem]);
            setActiveItem(createdItem);
            setEditMod(true);
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };
    const handleSetActiveItem = (note: NoteTypes) => {
        setActiveItem(note);
        setEditMod(false);
    }
    const handleSaveItem = async (newTitle: string, newDescription: string) => {
        let updatedItem: NoteTypes = {
            id: activeItem?.id as number,
            title: newTitle,
            description: newDescription,
            date: new Date(),
        };
        updatedItem = await apiNote.put(updatedItem);
        setItems(items.map((item) => (item === activeItem ? updatedItem : item)));
        setActiveItem(updatedItem);
        setEditMod(false);
    };

    const handleRemoveItem = async () => {
        if (activeItem && window.confirm('Are you sure you want to delete the note?')) {
            await apiNote.delete(activeItem)
            setItems(items.filter((item) => item !== activeItem));
            setActiveItem(null);
        }
    };

    const handleEditItem = () => {
        setEditMod(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiNote.getAll();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

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
