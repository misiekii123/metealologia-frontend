<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<img src="favicon.svg" alt="meteALOlogia" />
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Strona główna</a>
			</li>
			<li aria-current={$page.url.pathname === '/stations' ? 'page' : undefined}>
				<a href="/stations">Pogoda</a>
			</li>
		</ul>
	</nav>
	<div class="corner">
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		top:0;
		position: fixed;
		overflow: hidden;
		background-color: var(--color-bg-2);
		color: var(--color-text-2);
		box-shadow: 2px 1px 5px #000;
	}
	header.dark {
		background-color: var(--color-bg-2-darker);
	}
	.corner {
		width: 5em;
		height: auto;
		align-content: center;
		display: flex;
		align-items: center;
		padding-left: 0.1rem;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	img {
		width: 2.5rem;
		height: 2.5rem;
		display: block;
		box-shadow: white;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-2);
	}

	li a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
