import React, { useEffect } from 'react'
import styles from './preloader.module.css'

export const Preloader = () => {

    function showAnimation() {
        const bar = document.querySelectorAll(".bar");
        for (let i = 0; i < bar.length; i++) {
            bar.forEach((item, j) => {
                item.style.animationDuration = `${Math.random() * (0.6 - 0.2) + 0.2}s`;
            });
        }
    }

    useEffect(() => {
        showAnimation()
    }, [])


    return (
        <div className={styles.prelaoder_wrapper}>
            <div className={styles.sound_wave}>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
                <div className={styles.bar + ' bar'}></div>
            </div>
            {/* <div class={styles.boxContainer}>
                <div class={styles.box + ' ' + styles.box1}></div>
                <div class={styles.box + ' ' + styles.box2}></div>
                <div class={styles.box + ' ' + styles.box3}></div>
                <div class={styles.box + ' ' + styles.box4}></div>
                <div class={styles.box + ' ' + styles.box5}></div>
            </div> */}
        </div>
    )
}
