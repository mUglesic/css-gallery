
<script lang="ts">

    import '$lib/app.css';
    import { base } from '$app/paths';

    let opened = false;

</script>

<header>
    
    <h1 class="header-title"><a href="{base}/">CSS Gallery</a></h1>

    <ul class="header-items" class:opened={opened}>
        <li class="header-item">
            <a href="{base}/hamburgers">Hamburgers</a>
        </li>
        <li class="header-item">
            <a href="{base}/text">Fancy Text</a>
        </li>
        <li class="header-item">
            <a href="{base}/buttons">Buttons</a>
        </li>
        <li class="header-item">
            <a href="{base}/loading">Loading Animations</a>
        </li>
        <li class="header-item">
            <a href="{base}/cards">Cards</a>
        </li>
        <li class="header-item">
            <a href="{base}/audio">Audio</a>
        </li>
    </ul>

    <button on:click={() => opened = !opened} class="header-dropdown">{#if opened} &blacktriangle; {:else} &blacktriangledown; {/if}</button>

</header>

<slot></slot>

<style>

    header {

        position: sticky;
        top: 0;
        width: 100%;

        z-index: 2;

        display: flex;

        isolation: isolate;

        margin-bottom: 5rem;

    }

    header::before {

        content: '';

        position: absolute;
        inset: -2rem 0 0 0;
        z-index: -1;
        
        background: rgb(52,217,178);
        background: linear-gradient(56deg, rgba(52,217,178,1) 0%, rgba(0,100,224,1) 100%);

        transform: skewY(-0.75deg);

    }

    .header-title {

        font-family: 'Major Mono Display', 'Courier New', Courier, monospace;

        flex: 3;

        font-size: 2.5rem;
        line-height: 1.6;

        text-align: center;
        white-space: nowrap;
        text-transform: uppercase;
        
    }

    .header-items {

        font-family: 'Major Mono Display', 'Courier New', Courier, monospace;
        
        flex: 7;

        font-size: 1.2rem;
        text-transform: lowercase;

        display: flex;
        flex-wrap: wrap;

        justify-content: space-around;
        align-items: center;

        padding: 0;

        list-style: none;

    }

    .header-item {

        transition: scale 75ms, translate 200ms;

    }

    .header-item:hover {

        text-transform: capitalize;

        scale: 1.07;
        translate: 0px -2px;

    }

    .header-dropdown {

        display: none;

    }

    @media (max-width: 720px) {

        header {

            justify-content: space-around;

        }

        .header-title {

            font-size: 1.5em;
            line-height: 1.2;

        }

        .header-items {

            text-align: center;

            position: absolute;
            top: 100%;
            left: 50%;

            margin: 0;
            padding-inline: 3px;
            border: 1px white solid;

            background: #15222E;

            transform: translate(-50%, -120%);

            transition: transform 250ms ease-in-out;

            flex-direction: column;
            gap: 5px;

            z-index: -2;

        }

        .header-items.opened {

            transform: translate(-50%, 0%);

        }

        .header-item {

            position: relative;

            background: #15222E;

            width: 100%;

        }

        .header-item:hover, .header-item:focus {

            scale: 1;
            translate: 0 0;

            filter: brightness(1.1);

        }

        .header-dropdown {

            cursor: pointer;

            color: var(--text-color);

            display: block;

            font-size: 2em;

            padding: 0;
            border: none;

            background: transparent;

            flex: 1;

        }

    }

</style>