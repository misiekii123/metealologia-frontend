<script lang="ts">
	export let data: {title: string, version: string, environment: string, repository_url: string};
	const repository_url = REPOSITORY_URL;
	const frontend_name = PACKAGE_NAME;
	const frontend_version = PACKAGE_VERSION;
</script>

<svelte:head>
	<title>MeteALOlogia</title>
</svelte:head>

<h2 style="margin-top: 4rem">MeteALOlogia</h2>
<div class="main-flexbox">
	<div>
		<h2>Frontend</h2>
		<h3><a href={repository_url}>{frontend_name}</a><br>v{frontend_version}<span class="environment">/{import.meta.env.MODE}</span></h3>
		<h2>Backend</h2>
		<h3><a href={data.repository_url}>{data.title}</a><br>v{data.version}<span class="environment">/{data.environment}</span></h3>
	</div>
	<div>
		<h2>Readme coming soon...</h2>
	</div>
</div>

<style>
	span.environment {
		color: grey;
	}
	.main-flexbox {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
	}

	.main-flexbox > div {
		margin: 20px;
		text-align: center;
		width: 45%;
		box-sizing: border-box;
		padding: 2rem;
		border-radius: 25px;
		background-color: var(--color-bg-2);
		color: var(--color-text-2);
	}

	@media (max-width: 768px) {
		.main-flexbox > div {
			width: 90%;
		}
	}
</style>
