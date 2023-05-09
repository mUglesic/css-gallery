
<script lang="ts">

    // const weirdSegments: number = 15;

</script>

<main>

    <div class="type-select">

        <button class="retro-button"><span>Retro</span></button>

        <button class="basic-button">Basic</button>

        <button class="fancy-button">Fancy</button>

        <!-- <div class="weird-button">
            <div class="gradient-border"></div>
            <button class="weird-button-under">Weird</button>
            {#each {length: weirdSegments} as _}
                <div class="weird-button-segment"></div>
            {/each}
            <span class="weird-button-over">Weird</span>
        </div> -->

    </div>

</main>

<style lang="scss">

    // $segmentCount: 15;

    main {

        min-width: 60%;

    }

    .type-select {

        display: flex;
        flex-wrap: wrap;

        gap: 10px;

        justify-content: space-around;

    }

    .type-select button {

        cursor: pointer;

        padding-inline: 0.75em;
        padding-block: 0.4em;

        text-transform: lowercase;

        font-family: 'Major Mono Display', monospace;
        font-size: 1.3rem;
        color: var(--text-color);

    }

    .retro-button {

        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif !important;
        font-weight: 700;

        text-transform: uppercase !important;

        border: 2px hsl(336, 5%, 19%) solid;

        box-shadow: inset -1px -1px 4px hsl(336, 5%, 19%);

        background-color: hsl(39, 14%, 73%);
        color: hsl(336, 5%, 19%) !important;

        transition: background-color 100ms, box-shadow 50ms;

    }
    .retro-button:hover {

        cursor: url('/retro-cursor.svg') 11 1, pointer;

        background-color: hsl(46, 19%, 84%);

    }
    .retro-button:active {

        box-shadow: inset -2px -2px 4px hsl(336, 5%, 19%);

        background-color: hsl(39, 14%, 73%);

    }
    .retro-button span {

        display: inline-block;

        transition: translate 50ms;

    }
    .retro-button:active span {

        translate: -1px -1px;

    }

    .basic-button {

        background-color: hsl(167 30% 50%);

        box-shadow: 1px 1px 2px hsl(167 30% 30%);

        border: none;
        border-radius: 10px;

        transition: scale 50ms, translate 200ms, background-color 100ms;

    }
    .basic-button:hover {

        background-color: hsl(167 30% 60%);

        scale: 1.07;
        translate: 0px -2px;

    }
    .basic-button:active {

        background-color: hsl(167 30% 40%);

        scale: 0.93;

    }

    .fancy-button {

        background-color: transparent;
        color: hsl(167 30% 50%);

        border: 2px solid hsl(167 30% 50%);
        border-radius: 1em;

        text-shadow: 0px 0px 1px hsl(167 30% 60%);
        filter: drop-shadow(0px 0px 5px hsl(167 30% 60%));

        transition: scale 50ms, translate 100ms, background-color 100ms, border-color 100ms, color 100ms, text-shadow 100ms;
        
    }
    .fancy-button:hover {

        background-color: hsl(167 30% 50%);
        color: var(--text-color);

        border-color: hsl(167 30% 40%);

        text-shadow: none;

        translate: 1px -3px;

    }
    .fancy-button:active {

        scale: 0.93;

    }

    // .weird-button {

    //     position: relative;
    //     isolation: isolate;

    //     cursor: pointer;

    //     width: 7em;

    //     display: grid;

    //     grid-template-columns: repeat(5, 1fr);

    // }

    // .weird-button .weird-button-segment {

    //     pointer-events: none;

    //     background-color: hsl(167, 30%, 50%);

    //     transition: translate 150ms ease-out, rotate 100ms ease-out;

    // }

    // .weird-button-under {

    //     position: absolute;
    //     z-index: -1;

    //     top: 50%;
    //     left: 50%;
    //     translate: -50% -50%;

    //     background: #15222E;

    //     border: none;
    //     border-radius: 0.5em;

    // }

    // .gradient-border {
        
    //     position: absolute;
    //     z-index: -2;

    //     inset: 0;

    //     background-image: linear-gradient(
    //         45deg,
    //         hsl(167, 30%, 70%) 0%,
    //         hsl(213, 70%, 50%) 100%
    //     );

    //     border-radius: 0.75em;

    // }

    // .weird-button-over {

    //     position: absolute;
    //     z-index: 1;
    //     top: 50%;
    //     left: 50%;
    //     translate: -50% -50%;

    //     font-family: 'Major Mono Display', monospace;
    //     font-size: 1.3rem;
    //     text-transform: lowercase;

    // }

    // .weird-button:hover .weird-button-over {
    //     visibility: hidden;
    // }

    // @function randomNum($min, $max) {

    //     $r: random();
    //     $res: $min + floor($r * (($max - $min) + 1));

    //     @return $res;

    // }

    // @for $i from 1 through $segmentCount + 1 {

    //     $modifiers: 1, -1;

    //     $radius: 50;
    //     $x: randomNum($radius, $radius * 2) * nth($modifiers, random(length($modifiers)));
    //     $y: randomNum($radius, $radius * 2) * nth($modifiers, random(length($modifiers)));

    //     .weird-button:hover .weird-button-segment:nth-of-type(#{$i}) {
    //         translate: #{$x}px #{$y}px;
    //         rotate: #{random(180)}deg;
    //     }

    // }

</style>