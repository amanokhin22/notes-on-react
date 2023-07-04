import styles from "../styles/mainWidget.module.scss";
import {Header} from "./Header";
import {NotesList} from "./NotesList";
import {WorkSpace} from "./WorkSpace";
export const MainWidget = () => {
    return (
        <div className={styles.global}>
            <div className={styles.global}>
                <Header/>
                <div className={styles.notes_wrapper}>
                    <NotesList/>
                    <WorkSpace/>
                </div>


            </div>
        </div>
    )
}