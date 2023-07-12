import {NoteTypes} from "../types/NoteTypes";
import {useMemo, useState} from "react";

export const useSearch = (items: NoteTypes[] ) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    }

    const filteredItems = useMemo(() => {
        if (searchTerm) {
            const search = searchTerm.toLowerCase();
            return items.filter((item) =>
                item.title.toLowerCase().includes(search)
                || item.description.toLowerCase().includes(search)
            );
        } else {
            return items;
        }
    }, [items, searchTerm]);

    return {
        filteredItems, handleClearSearch, handleSearch
    }
};