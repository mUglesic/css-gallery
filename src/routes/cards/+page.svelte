
<script lang="ts">

</script>

<main>

    <h2>Cards</h2>

    <div class="container">

        <div class="card">
            <img alt="Card Background" src="https://images.unsplash.com/photo-1599557041284-7e2a15610388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
            <span>
                <p>Mr. McFly, Mr. McFly, this just arrived, oh hi Marty. I think it's your new book.</p>
                <p>No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George.</p>
                <p>Okay, that's enough. Now stop the microphone. I'm sorry fellas. I'm afraid you're just too darn loud. Next, please. Where's the next group, please.</p>
            </span>
        </div>

        <div class="card">
            <img alt="Card Background" src="https://images.unsplash.com/photo-1579033014049-f33d9b14d37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80">
        </div>

        <div class="card">
            <img alt="Card Background" src="https://images.unsplash.com/photo-1607622017669-2b0fe5eb878b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80">
        </div>

        <div class="card">
            <img alt="Card Background" src="https://images.unsplash.com/photo-1610247948543-28d438fd094b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
        </div>

        <!-- <div class="card">
            <img alt="Card Background" src="https://images.unsplash.com/photo-1611608789326-10beac1c8f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80">
        </div> -->

    </div>

</main>

<style>

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

    /* @container cards (max-width: 400px) {

        .container {

            flex-direction: column;

        }

    } */

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

        transition: scale 200ms ease-out, filter 200ms;

    }
    .card:hover img {

        scale: 1.05;
        filter: brightness(50%);

    }

    .card span {

        display: inline-block;

        position: absolute;

        top: 50%;
        transform: translateY(-50%);

        padding: 1em;

        transition: translate 300ms ease, opacity 1000ms;

        translate: 120% 0;
        opacity: 0;

    }
    .card:hover span {

        translate: 0 0;
        opacity: 1;

    }

</style>