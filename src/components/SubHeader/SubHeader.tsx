import React from 'react'
import styles from './SubHeader.module.css'



const SubHeader = (props: any) => {
    return (
        <div className={styles.subheader}>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    );
};



export default SubHeader;
