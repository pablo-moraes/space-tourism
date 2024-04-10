import { useState } from 'react';
import DestinationTabs from '../components/DestinationTabs';
import destinations from '../constants/destinations';

import styles from './Destination.module.css';

function Destination() {
    
    const [fade, setFade] = useState(false);
    const [currentDestination, setCurrentDestination] = useState({
        photo: 'moon.png',
        name: 'Moon'
    });

    const changeDestination = destination => {
        setFade(true)
        setTimeout(() => {
            setCurrentDestination(destination);
            setFade(false)
        }, 300)
    }

    return (
        <section className='destination'>
            <header className={styles.header_container}>
                <h1><strong>01</strong> PICK YOUR DESTINATION</h1>
            </header>

            <div className={styles.destination_container}>
                <article className={fade ? styles.fade_in : styles.fade_out}>
                    <img src={`/src/assets/images/destinations/${currentDestination.photo}`} alt={`${currentDestination.name}`} />
                </article>
                <article>
                    {destinations && (
                        <DestinationTabs options={destinations} handleClick={changeDestination} />
                    )}
                </article>
            </div>
        </section>
    )
}

export default Destination