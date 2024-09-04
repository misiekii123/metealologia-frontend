<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" href="favicon.svg">
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
