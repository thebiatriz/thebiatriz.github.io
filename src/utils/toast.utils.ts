/* eslint-disable */
export class ToastsMessages {
    static showSuccessToast(message: string, summary: string, context: any) {
        context.$toast.add({ severity: 'success', summary: summary, detail: message, life: 3000 });
    }

    static showGeneralErrorToast(message: string, summary: string) {
       return { severity: 'error', summary: summary, detail: message, life: 3000 };
    }

    static showPersonalizedErrorToast(message: string, summary: string) {
        return { severity: 'error', summary: summary, detail: message, life: 5000 };
    }
}