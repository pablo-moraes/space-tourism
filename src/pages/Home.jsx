import styles from './Home.module.css'

function Home() {
  return (
    <main className={'home ' + styles.section_container}>
      <div className={`${styles.article_text} ${styles.article_container}`}>
      <h1>
        SO, YOU WANT TO TRAVEL TO
        <span className={styles.customTitle}>SPACE</span>
      </h1>

        <p>
          Let’s face it; if you want to go to space,
          you might as well genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className={`${styles.article_container} ${styles.article_explore}`}>
        <button className={styles.explore_button}>EXPLORE</button>
      </div>
    </main>
  );
}

export default Home;
