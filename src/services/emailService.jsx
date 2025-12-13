import emailjs from "@emailjs/browser";

export async function emailService({templateId, params}) {
    // params = {...params, email_client: data.email}
    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            templateId,
            params,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        return { success: true, response };
    } catch (error) {
        return { success: false, error };
    }
}
