import { useState } from "react";

import styles from './DestinationTabs.module.css';

function DestinationTabs({ options, handleClick }) {
    const [currentDestination, setCurrentDestination] = useState(options[0]);


    const changeDestination = destination => {
        handleClick(destination)
        setCurrentDestination(destination)
    }

    return (
        <section className={styles.destination_description}>
            <ul>
                {options.map((destination, index) =>
                    <li key={index}
                        onClick={() => changeDestination(destination) }
                        className={currentDestination.name == destination.name ? styles.tab_active : ''}
                    >
                        {destination.name}
                    </li>
                )}
            </ul>

            <article>
                <h1>{currentDestination.name}</h1>

                <p>{currentDestination.description}</p>
                <hr />

                <footer className={styles.destination_info}>
                    <article>
                        <p>AVG. DISTANCE</p>
                        <p>{currentDestination.avg_distance}</p>
                    </article>

                    <article>
                        <p>Est. travel time</p>
                        <p>{currentDestination.travel_time}</p>
                    </article>
                </footer>
            </article>
        </section>
    )
}

export default DestinationTabs;