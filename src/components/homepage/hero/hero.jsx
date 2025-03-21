'use client';

import styles from "./style.module.scss";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMouseMount";
import { useState } from "react";


export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;
    
    return (
        <main className={styles.main}>
            <motion.div 
            className={styles.mask}
            animate={{
                WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                maskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                WebkitMaskSize: `${size}px`,
                maskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration:0.5}}
            >
                <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
                MNK.
                </p>
            </motion.div>

            <div className={styles.body}>
            <p>bluemonk.</p>
            </div>

        </main>
        )
}