<script lang="ts">
	import { appStore } from '$lib/stores/appStore';
	import Icon from '@iconify/svelte';

	import MenuToggle from './MenuToggle.svelte';
	import NavBar from './NavBar.svelte';

	let navBarWidth: number;

	const handleBack = () => {
		if ($appStore.currentPage?.path === '/') return;

		history.back();
	};
</script>

<div
	class="relative flex items-center py-3 pl-2 pr-4 border-b border-cyan-200 text-cyan-100 text-lg bg-cyan-900 w-full"
>
	<button on:click={handleBack} class:opacity-0={$appStore.currentPage?.path === '/'}>
		<Icon icon="bx:chevron-left" class="w-6 h-6 -ml-2" />
	</button>

	{$appStore.currentPage?.title}

	<div
		class="absolute top-0 transition-all duration-200 ease-in-out"
		style={`right: ${$appStore.isMenuOpen ? `${navBarWidth}px` : '0px'}`}
	>
		<MenuToggle />
	</div>
</div>

<div
	class={`fixed w-fit h-full top-0 transition-all duration-200 ease-in-out 
    ${$appStore.isMenuOpen ? `right-0` : '-right-[100vw]'}`}
	bind:clientWidth={navBarWidth}
>
	<NavBar />
</div>
