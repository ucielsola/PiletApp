<script>
	import appStore, { openMenu, closeMenu } from '$lib/stores/appStore';

	const handleClick = () => {
		if ($appStore.isMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};
</script>

<button class="flex flex-col gap-0.5 p-5" on:click={handleClick}>
	<div class="w-4 h-0.5 rounded-xl bg-cyan-400/80" class:open-top={$appStore.isMenuOpen} />
	<div class="w-4 h-0.5 rounded-xl bg-cyan-400/80" class:opacity-0={$appStore.isMenuOpen} />
	<div class="w-4 h-0.5 rounded-xl bg-cyan-400/80" class:open-bottom={$appStore.isMenuOpen} />
</button>

<style>
	div {
		transition: all 0.2s ease-in-out;
	}
	.open-top {
		transform: rotate(45deg) translate(0.3rem, 0rem);
	}

	.open-bottom {
		transform: rotate(-45deg) translate(0.35rem, -0.05rem);
	}
</style>
