import type { Route } from "$lib/types/routes";

export const appRoutes: Route[] = [
    {
        path: "/",
        title: "Inicio",
    },
    {
        path: "/record",
        title: "Registro",
        icon: "bx:stopwatch"
    },
    {
        path: "/history",
        title: "Historial",
        icon: "bx:history"
    }
]