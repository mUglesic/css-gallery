
<script lang="ts">

    import { beforeNavigate } from "$app/navigation";
    import { onMount } from "svelte";

    import { base } from "$app/paths";

    // let playing: boolean = false;
    let dataArray: Uint8Array | undefined;
    let getFrequencyInterval: number;

    let nBar: number = 32;
    const barWidth: number = 10;

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

        <span style="font-size: 16pt;">Russian Dance - Tchaikovsky Nutcracker Suite</span>
        <span>Conducted by <a href="https://pmmusic.pro/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">Philip Milman</a></span>

        <div style="display: flex; gap: 5px;">
            <audio id="piece" controls preload="auto" src="{base}/Tchaikovsky.mp3"></audio>
            <select id="barCount" bind:value={nBar}>
                <option value={16}>16</option>
                <option value={32} selected>32</option>
                <option value={64}>64</option>
            </select>
        </div>

        {#if dataArray}

            <div class="visualizer" style="--vis-scale: {48 / nBar};">

                {#each dataArray as d}
                    
                    <div style="--bar-width: {barWidth}px; --bar-height: {(Math.abs(128 - d) * 2) + barWidth}px;"></div>

                {/each}

            </div>

        {/if}

    </div>

</main>

<style>

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

        height: 200px;

        transform-origin: top;
        
        scale: var(--vis-scale);

    }

    .visualizer > div {

        background: white;
        border-radius: 100vh;

        width: var(--bar-width);
        height: min(var(--bar-height), 200px);

        transition: height 50ms ease-in-out;

    }

</style>