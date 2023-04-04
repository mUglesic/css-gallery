
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

                        <span class="pointer" style:animation-duration="{800 + (i * 100)}ms">&larr; click me!</span>

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

                            <svg viewBox="0 0 100 100">

                            </svg>

                        </button>

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

        justify-content: space-around;

    }

    h2 {

        font-family: 'Major Mono Display', monospace;

        font-size: 2rem;
        text-transform: lowercase;

        margin-bottom: 2em;

    }

    .pointer {

        position: absolute;

        font-size: 0.75rem;

        translate: 15px -15px;
        rotate: -12deg;

        animation: breathe 1000ms infinite alternate;

    }

    .hamburger-container {

        display: flex;
        flex-direction: column;

        align-items: center;
        gap: 3em;

    }

    .hamburger {

        position: relative;

        width: 3.5em;

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

        margin-block: .4em;

    }

    /* Hamburger 1 */

    #ham-1 .hamburger-section {

        transition: background-color 200ms, opacity 100ms, translate 100ms 100ms, rotate 100ms;

    }

    #ham-1.open .hamburger-section {

        transition: background-color 200ms, opacity 100ms, translate 100ms, rotate 100ms 100ms;

    }

    #ham-1.open .hamburger-section:nth-child(1) {

        translate: 0 calc(100% + 0.4em);
        rotate: 45deg;

    }

    #ham-1.open .hamburger-section:nth-child(2) {

        opacity: 0;

    }

    #ham-1.open .hamburger-section:nth-child(3) {

        translate: 0 calc(-100% - 0.4em);
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

        translate: 0 calc(100% + 0.4em);
        rotate: 90deg;
        transform: rotate(45deg);

    }

    #ham-2.open .hamburger-section:nth-child(2) {

        scale: 0;

    }

    #ham-2.open .hamburger-section:nth-child(3) {

        translate: 0 calc(-100% - 0.4em);
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

</style>