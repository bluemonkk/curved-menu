'use client';
import styles from './style.module.scss'
import { useState } from 'react';
import Project from './project/project';
import Modal from './modal/modal';

const projects = [
  {
    title: "Vake Plaza",
    src: "fm.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "gl.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "pfp.jpg",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "window.png",
    color: "#706D63"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Our Work.</h1>
      </div>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}