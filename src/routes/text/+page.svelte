
<script lang="ts">

    // Glitch effect

    const ABC: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    const glOg: string = 'CSS Gallery';
    let gl: string = glOg;

    let glInterval: number | undefined = undefined;

    function showGlitch() {

        if (glInterval) return;

        let letterCount: number = gl.length;
        const STEP: number = 1 / 4;
        let currentStep: number = 0;

        glInterval = setInterval(() => {

            let glSplit = gl.split('');

            for (let i = 0; i < letterCount; i++) {

                if (currentStep - 1 > i || glSplit[i] === ' ') {
                    glSplit[i] = glOg[i];
                }
                else {
                    glSplit[i] = random(ABC);
                }

            }

            gl = glSplit.join('');

            currentStep += STEP;

            if (currentStep > letterCount) {
                gl = glOg;
                resetInterval();
            }

        }, 20);

    }

    function resetInterval() {

        clearInterval(glInterval);
        glInterval = undefined;

    }

    function random(arr: any[]) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // End glitch effect

    // Rise effect

    const ri: string = 'C\'mon, more, dammit. Jeez. Holy shit. Let\'s see if you bastards can do ninety.';

    // End rise effect

</script>

<main>

    <div class="divider"></div>

    <section>

        <span class="text-gradient">Anyway, Grandpa hit him with the car and brought him into the house.</span>

    </section>

    <div class="divider"></div>

    <section>

        <span on:mouseover={() => showGlitch()} on:focus={() => showGlitch()} class="glitch" tabindex="-1">{gl}</span>
        <span class="pointer">&larr; hover over me!</span>

    </section>

    <div class="divider"></div>

    <section>

        {#each ri.split(' ') as word, i}

            <div class="word" tabindex="-1">

                {#each word as letter}

                    <div class="letter-wrapper" tabindex="-1">
                        <span class="letter">{letter}</span>
                    </div>

                {/each}

                <span> </span>

                {#if i !== 0 && i % 5 === 0}
                    <br/>
                {/if}

            </div>

        {/each}

        <!-- <span class="pointer" style="animation-duration: 700ms; translate: 170px -100px;">&larr; hover over me!</span> -->
        
    </section>

    <div class="divider"></div>

</main>

<style>

    section {

        position: relative;

        padding-block: 5rem;
        
        text-align: center;

    }

    span {

        font-size: 1.8rem;
        font-weight: 700;

    }

    .text-gradient {

        color: transparent;

        -webkit-background-clip: text;
        background-clip: text;

        background-image: linear-gradient(56deg, rgba(52,217,178,1) 0%, rgba(0,100,224,1) 100%);

    }

    .glitch {

        font-family: 'Major Mono Display', 'Courier New', Courier, monospace;
        font-size: 3rem;

        text-transform: uppercase;

    }

    .word {

        display: inline;

    }

    .word:hover,
    .word:focus {

        color: rgba(0,100,224,1);
        
    }

    .letter-wrapper {

        cursor: default;

        display: inline;

    }

    .letter {

        display: inline-block;
        white-space: pre;

        transition: color 100ms, translate 50ms ease-out;

    }

    .letter-wrapper:hover .letter,
    .letter-wrapper:focus .letter {

        color: rgba(52,217,178,1);
        
        translate: 0px -50%;

    }

    .pointer {

        position: absolute;

        font-size: 0.8rem;

        translate: 7px -5px;
        rotate: -10deg;

        animation: breathe 1000ms infinite alternate;

    }
    
    .divider {

        width: 100%;
        border-bottom: var(--text-color) solid 2px;

    }
    
</style>