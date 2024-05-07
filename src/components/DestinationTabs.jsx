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

                <footer className={styles.destination_info} role="contentinfo">
                    <div>
                        <p id="distance-label">AVG. DISTANCE</p>
                        <p aria-labelledby="distance-label">{currentDestination.avg_distance}</p>
                    </div>

                    <div>
                        <p id="traveltime-label">Est. travel time</p>
                        <p aria-labelledby="traveltime-label">{currentDestination.travel_time}</p>
                    </div>
                </footer>
            </article>
        </section>
    )
}

export default DestinationTabs;