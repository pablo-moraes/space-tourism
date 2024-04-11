import { useState } from 'react';
import CrewSlider from '../components/CrewSlider';

import crew from '../constants/crew';

import styles from './Crew.module.css';

function Crew() {

    const [fade, setFade] = useState(false);
    const [currentCrewMember, setCurrentCrewMember] = useState(crew[0]);
    console.log(currentCrewMember.length)

    const changeCurrentCrew = member => {
        setFade(true);

        setTimeout(() => {
            setCurrentCrewMember(member);
            setFade(false)
        }, 300)
    }

    return (
        <>
            <header className={styles.crew_header}>
                <h1><strong>02</strong> Meet your crew</h1>
            </header>
            <section className={'crew ' + styles.crew_container}>
                <article>
                    <CrewSlider onSwipe={changeCurrentCrew} crew={crew} styles={styles} />
                </article>

                <article className={fade ? styles.fade_in : styles.fade_out}>
                    <img src={`/src/assets/images/crew/${currentCrewMember.photo}`} alt={`${currentCrewMember.name}`} />
                </article>
            </section>
        </>

    )
}

export default Crew