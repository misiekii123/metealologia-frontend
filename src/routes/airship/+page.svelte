<script>
    import welcome from '$lib/images/svelte-welcome.webp';
    import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
    <title>Sterowiec</title>
</svelte:head>

<section>
    <h1>
		Kontrola Sterowca
    </h1>
    <p id="not-implemented-note">KOMING SUN<br>(OR NOT SUN)</p>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    p#not-implemented-note {
        font-family: "Comic Sans MS";
        font-size: 5em;
        text-align: center;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }
</style>
