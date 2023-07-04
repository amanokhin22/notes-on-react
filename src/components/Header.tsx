import styles from "../styles/header.module.scss";

import plus from "../assets/img/plus.svg";
import trash from "../assets/img/trash.svg";
import edit from "../assets/img/edit.png";
import {Search} from "./Search";
export const Header = () => {

    return (
        <div className={styles.header_main}>
            <div className={styles.header_container}>
                <div className={styles.left_buttons}>
                    <button className={styles.upper_btn}>
                        <span>
                            <img src={plus} alt="plus"/>
                        </span>
                    </button>
                    <button className={styles.upper_btn}>
                        <span>
                            <img src={trash} alt="trash"/>
                        </span>
                    </button>
                    <button className={styles.upper_btn}>
                        <span>
                            <img width="25px" height="25px" src={edit} alt="edit button"/>
                        </span>
                    </button>
                </div>
                <Search/>
            </div>
        </div>
    )
}
