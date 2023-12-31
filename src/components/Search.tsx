import styles from "../styles/header.module.scss";
import {ChangeEvent, useRef, useState, FC} from "react";
import {SearchType} from "../types/NoteTypes";

export const Search: FC<SearchType> = ({onSearch, onClearSearch}) => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        setValue('');
        onClearSearch();
        inputRef.current?.focus();
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const searchItem = event.target.value;
        setValue(searchItem);
        onSearch(searchItem);
    };
    return (
        <div className={styles.upper_label}>
            <svg
                className={styles.input_icon}
                enableBackground="new 0 0 32 32"
                id="EditableLine"
                version="1.1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="14"
                    cy="14"
                    fill="none"
                    id="XML-ID_42_"
                    r="9"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
                <line
                    fill="none"
                    id="XML-ID_44_"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    x1="27"
                    x2="20.366"
                    y1="27"
                    y2="20.366"
                />
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input_search}
                placeholder='Search..'/>
            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.clearIcon}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                </svg>
            )}
        </div>
    )
}
