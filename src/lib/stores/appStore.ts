import { get, writable } from 'svelte/store';

import type { Route } from '$lib/types/routes';
import { appRoutes } from '$lib/config/appRoutes';


export const navStore = writable<{
    currentPage: string;
    currentPath: string;
    isMenuOpen: boolean;
    routes: Route[];
}>({
    currentPage: 'Lap',
    currentPath: '/',
    isMenuOpen: false,
    routes: appRoutes
});

// Store actions

export const closeMenu = () => {
    navStore.update((store) => {
        return {
            ...store,
            isMenuOpen: false
        };
    });
};

export const openMenu = () => {
    navStore.update((store) => {
        return {
            ...store,
            isMenuOpen: true
        };
    });
};

export const updateRoute = (path: string) => {
    const { routes } = get(navStore);
    const currentRoute = routes.find((route) => route.path === path);

    if (!currentRoute) return;

    navStore.update((store) => {
        return {
            ...store,
            currentPage: currentRoute.title,
            currentPath: path
        };
    });
};

export default navStore;