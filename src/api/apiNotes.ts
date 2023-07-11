import axios from 'axios';
import {CreateItem, NoteTypes} from "../types/NoteTypes";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001',
    headers: {
        "API-KEY": ""
    }
});

const mapItem = (item: NoteTypes) => {
    return {...item, date: new Date(item.date)}
}

export const apiNote = {
    async getAll() {
        const res = await axiosInstance.get<NoteTypes[]>('/notes');
        return res.data.map(item => mapItem(item));
    },
    async create(data: CreateItem) {
        const res = await axiosInstance.post<NoteTypes>('/notes', data);
        return mapItem(res.data);
    },
    async delete(note: NoteTypes) {
        await axiosInstance.delete(`/notes/${note.id}`);
    },
    async put(note: NoteTypes) {
        const res = await axiosInstance.put<NoteTypes>(`/notes/${note.id}`, note);
        return mapItem(res.data);
    },
};
