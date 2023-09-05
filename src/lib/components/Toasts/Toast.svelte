<script lang="ts">
	import Icon from '@iconify/svelte';
	import { dismissToast } from '$lib/stores/appStore';
	import type { Toast } from '$lib/types/toasts';

	export let text: Toast['text'];
	export let id: Toast['id'];
	export let type: Toast['type'];
	export let isDismissable: Toast['isDismissable'] = false;
</script>

<span
	{id}
	class="relative p-2 border rounded-lg noisy-bg min-w-[16rem] text-center"
	class:success={type === 'success'}
	class:info={type === 'info'}
	class:warning={type === 'warning'}
	class:error={type === 'error'}
>
	{#if isDismissable}
		<button class="absolute cursor-pointer top-3 right-1" on:click={() => dismissToast({ id })}>
			<Icon icon="bi:x-circle" class="w-4 h-4" />
		</button>
	{/if}

	{text}
</span>

<style>
	.success {
		@apply bg-green-500 text-green-50 border-green-50;
	}

	.info {
		@apply bg-cyan-600 text-blue-50 border-blue-50;
	}

	.warning {
		@apply bg-yellow-500 text-yellow-50 border-yellow-50;
	}

	.error {
		@apply bg-red-500 text-red-50 border-red-50;
	}
</style>
