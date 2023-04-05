
<!-- three dots | loading bar | loading circle -->

<script lang="ts">

</script>

<main>

    <div class="container">

        <!-- dots -->

        <section>

            <h2>DOTS</h2>

            <div class="animation-container">

                <svg id="dots-1" viewBox="0 0 100 100">
                    <circle cx="20" cy="50"></circle>
                    <circle cx="50" cy="50"></circle>
                    <circle cx="80" cy="50"></circle>
                </svg>

                <svg id="dots-2" viewBox="0 0 100 100">
                    <circle cx="20" cy="25"></circle>
                    <circle cx="50" cy="25"></circle>
                    <circle cx="80" cy="25"></circle>
                </svg>

                <svg viewBox="0 0 100 100">

                </svg>

            </div>

        </section>

        <!-- bars -->

        <section>

            <h2>BARS</h2>

            <div class="animation-container">

                <svg id="bars-1" viewBox="0 0 100 20">
                    <rect width="30" height="10" x="0" y="5" rx="5"></rect>
                </svg>

                <svg id="bars-2" viewBox="0 0 100 20">
                    <rect width="40" height="10" x="0" y="5" rx="5"></rect>
                </svg>

                <svg id="bars-3" viewBox="0 0 100 20">
                    <rect width="80" height="10" x="10" y="5" rx="5"></rect>
                </svg>

            </div>

        </section>

        <!-- shapes -->

        <section>

            <h2>SHAPES</h2>

            <div class="animation-container">

            </div>

        </section>

    </div>
    
</main>

<style lang="scss">

    .container {

        display: flex;
        flex-direction: column;

        align-items: center;

    }

    section {

        min-width: 100%;

        text-align: center;

    }

    h2 {

        font-family: 'Major Mono Display', monospace;

        font-size: 2.2rem;
        text-transform: lowercase;

    }

    .animation-container {

        display: flex;

        gap: 2em;

    }

    /* Animations */

    /* Dots */

    /* Dots 1 */

    #dots-1 circle {

        fill: var(--text-color);

        r: 5px;

        animation: dots_pulse 1500ms infinite ease-in-out;

    }

    @for $i from 1 through 3 {

        #dots-1 circle:nth-child(#{$i}) {

            animation-delay: #{$i * 150}ms;

        }

    }

    @keyframes dots_pulse {

        50% {r: 10px;}

    }

    /* End Dots 1 */

    /* Dots 2 */

    #dots-2 circle {

        fill: var(--text-color);

        r: 10px;

        animation: dots_wave 2000ms ease-in-out infinite;

    }

    @for $i from 1 through 3 {

        #dots-2 circle:nth-child(#{$i}) {

            animation-delay: #{$i * 100}ms;

        }

    }

    @keyframes dots_wave {

        50% {cy: 66px; r: 5px;}

    }

    /* End Dots 2 */

    /* Dots 3 */

    #dots-3 circle {



    }

    /* End Dots 3 */

    /* End Dots */

    /* Bars */

    /* Bars 1 */

    #bars-1 rect {

        fill: var(--text-color);

        animation: simple_bar 1500ms infinite;

    }

    @keyframes simple_bar {

        0% {x: -40px; width: 30px;}
        66% {x: 40px; width: 20px;}
        100% {x: 110px; width: 40px;}

    }

    /* End Bars 1 */

    /* Bars 2 */

    #bars-2 rect {

        fill: var(--text-color);

        animation: bouncing_bar 2000ms infinite alternate ease-in-out;

    }

    @keyframes bouncing_bar {

        0% {x: -50px;}
        100%{x: 110px;}

    }

    /* End Bars 2 */

    /* Bars 3 */

    #bars-3 rect {

        fill: var(--text-color);

    }

    /* End Bars 3 */

    /* End Bars */

    /* End Animations */

</style>