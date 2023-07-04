import styles from "../styles/workSpace.module.scss";

export const WorkSpace = () => {
    return (
        <div className={styles.container_work_space}>
            <span>time</span>
            <div className={styles.text_wrapper}>
                <p>title</p>
                <p>description</p>
            </div>
        </div>
    )
}