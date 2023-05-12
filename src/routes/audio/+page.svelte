
<script lang="ts">

    import { beforeNavigate } from "$app/navigation";
    import { onMount } from "svelte";

    import { base } from "$app/paths";

    // let playing: boolean = false;
    let dataArray: Uint8Array | undefined;
    let getFrequencyInterval: number;

    const nBarOpts: number[] = [64, 128, 256, 512];

    let nBar: number = 128;
    const hVis: number = 400;

    onMount(() => {
        
        const piece: HTMLAudioElement = document.getElementById('piece') as HTMLAudioElement;

        // console.log(piece);

        const audioCtx = new AudioContext();
        const analyser = audioCtx.createAnalyser();

        const source = audioCtx.createMediaElementSource(piece);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        analyser.fftSize = nBar * 2;
        let bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        getFrequencyInterval = setInterval(() => {
            analyser.getByteTimeDomainData(dataArray!);
            dataArray = dataArray;
        }, 50);

        document.getElementById('barCount')?.addEventListener('change', () => {
            analyser.fftSize = nBar * 2;
            bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
        });

    });

    beforeNavigate(() => {
        clearInterval(getFrequencyInterval);
    });

</script>

<main>

    <div class="wrapper">

        <span style="font-size: 1.4em;">Russian Dance - Tchaikovsky Nutcracker Suite</span>
        <span>Conducted by <a href="https://pmmusic.pro/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">Philip Milman</a></span>

        <div style="display: flex; gap: 5px;">
            <audio id="piece" controls preload="auto" src="{base}/Tchaikovsky.mp3"></audio>
            <select id="barCount" bind:value={nBar}>
                {#each nBarOpts as n}
                    <option value={n}>{n}</option>
                {/each}
            </select>
        </div>

        <span style="color: firebrick; font-size: 0.7em;">!!WARNING!!<br/>High values might be slow on some devices</span>

        {#if dataArray}

            <div class="visualizer" style="--vis-height: {hVis}px; --vis-scale: {48 / nBar};">

                <!-- {#each dataArray as d}
                    
                    <div style="--bar-width: {barWidth}px; --bar-height: {((d / 128.0) * hVis) * 0.5}px;"></div>

                {/each} -->

                <svg class="visualizer-svg" style="height: 100%;" viewBox="0 0 200 100">

                    {#each dataArray as d, i}

                    {@const w = 200 / nBar}

                        <!-- <line x1={i * w + (w / 2)} y1={100} x2={i * w + (w / 2)} y2={((128.0 / d) * 100 * 0.5)} stroke-width={100 / nBar}></line> -->
                        <rect x={i * w} y={0} width={w} height={((d / 128.0) * 100 * 0.5)}></rect>

                    {/each}

                </svg>

            </div>

        {/if}

    </div>

</main>

<style lang="scss">

    main {
        
        display: flex;
        justify-content: center;

    }
    
    .wrapper {

        display: flex;
        flex-direction: column;

        gap: 5px;

        align-items: center;

    }

    span {

        font-family: 'Major Mono Display', monospace;

        text-align: center;

        text-transform: lowercase;

    }

    select {

        border: 1px solid transparent;
        background: transparent;

        color: var(--text-color);

    }

    select option {
        color: #000;
    }

    .visualizer {

        display: flex;
        align-items: flex-end;

        gap: 1px;

        width: 100%;
        // height: var(--vis-height);

        transform-origin: center;
        
        /* scale: var(--vis-scale); */
        scale: 1 -1;

    }

    .visualizer-svg rect {

        stroke: var(--text-color);
        fill: var(--text-color);

        transition: height 50ms ease-in-out;

    }

    // .visualizer > div {

    //     background: var(--text-color);
    //     /* border-radius: 100vh 100vh 0 0; */

    //     width: var(--bar-width);
    //     height: min(var(--bar-height), var(--vis-height));

    //     transition: height 50ms ease-in-out;

    // }

    @media (max-width: 500px) {

        .wrapper {

            max-width: 100vw;

        }

        // .visualizer {

        //     scale: calc(var(--vis-scale) * 0.7);

        // }

    }

</style>