<script lang="ts">
	import type {BackendMeta} from "$lib/rest";

	export let data: BackendMeta;
	const repositoryUrl = REPOSITORY_URL;
	const frontendName = PACKAGE_NAME;
	const frontendVersion = PACKAGE_VERSION;
</script>

<svelte:head>
	<title>MeteALOlogia</title>
</svelte:head>

<h2 style="margin-top: 4rem">MeteALOlogia</h2>
<div class="main-flexbox">
	<div>
		<h2>Frontend</h2>
		<h3><a href={repositoryUrl}>{frontendName}</a><br>v{frontendVersion}<span class="environment">/{import.meta.env.MODE}</span></h3>
		<h2>Backend</h2>
		<h3><a href={data.repository_url}>{data.title}</a><br>v{data.version}<span class="environment">/{data.environment}</span></h3>
	</div>
	<div class="readme">
		{@html data.readme}
	</div>
</div>

<style>
	span.environment {
		color: grey;
	}
	.main-flexbox {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.main-flexbox > div {
		background-color: #fff;
		border-radius: 10px;
		width: 30%;
		padding: 2rem;
		margin: 0.5rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s, box-shadow 0.3s;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.main-flexbox > .readme {
		width: 50%;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s, box-shadow 0.3s;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 768px) {
		.main-flexbox > div {
			width: 100%;
			margin: 0;
			padding: 1rem;
		}
		.main-flexbox > .readme {
			width: 100%;
		}
	}

	@media (prefers-color-scheme: dark) {
		.main-flexbox > div {
			background-color: #2c2c2e;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
		}
		.main-flexbox > div:hover {
			box-shadow: 0 6px 18px rgba(0, 0, 0, 0.7);
		}
	}
</style>
