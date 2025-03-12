import Image from "next/image"
import { Menu } from "lucide-react"
import styles from "./style.module.scss"

export default function Grid() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.menuButton}>
          <Menu className={styles.menuIcon} />
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.projectCard1}>
          <div className={styles.imageContainer}>
            <Image
              src="/portfolio/gl.png"
              alt="Punto Pago app with payment terminal and card"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectText}>
              <h2 className={styles.projectTitle}>Punto Pago</h2>
              <p className={styles.projectSubtitle}>– The First Super-App in Latin America</p>
            </div>

            <div className={styles.projectAction}>
              <button className={styles.exploreButton}>Explore</button>
            </div>
          </div>
        </div>

        <div className={styles.projectCard2}>
          <div className={styles.imageContainer}>
            <Image
              src="/portfolio/pfp.jpg"
              alt="Kelvin Zero app showing calendar interface with hot air balloon"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectText}>
              <h2 className={styles.projectTitle}>Kelvin Zero</h2>
              <p className={styles.projectSubtitle}>– A digital product for passwordless authentication</p>
            </div>

            <div className={styles.projectAction}>
              <div className={styles.avatar}>
                <Image
                  src="/portfolio/pfp.jpg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className={styles.avatarImage}
                />
              </div>
            </div>
            <div className={styles.projectAction}>
              <div className={styles.avatar}>
                <Image
                  src="/portfolio/pfp.jpg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className={styles.avatarImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectCard3}>
          <div className={styles.imageContainer}>
            <Image
              src="/portfolio/pfp.jpg"
              alt="Kelvin Zero app showing calendar interface with hot air balloon"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectText}>
              <h2 className={styles.projectTitle}>Kelvin Zero</h2>
              <p className={styles.projectSubtitle}>– A digital product for passwordless authentication</p>
            </div>

            <div className={styles.projectAction}>
              <div className={styles.avatar}>
                <Image
                  src="/portfolio/pfp.jpg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className={styles.avatarImage}
                />
              </div>
            </div>
            <div className={styles.projectAction}>
              <div className={styles.avatar}>
                <Image
                  src="/portfolio/pfp.jpg"
                  alt="Profile"
                  width={48}
                  height={48}
                  className={styles.avatarImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectCard4}>
          <div className={styles.imageContainer}>
            <Image
              src="/portfolio/gl.png"
              alt="Punto Pago app with payment terminal and card"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectText}>
              <h2 className={styles.projectTitle}>Punto Pago</h2>
              <p className={styles.projectSubtitle}>– The First Super-App in Latin America</p>
            </div>

            <div className={styles.projectAction}>
              <button className={styles.exploreButton}>Explore</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

