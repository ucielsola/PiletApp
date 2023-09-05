<script lang="ts">
	import navStore from '$lib/stores/appStore';
	import Icon from '@iconify/svelte';
</script>

<nav class="flex flex-col gap-2 h-full bg-cyan-700 border-l p-2 pr-10 text-xs w-36">
	{#each $navStore.routes as route}
		{@const isActive = route.path === $navStore.currentPath}
		<a href={route.path} class:text-cyan-200={isActive} class="flex items-center gap-0.5 w-full">
			<Icon icon="bx:chevron-right" class={!isActive ? 'w-0 h-0' : 'w-2 h-2'} />

			<span>
				{route.title}
			</span>
		</a>
	{/each}
</nav>
