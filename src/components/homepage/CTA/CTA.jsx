'use client';
import styles from './styles.module.scss'
import { useRef } from 'react';
import TextDisperse from './disperse/disperse';

export default function Home() {

  const background = useRef(null);

  const setBackground = (isActive) => {
    background.current.style.opacity = isActive ? 0.8 : 0
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <div className='introLine'>
          <p>blue monk</p>
          <p>.</p>
        </div>

        <div className='introLine'>
          <p>Design</p>
          <p>&</p>
        </div>

        <div className='introLine'>
          <p>Development</p>
          <p>.</p>
        </div>

        <TextDisperse setBackground={setBackground}>
          <p>+447533063596</p>
        </TextDisperse>

        <TextDisperse setBackground={setBackground}>
          <p>→Email</p>
        </TextDisperse>

        <TextDisperse setBackground={setBackground}>
          <p>→Insta</p>
        </TextDisperse>

      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  )
}
