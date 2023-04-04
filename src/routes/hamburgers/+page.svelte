
<script lang="ts">

    const burgers_noSVG: boolean[] = [false, false, false];
    const burgers_SVG: boolean[] = [false, false, false];

</script>

<main>

    <div class="container">
        
        <section>

            <h2>No SVG</h2>

            <div class="hamburger-container">

                {#each burgers_noSVG as burgerOpen, i}

                    <div>

                        <button on:click={() => burgers_noSVG[i] = !burgerOpen} id="ham-{i + 1}" class="hamburger" class:open={burgerOpen} type="button">

                            <div class="hamburger-section"></div>
                            <div class="hamburger-section"></div>
                            <div class="hamburger-section"></div>

                        </button>

                        <span class="pointer" style:animation-duration="{800 + (i * 100)}ms">&larr; {i === 2 ? 'DO NOT' : ''} click me!</span>

                    </div>

                {/each}

            </div>

        </section>

        <section>

            <h2>SVG</h2>

            <div class="hamburger-container">

                {#each burgers_SVG as burgerOpen, i}

                    <div>

                        <button on:click={() => burgers_SVG[i] = !burgerOpen} id="ham-{burgers_SVG.length + i + 1}" class="hamburger" class:open={burgerOpen} type="button">

                            <svg class="hamburger-svg" viewBox="0 0 100 100">
                                <rect width="90" height="16" x="5" y="16" rx="8px" class="line top"></rect>
                                <rect width="90" height="16" x="5" y="42" rx="8px" class="line middle"></rect>
                                <rect width="90" height="16" x="5" y="68" rx="8px" class="line bottom"></rect>
                            </svg>

                        </button>

                        <span class="pointer" style:animation-duration="{800 + (i * 100)}ms">&larr; click me!</span>

                    </div>

                {/each}

            </div>

        </section>

    </div>

</main>

<style>

    main {

        min-width: 60%;

    }

    .container {

        display: flex;
        flex-direction: column;

        align-items: center;
        text-align: center;

    }

    h2 {

        font-family: 'Major Mono Display', monospace;

        font-size: 2.2rem;
        text-transform: lowercase;

        margin-bottom: 2em;

    }

    .pointer {

        position: absolute;

        font-size: 0.8rem;

        translate: 15px -15px;
        rotate: -12deg;

        animation: breathe 1000ms infinite alternate;

    }

    .hamburger-container {

        display: flex;
        flex-direction: row;

        justify-content: space-around;
        gap: 8em;

        margin-bottom: 5em;

    }

    .hamburger {

        position: relative;

        width: 6em;

        padding: 0;

        background: none;
        border: none;

    }
    .hamburger:hover {

        cursor: pointer;

    }

    /* No SVG */

    .hamburger-section {

        background-color: var(--text-color);

        width: 100%;
        aspect-ratio: 6 / 1;

        border-radius: 9999px;

        transform-origin: center;

    }

    .hamburger.open .hamburger-section {

        background-color: hsl(0, 100%, 40%);

    }

    .hamburger .hamburger-section:nth-child(2) {

        margin-block: .5em;

    }

    /* Hamburger 1 */

    #ham-1 .hamburger-section {

        transition: background-color 200ms, opacity 100ms, translate 100ms 100ms, rotate 100ms;

    }

    #ham-1.open .hamburger-section {

        transition: background-color 200ms, opacity 100ms, translate 100ms, rotate 100ms 100ms;

    }

    #ham-1.open .hamburger-section:nth-child(1) {

        translate: 0 calc(100% + 0.5em);
        rotate: 45deg;

    }

    #ham-1.open .hamburger-section:nth-child(2) {

        opacity: 0;

    }

    #ham-1.open .hamburger-section:nth-child(3) {

        translate: 0 calc(-100% - 0.5em);
        rotate: -45deg;

    }

    /* End Hamburger 1 */

    /* Hamburger 2 */

    #ham-2 .hamburger-section {

        transition: background-color 200ms, scale 200ms 300ms, translate 100ms 300ms, rotate 100ms 200ms, transform 100ms;

    }

    #ham-2.open .hamburger-section {

        transition: background-color 200ms, scale 200ms, translate 100ms, rotate 100ms 100ms, transform 200ms 200ms;

    }

    #ham-2.open .hamburger-section:nth-child(1) {

        translate: 0 calc(100% + 0.5em);
        rotate: 90deg;
        transform: rotate(45deg);

    }

    #ham-2.open .hamburger-section:nth-child(2) {

        scale: 0;

    }

    #ham-2.open .hamburger-section:nth-child(3) {

        translate: 0 calc(-100% - 0.5em);
        rotate: -90deg;
        transform: rotate(-45deg);

    }

    /* End Hamburger 2 */

    /* Hamburger 3 */

    #ham-3 {
        transition: scale 100ms 400ms;
    }

    #ham-3.open {
        scale: 0.90;
        /* transition: scale 100ms; */
    }

    #ham-3 .hamburger-section {

        transition: background-color 200ms, scale 200ms 300ms, translate 100ms 100ms, rotate 100ms 100ms, transform 100ms;

    }

    #ham-3.open .hamburger-section {

        transition: background-color 200ms, scale 200ms, translate 100ms 200ms, rotate 100ms 200ms, transform 100ms 300ms;

    }

    #ham-3.open .hamburger-section:nth-child(1) {

        translate: -37% 100%;
        
        transform: translate(10%, 20%);

        rotate: -40deg;

        scale: 0.5 1;

    }

    #ham-3.open .hamburger-section:nth-child(3) {

        translate: -37% -100%;

        transform: translate(10%, -20%);

        rotate: 40deg;

        scale: 0.5 1;

    }

    /* End Hamburger 3 */

    /* End No SVG */

    /* SVG */

    .hamburger .line {

        transform-origin: center;

        fill: var(--text-color);

    }

    .hamburger.open .line {
        
        fill:hsl(0, 100%, 40%);

    }

    /* Hamburger 4 */

    #ham-4 .line {

        transition: fill 200ms, opacity 100ms, y 100ms 100ms, rotate 100ms;

    }

    #ham-4.open .line {

        transition: fill 200ms, opacity 100ms, y 100ms, rotate 100ms 100ms;

    }

    #ham-4.open .top {

        y: 42px;
        rotate: 45deg;

    }

    #ham-4.open .middle {

        opacity: 0;

    }

    #ham-4.open .bottom {

        y: 42px;
        rotate: -45deg;

    }

    /* End Hamburger 4 */

    /* Hamburger 5 */

    #ham-5 .line {

        transition: fill 200ms, scale 200ms 300ms, y 100ms 300ms, rotate 100ms 200ms, transform 100ms;

    }

    #ham-5.open .line {

        transition: fill 200ms, scale 200ms, y 100ms, rotate 100ms 100ms, transform 200ms 200ms;

    }

    #ham-5.open .top {

        y: 42px;
        rotate: 90deg;
        transform: rotate(45deg);

    }

    #ham-5.open .middle {

        scale: 0;

    }

    #ham-5.open .bottom {

        y: 42px;
        rotate: -90deg;
        transform: rotate(-45deg);

    }

    /* End Hamburger 5 */

    /* Hamburger 6 */

    #ham-6 {
        transition: scale 100ms 350ms;
    }

    #ham-6.open {
        scale: 0.90;
    }

    #ham-6 .line {

        transition: fill 200ms, width 200ms 300ms, x 100ms 200ms, translate 100ms 300ms, rotate 100ms 100ms, transform 100ms 300ms;

    }

    #ham-6.open .line {

        transition: fill 200ms, width 200ms, x 100ms 100ms, translate 100ms, rotate 100ms 200ms, transform 100ms;

    }

    #ham-6.open .top {

        width: 45px;

        x: 10px;
        translate: 17.5px 0px;

        rotate: -40deg;
        
        transform: translate(-10px, -10px);

    }

    #ham-6.open .bottom {

        width: 45px;

        x: 10px;
        translate: 17.5px 0px;

        rotate: 40deg;

        transform: translate(-10px, 10px);

    }

    /* End Hamburger 6 */

    /* End SVG */

</style>