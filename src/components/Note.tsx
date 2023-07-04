import styles from "../styles/note.module.scss";
export const Note = () => {
    return (
        <div className={styles.note_container}>
            <div className={styles.note}> <p>Note</p>
                <div className={styles.note_details}>
                    <span>time</span>
                    <p>
                        information
                    </p>
                </div>
            </div>
        </div>
    )
}