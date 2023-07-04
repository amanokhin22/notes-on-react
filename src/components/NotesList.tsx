import styles from "../styles/notesList.module.scss";
import {Note} from "./Note";

export const NotesList = () => {
    return (
        <div className={styles.list_container}>
            <Note/>
        </div>
    )
}