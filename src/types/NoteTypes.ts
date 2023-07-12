export interface NoteTypes {
    id: number;
    title: string;
    description: string;
    date: Date
}

export interface CreateItem {
    title: string;
    description: string;
    date: Date;
}

export interface NotesListProps {
    notes: NoteTypes[];
    onActiveNote: (note: NoteTypes) => void;
    activeNote: NoteTypes | null;
}

export interface NoteProps {
    title: string;
    description: string;
    date?: Date;
    active: boolean;
    onActiveNote: () => void
}

export interface HeaderProps {
    onCreateItem: (newTitle: string, newDescription: string) => void;
    onRemoveItem: () => void;
    activeItem: NoteTypes | null;
    onEditItem: () => void;
    onSearch: (term: string) => void;
    onClearSearch: () => void;
}

export interface ViewSpaceProps {
    title: string;
    description: string;
    date?: Date;
}

export interface WorkSpaceProps {
    onSaveItem: (title: string, description: string) => void;
    title: string;
    description: string;
}

export interface SearchType {
    onSearch: (searchTerm: string) => void;
    onClearSearch: () => void;
}

