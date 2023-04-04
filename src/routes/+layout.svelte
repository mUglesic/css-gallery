
<script lang="ts">

    import '$lib/app.css';

</script>

<header>
    
    <h1 class="header-title"><a href="/">CSS Gallery</a></h1>

    <ul class="header-items">
        <li class="header-item">
            <a href="hamburgers">Hamburgers</a>
        </li>
        <li class="header-item">
            <a href="text">Fancy Text</a>
        </li>
        <li class="header-item">
            <a href="buttons">Buttons</a>
        </li>
        <li class="header-item">
            <a href="loading">Loading Animations</a>
        </li>
    </ul>

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

</style>