<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>{data.title}</h1>
<h2>Wersja: {data.version} / Środowisko: {data.environment}</h2>

<style>
</style>
