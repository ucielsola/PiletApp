import { get, writable } from 'svelte/store';

import type { Route } from '$lib/types/routes';
import { appRoutes } from '$lib/config/appRoutes';
import type { Toast } from '$lib/types/toasts';
import { nanoid } from 'nanoid';


export const appStore = writable<{
    currentPage?: Route;
    isMenuOpen: boolean;
    routes: Route[];
    showExitToast: boolean;
    toasts: Toast[]
}>({
    currentPage: appRoutes[0],
    isMenuOpen: false,
    routes: appRoutes,
    showExitToast: false,
    toasts: []
});

// Store actions

export const closeMenu = () => {
    appStore.update((store) => ({
        ...store,
        isMenuOpen: false
    }));
};

export const openMenu = () => {
    appStore.update((store) => ({
        ...store,
        isMenuOpen: true
    }));
};

export const updateRoute = (path: string) => {
    const { routes } = get(appStore);
    const currentRoute = routes.find((route) => route.path === path);

    if (!currentRoute) return;

    appStore.update((store) => ({
        ...store,
        currentPage: currentRoute
    }));
};

export const toggleExitToast = () => {
    appStore.update((store) => ({
        ...store,
        showExitToast: !store.showExitToast
    }));
};


export const showToast = ({
    text,
    type,
    timeout = 2000,
    isDismissable = true
}: {
    text: string;
    type: Toast['type'];
    timeout?: number;
    isDismissable?: boolean;
}) => {
    const newToast: Toast = { text, type, id: nanoid(), timeout, isDismissable };

    appStore.update((state) => ({
        ...state,
        toasts: [...state.toasts, newToast]
    }));

    const timeoutId: NodeJS.Timeout = setTimeout(() => {
        dismissToast({ id: newToast.id });

        clearTimeout(timeoutId);
    }, timeout);
};

export const dismissToast = ({ id }: { id: string }) => {
    appStore.update((state) => ({
        ...state,
        toasts: state.toasts.filter((t) => t.id !== id)
    }));
};

export default appStore;