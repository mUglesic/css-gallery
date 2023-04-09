
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

                <svg id="shapes-1" viewBox="0 0 100 100">
                    <path d="M 20 20 v 60 h 60 v -60 h -60" stroke-width="10"></path>
                </svg>

                <svg id="shapes-2" viewBox="0 0 100 100">
                    <path d="M 75 50 A 25 25 0 1 1 74.9962 49.5637" stroke-width="10" stroke-linecap="round"></path>
                </svg>

                <svg id="shapes-3" viewBox="0 0 100 100">
                    <line x1="30" y1="20" x2="70" y2="20"></line>
                    <path d="M 35 20 C 30 38, 40 42, 43 45 S 47 50, 45 52" stroke-linejoin="round"></path>
                    <path d="M 35 80 C 30 62, 40 58, 43 55 S 47 50, 45 48" stroke-linejoin="round"></path>
                    <path d="M 65 20 C 70 38, 60 42, 57 45 S 53 50, 55 52" stroke-linejoin="round"></path>
                    <path d="M 65 80 C 70 62, 60 58, 57 55 S 53 50, 55 48" stroke-linejoin="round"></path>
                    <line x1="30" y1="80" x2="70" y2="80"></line>
                </svg>

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

        animation: bouncing_bar 1000ms infinite alternate ease-in-out;

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

    /* Shapes */

    /* Shapes 1 */

    #shapes-1 path {

        fill: transparent;
        stroke: var(--text-color);

        transform-origin: center;

        stroke-dasharray: 500;
        stroke-dashoffset: 500;

        stroke-linecap: round;
        stroke-linejoin: round;

        animation: square_spin 5s ease-in-out alternate infinite;

    }

    @keyframes square_spin {

        0% {
            stroke-dashoffset: 500;
            rotate: 0deg;
        }
        33% {
            stroke-dashoffset: 0;
            rotate: 0deg;
        }
        66% {
            stroke-dashoffset: 0;
            rotate: 540deg;
        }
        100% {
            stroke-dashoffset: 500;
            rotate: 540deg;
        }

    }

    /* End Shapes 1 */

    /* Shapes 2 */

    #shapes-2 path {

        fill: transparent;
        stroke: var(--text-color);

        transform-origin: center;

        stroke-dasharray: 157;
        stroke-dashoffset: 157;

        animation: circle_spin 2500ms infinite ease-in-out;

    }

    @keyframes circle_spin {

        0% {
            stroke-dashoffset: 157;
            rotate: 0deg;
        }
        33% {
            stroke-dashoffset: 54;
            rotate: 270deg;
        }
        100% {
            stroke-dashoffset: -156;
            rotate: 720deg;
        }

    }

    /* End Shapes 2 */

    /* Shapes 3 */

    #shapes-3 {

        fill: transparent;
        stroke: var(--text-color);

    }

    #shapes-3 line {

        stroke-width: 8;
        stroke-linecap: round;

    }

    #shapes-3 path {

        stroke-width: 5;

    }

    #shapes-3 :is(line, path) {

        transform-origin: center;

        animation: flip_hourglass 3000ms ease infinite;

    }

    @keyframes flip_hourglass {

        0% {
            rotate: 0deg;
        }
        20% {
            rotate: 180deg;
        }
        100% {
            rotate: 180deg;
        }

    }

    /* End Shapes 3 */

    /* End Shapes */

    /* End Animations */

</style>