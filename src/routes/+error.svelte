<script lang="ts">
    import {page} from "$app/stores";
</script>

<h1>Błąd {$page.status}</h1>
<h2>{$page.error?.message}</h2>

{#if $page.status >= 500}
    <h2>Spróbuj ponownie później</h2>
{/if}

<style>
    h1 {
        margin-top: 5rem;
        width: 100%;
        font-size: 4em;
    }
    h2 {
        font-size: 2em;
    }
</style>