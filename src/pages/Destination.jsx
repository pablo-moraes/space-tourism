import { useState } from 'react';
import DestinationTabs from '../components/DestinationTabs';
import destinations from '../constants/destinations';

import styles from './Destination.module.css';

function Destination() {
    
    const [fade, setFade] = useState(false);
    const [currentDestination, setCurrentDestination] = useState(destinations[0]);

    const changeDestination = destination => {
        if(destination.name !== currentDestination.name) {
            setFade(true)
            setTimeout(() => {
                setCurrentDestination(destination);
                setFade(false)
            }, 300)
        }
      
    }

    return (
        <main className='destination'>
            <header className={styles.header_container}>
                <h1><strong>01</strong> PICK YOUR DESTINATION</h1>
            </header>

            <section className={styles.destination_container}>
                <div className={`${fade ? styles.fade_in : styles.fade_out} ${styles.image_preview}`}>
                    <img src={currentDestination.photo} alt={`Picture of ${currentDestination.name}, the selected destination`} />
                </div>
                <article>
                    {destinations && (
                        <DestinationTabs options={destinations} handleClick={changeDestination} />
                    )}
                </article>
            </section>
        </main>
    )
}

export default Destination