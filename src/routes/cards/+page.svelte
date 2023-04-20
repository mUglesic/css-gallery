
<script lang="ts">

    // import ipsum_qr from '/ipsum.png';

</script>

<main>

    <h2>Cards</h2>

    <div class="container">

        <div id="card-1" class="card">
            <img alt="Card Background" src="https://images.unsplash.com/photo-1599557041284-7e2a15610388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
            <span>
                <p>Mr. McFly, Mr. McFly, this just arrived, oh hi Marty. I think it's your new book.</p>
                <p>No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George.</p>
                <p>Okay, that's enough. Now stop the microphone. I'm sorry fellas. I'm afraid you're just too darn loud. Next, please. Where's the next group, please.</p>
            </span>
        </div>

        <div id="card-2" class="card">
            <img alt="Card Background" src="https://images.unsplash.com/photo-1579033014049-f33d9b14d37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80">
            <span>
                <p>Dammit, Doc, why did you have to tear up that letter? If only I had more time.</p>
                <p>Wait a minute, I got all the time I want I got a time machine, I'll just go back and warn him. 10 minutes oughta do it.</p>
                <p>Time-circuits on, flux-capacitor fluxing, engine running, alright. No, no no no no, c'mon c'mon. C'mon c'mon, here we go, this time. Please, please, c'mon.</p>
            </span>
        </div>

        <div id="card-3" class="card">
            <!-- <img alt="Card Background" src="https://images.unsplash.com/photo-1607622017669-2b0fe5eb878b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80"> -->
        </div>

        <div id="card-4" class="card">
            <img alt="Card Background" src="/ipsum.png">
        </div>

        <div id="card-5" class="card">
            <div class="sliding-gradient"></div>
        </div>

    </div>

</main>

<style>

    :root {

        --gradient-angle: 0deg;

    }

    h2 {

        font-family: 'Major Mono Display', monospace;

        font-size: 2.2rem;
        text-transform: lowercase;

    }

    main {

        display: flex;
        flex-direction: column;

        align-items: center;

        container: cards / inline-size;

    }

    .container {

        display: flex;
        justify-content: space-around;

        flex-wrap: wrap;

        gap: 5em;

        margin-bottom: 2em;

    }

    .card {

        position: relative;

        isolation: isolate;

        width: 20em;
        aspect-ratio: 2 / 3;

        border: rgba(245, 245, 220, 0.5) 2px solid;
        border-radius: 3em;

        overflow: hidden;

    }

    .card img {

        position: absolute;

        z-index: -1;

        width: 100%;
        height: 100%;

        object-fit: cover;

    }

    #card-1 img {

        transition: scale 200ms ease-out, filter 200ms;

    }
    #card-1:hover img {

        scale: 1.05;
        filter: brightness(50%);

    }

    #card-1 span {

        display: inline-block;

        position: absolute;

        top: 50%;
        transform: translateY(-50%);

        padding: 1em;

        transition: translate 300ms ease, opacity 1000ms;

        translate: 120% 0;
        opacity: 0;

    }
    #card-1:hover span {

        translate: 0 0;
        opacity: 1;

    }

    #card-2 {

        border-radius: .5em;

        transition: border-radius 400ms;

    }
    #card-2:hover {

        border-radius: 3em;

    }

    #card-2 img {

        transition: scale 200ms, filter 200ms;

    }
    #card-2:hover img {

        scale: 1.05;
        filter: brightness(50%);

    }

    #card-2 span {

        display: inline-block;

        position: absolute;

        top: 50%;
        transform: translateY(-50%);

        padding: 1em;

        opacity: 0;

        transition: opacity 500ms;

    }
    #card-2:hover span {

        opacity: 1;

    }

    @property --gradient-angle {
        syntax: "<angle>";
        inherits: false;
        initial-value: 0deg;
    }

    #card-3 {

        border: unset;
        overflow: unset;

        isolation: auto;

        background: hsl(209, 45%, 15%);

        border-radius: 1em;

    }

    #card-3::before,
    #card-3::after {

        content: '';

        position: absolute;

        inset: -.4em;

        z-index: -2;

        background-color: hsl(166, 68%, 53%);

        background-image: conic-gradient(
            from var(--gradient-angle),
            hsl(166, 68%, 53%),
            hsl(213, 100%, 44%),
            hsl(166, 68%, 53%)
        );

        border-radius: inherit;

        animation: border_rotate 5s infinite linear;

    }

    #card-3::after {
        filter: blur(2em);
    }

    @keyframes border_rotate {

        0% {--gradient-angle: 0deg}
        100% {--gradient-angle: 360deg}

    }

    #card-4 {

        background: hsl(209, 45%, 15%);

        background-image: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.1),
            transparent
        );

        border-radius: 1em;
        border: unset;

        overflow: visible;

    }

    #card-4 img {

        z-index: unset;

        top: 50%;
        left: 50%;

        translate: -50% -50%;

        width: 15em;
        height: unset;
        aspect-ratio: 1 / 1;

        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);

        object-fit: unset;

        transition: scale 250ms, transform 400ms;

    }

    #card-4:hover img {

        scale: 1.5;
        transform: translateY(-5px);

    }

    #card-5 {

        background: rgba(255, 255, 255, 0.1);

        border-radius: 2em;
        border: unset;
        /* border: 0.25em solid rgba(255, 255, 255, 0.5); */

    }

    #card-5 .sliding-gradient {

        position: absolute;

        inset: -20%;

        rotate: 10deg;
        filter: blur(8px);

        transform: translateX(-100%);

        background-image: linear-gradient(45deg, rgba(52,217,178,1) 0%, rgba(0,100,224,1) 100%);

        transition: transform 300ms cubic-bezier(.33,.77,.58,.92);

    }

    #card-5:hover .sliding-gradient {

        transform: translateX(0%);

    }

</style>