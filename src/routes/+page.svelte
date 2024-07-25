<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>{data.title}</h1>
	<h2>Wersja: {data.version} / Środowisko: {data.environment}</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
