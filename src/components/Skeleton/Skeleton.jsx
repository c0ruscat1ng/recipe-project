import React from 'react';

import styles from './Skeleton.module.scss'

const Skeleton = () => {
    return (
        <div className={styles.skeleton}>
            <p className={styles.skeleton__img}></p>
            <p className={styles.skeleton__article}>Loading...</p>
            <p className={styles.skeleton__desc}></p>
            <a className={styles.skeleton__btn}>Loading...</a>
        </div>
    );
};

export default Skeleton;