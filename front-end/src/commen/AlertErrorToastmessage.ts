export const AlertErrorToastmessage = (toast: any, error?: any) => {
    const message =
        error?.response?.data?.message || "Something went wrong";
    if (Array.isArray(error?.response?.data?.message)) {
        error?.response?.data?.message.forEach((message: string) => {
            toast.add({
                severity: "error",
                summary: "Error",
                detail: message,
                life: 3000,
            });
        });
    }
    else {

        toast.add({
            severity: "error",
            summary: "Error",
            detail: message,
            life: 3000,
        });
    }
};
