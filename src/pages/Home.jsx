import styles from './Home.module.css'

function Home() {
  return (
    <section className={'home ' + styles.section_container}>
      <article className={`${styles.article_text} ${styles.article_container}`}>
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>

        <p>
          Let’s face it; if you want to go to space,
          you might as well genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </article>
      <article className={`${styles.article_container} ${styles.article_explore}`}>
        <button className={styles.explore_button}>EXPLORE</button>
      </article>
    </section>
  );
}

export default Home;
