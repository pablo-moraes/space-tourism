import { useEffect } from 'react'

import styles from './NavBurger.module.css'

// eslint-disable-next-line react/prop-types
function NavBurger({ handleClick }) {


    useEffect(() => {
        document.addEventListener('click', function (event) {
            const $navbar = document.querySelector('#navbar')
            const $btn = document.querySelector('#navButton')
            const closest = event.target.closest('#navbar')

            if (event.target != $btn
                && closest != $navbar
                && $btn.classList.contains(styles.burger_icon_open)
            ) {
                toggleIcon()
            }
        })
    })

    const toggleIcon = () => {
        const $btn = document.querySelector('#navButton')
        $btn.classList.toggle(styles.burger_icon_open)
        handleClick()
    }

    return (
        <>
            <div id="navButton" className={styles.burger_icon} onClick={toggleIcon}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default NavBurger