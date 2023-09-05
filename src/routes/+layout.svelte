<script lang="ts">
	import { App } from '@capacitor/app';

	import '../app.css';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import TitleBar from '$lib/components/TitleBar/TitleBar.svelte';

	import { appStore, updateRoute, closeMenu, showToast } from '$lib/stores/appStore';
	import { browser } from '$app/environment';
	import ToastWrapper from '$lib/components/Toasts/ToastWrapper.svelte';

	let titleBarHeight: number;

	$: updateRoute($page.url.pathname);

	$: if (browser) {
		App.addListener('backButton', handleBackButton);
	}

	let exitAppTimeout: NodeJS.Timeout | null = null;

	const handleBackButton = ({ canGoBack }: { canGoBack: boolean }) => {
		if (!browser) return;

		if (!canGoBack) {
			if (!exitAppTimeout) {
				showToast({
					text: 'Presiona nuevamente para salir',
					type: 'info',
					isDismissable: false,
				});

				exitAppTimeout = setTimeout(() => {
					exitAppTimeout = null;
				}, 2000);
			} else {
				clearTimeout(exitAppTimeout);
				exitAppTimeout = null;
				App.exitApp();
			}
		} else {
			window.history.back();
		}
	};
</script>

<svelte:head>
	<title>{$appStore.currentPage?.title}</title>
</svelte:head>

<ToastWrapper />

<div class="flex flex-col h-full">
	<div class="fixed top-0 w-full z-40" bind:clientHeight={titleBarHeight}>
		<TitleBar />
	</div>

	<div class="relative h-full" style={`padding-top: ${titleBarHeight}px`}>
		<button
			class="absolute z-30 w-full h-full bg-black transition-opacity duration-200 ease-in-out"
			class:hidden={!$appStore.isMenuOpen}
			class:opacity-50={$appStore.isMenuOpen}
			class:opacity-0={!$appStore.isMenuOpen}
			on:click={closeMenu}
		/>

		{#key $appStore.currentPage?.path}
			<div class="h-full overflow-x-hidden px-4 py-2" in:fade>
				<slot />
			</div>
		{/key}
	</div>
</div>
