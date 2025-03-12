'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '/public/portfolio/fm.png'
import Picture2 from '/public/portfolio/gl.png'    
import Picture3 from '/public/portfolio/window.png'
import Lenis from '@studio-freight/lenis'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss'

export default function Home() {
  const container = useRef();
  const stickyElement = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.fullScreenHeight}/>
      <div ref={container} className={styles.container}>
        <div ref={stickyElement}>
          <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress} phrase={"Web Development"}/>
          <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress} phrase={"Branding and design"}/>
          <Slide src={Picture3} direction={'left'}  left={"-75%"} progress={scrollYProgress} phrase={"SEO and marketing"}/>
          <Slide src={Picture3} direction={'left'}  left={"-75%"} progress={scrollYProgress} phrase={"App development"}/>
        </div>
      </div>
      <div className={styles.fullScreenHeight} />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className={styles.slide}>
      <Phrase src={props.src} phrase={props.phrase}/>   
      <Phrase src={props.src} phrase={props.phrase}/>
      <Phrase src={props.src} phrase={props.phrase}/>
    </motion.div>
  )
}

const Phrase = ({src, phrase}) => {

  return (
    <div className={styles.phrase}>
      <p>{phrase}</p>
      <span>
        <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
      </span>
    </div>
  )
}