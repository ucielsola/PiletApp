<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import appStore from '$lib/stores/appStore';

	$: routes = $appStore.routes.filter((route) => route.path !== '/');
</script>

<div class="flex gap-4">
	{#each routes || [] as route}
		<Card title={route.title} icon={route.icon || ''} url={route.path} />
	{/each}
</div>
