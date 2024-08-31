<script>
	export let data;
</script>

<svelte:head>
	<title>MeteALOlogia</title>
</svelte:head>

<section>
	<div>
		<h1>Frontend: {PACKAGE_NAME}</h1>
		<h2>Wersja: {PACKAGE_VERSION}<br>Środowisko: {import.meta.env.MODE}</h2>
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
		@media (min-width: 250px) {
			font-size: 3rem;
		}
		@media (min-width: 1000px) {
			font-size: 4rem;
		}
	}
</style>
