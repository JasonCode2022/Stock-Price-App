import React from 'react';
import styles from './Select.module.css';

const Select = ({ options, value, onChange }: any) => {
    // console.log(value  );

    return (
        <select
            className={styles.select}
            value={value}
            onChange={onChange}>

            {options.map((option: any) => (
                <option
                    key={option.value}
                    value={option.value}>
                    {option.displayValue}

                </option>
            ))}
        </select>
    );
};



export default Select;
