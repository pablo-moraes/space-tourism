import { useState } from 'react';

import technologies_imgs from '../constants/technology';

import styles from './Technology.module.css';

function Technology() {

    const [tab, setTab] = useState('tab1');
    const [currentImage, setImage] = useState({ ...technologies_imgs[0] })

    const changeTab = button => {
        const $tab = button.target.getAttribute('data-tab');

        if (button.target.getAttribute('data-state') !== 'active') {
            setTab($tab);
            disableCurrentButton();
            button.target.setAttribute('data-state', 'active')
        }

        let image = technologies_imgs.find(img => img.tab == $tab);
        setImage({ ...image });
    }


    const disableCurrentButton = () => {
        document.querySelector('aside button[data-state="active"]').setAttribute('data-state', '');
    }


    return (
        <>
            <header className={styles.header_container}>
                <h1><strong>03</strong> SPACE LAUNCH 101</h1>
            </header>
            <main className={'technology ' + styles.technology_container}>
                <aside>
                    <button data-tab='tab1' data-state='active' onClick={changeTab}>1</button>
                    <button data-tab='tab2' data-state='' onClick={changeTab}>2</button>
                    <button data-tab='tab3' data-state='' onClick={changeTab}>3</button>
                </aside>
                {/* Tab 1 */}
                <section id='tab1' className={tab == 'tab1' ? styles.active_tab : styles.disabled_tab}>
                    <article>
                        <h2>THE TERMINOLOGY…</h2>
                        <h1>LAUNCH VEHICLE</h1>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!</p>
                    </article>
                </section>

                {/* Tab 2 */}
                <section id='tab2' className={tab == 'tab2' ? styles.active_tab : styles.disabled_tab}>
                    <article>
                        <h2>THE TERMINOLOGY…</h2>
                        <h1>SPACEPORT</h1>
                        <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                    </article>
                </section>

                {/* Tab 3 */}
                <section id='tab3' className={tab == 'tab3' ? styles.active_tab : styles.disabled_tab}>
                    <article>
                        <h2>THE TERMINOLOGY…</h2>
                        <h1>SPACE CAPSULE</h1>
                        <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                    </article>
                </section>
                <section className={styles.image_container}>
                    <img src={currentImage.desktop} alt={currentImage.alt} />
                    <img src={currentImage.mobile} alt={currentImage.alt} />
                </section>
            </main>
        </>
    )
}

export default Technology