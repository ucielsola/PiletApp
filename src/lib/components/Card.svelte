<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let title: string;
	export let id: string = '';
	export let url: string = '';
	export let icon: string;

	const handleClick = () => {
		if (url) {
			goto(url);
		} else {
			dispatch('click', id);
		}
	};
</script>

<button
	on:click={handleClick}
	class="flex flex-col items-center gap-2 p-3 rounded-lg bg-cyan-300 border-2 border-cyan-100 shadow-lg active:scale-95 transition-transform duration-100"
>
	<Icon {icon} class="w-12 h-12" />

	<span>
		{title}
	</span>
</button>
