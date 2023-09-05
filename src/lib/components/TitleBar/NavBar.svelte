<script lang="ts">
	import appStore from '$lib/stores/appStore';
	import Icon from '@iconify/svelte';
</script>

<nav class="flex flex-col gap-2 h-full bg-cyan-700 border-l p-2 pr-10 w-36">
	{#each $appStore.routes as route}
		{@const isActive = route.path === $appStore.currentPage?.path}
		<a href={route.path} class:text-cyan-200={isActive} class="flex items-center gap-0.5 w-full">
			<Icon icon="bx:chevron-right" class={!isActive ? 'w-0 h-0' : 'w-2 h-2'} />

			<span>
				{route.title}
			</span>
		</a>
	{/each}
</nav>
