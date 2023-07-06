import React, {FC} from 'react';
import styles from '../styles/workSpace.module.scss';

interface WorkSpaceProps {
    title: string;
    description: string;
    date: Date;
}

export const ViewSpace: FC<WorkSpaceProps> = ({ title, description, date}) => {

    return (
        <div className={styles.container_work_space}>
            <span>{date?.toLocaleString()}</span>

            <div className={styles.input_wrapper}>
                <h1>{title}</h1>
                <div>{description}</div>
            </div>
        </div>
    );
};
