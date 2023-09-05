<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import TitleBar from '$lib/components/TitleBar/TitleBar.svelte';

	import { navStore, updateRoute, closeMenu } from '$lib/stores/appStore';

	let titleBarHeight: number;

	$: updateRoute($page.url.pathname);
</script>

<div class="flex flex-col h-full">
	<div class="fixed top-0 w-full z-50" bind:clientHeight={titleBarHeight}>
		<TitleBar />
	</div>

	<div class="relative h-full" style={`padding-top: ${titleBarHeight}px`}>
		<button
			class="absolute z-40 w-full h-full bg-black transition-opacity duration-200 ease-in-out"
			class:hidden={!$navStore.isMenuOpen}
			class:opacity-50={$navStore.isMenuOpen}
			class:opacity-0={!$navStore.isMenuOpen}
			on:click={closeMenu}
		/>

		{#key $navStore.currentPath}
			<div class="h-full overflow-x-hidden px-4 py-2" in:fade>
				<slot />
			</div>
		{/key}
	</div>
</div>
