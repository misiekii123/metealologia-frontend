<script>
	import {version} from "$app/environment"
	export let data;
</script>

<svelte:head>
	<title>{import.meta.env.VITE_TITLE}</title>
</svelte:head>

<section>
	<div>
		<h1>{import.meta.env.VITE_TITLE}</h1>
		<h2>Wersja: {version}<br>Środowisko: {import.meta.env.MODE}</h2>
	</div>
	<div>
		<h1>Backend: {data.title}</h1>
		<h2>Wersja: {data.version}<br>Środowisko: {data.environment}</h2>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	div {
		margin: 50px;
	}
	h1 {
		font-size: 5em;
	}
</style>
