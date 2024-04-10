/* eslint-disable react/prop-types */
import styles from './Container.module.css'

export function Container(props) {

    const customClasses = typeof props.customClass === 'string' ? props.customClass.split(' ') : [];

    const combinedClasses = [styles.container, ...customClasses.map(custom => styles[custom])];

    return (
        <section className={combinedClasses.join(' ')}>
            {props.children}
        </section>
    )
}