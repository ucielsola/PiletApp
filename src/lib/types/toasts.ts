export interface Toast {
    id: string;
    text: string;
    type: 'error' | 'success' | 'warning' | 'info';
    timeout: number;
    isDismissable: boolean;
};