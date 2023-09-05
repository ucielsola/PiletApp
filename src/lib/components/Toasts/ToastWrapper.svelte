<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import appStore from '$lib/stores/appStore';

	import Toast from './Toast.svelte';
</script>

<div
	class="fixed z-50 flex flex-col items-center justify-center w-full gap-2 transition-all duration-100 bottom-6"
>
	{#each $appStore.toasts as toast (toast.id)}
		<div
			in:fly={{ delay: 0, duration: 700, x: 0, y: 100, opacity: 0, easing: quintOut }}
			out:fly={{ delay: 0, duration: 700, x: 0, y: -30, opacity: 0, easing: quintOut }}
		>
			<Toast {...toast} />
		</div>
	{/each}
</div>
