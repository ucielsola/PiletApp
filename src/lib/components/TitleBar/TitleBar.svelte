<script lang="ts">
	import { navStore } from '$lib/stores/appStore';

	import MenuToggle from './MenuToggle.svelte';
	import NavBar from './NavBar.svelte';

	let navBarWidth: number;
</script>

<div class="relative py-3 px-4 border-b border-cyan-200 text-cyan-100 text-lg bg-cyan-900 w-full">
	{$navStore.currentPage}

	<div
		class="absolute top-0 transition-all duration-200 ease-in-out"
		style={`right: ${$navStore.isMenuOpen ? `${navBarWidth}px` : '0px'}`}
	>
		<MenuToggle />
	</div>
</div>

<div
	class={`fixed w-fit h-full top-0 transition-all duration-200 ease-in-out 
    ${$navStore.isMenuOpen ? `right-0` : '-right-[100vw]'}`}
	bind:clientWidth={navBarWidth}
>
	<NavBar />
</div>
