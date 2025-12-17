const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to, subject, text) {
    try {
        await resend.emails.send({
            from: "Stock Trading <no-reply@zerotrade-kunalverma.site>",
            to,
            subject,
            html: `<p>${text}</p>`,
        });
    } catch (error) {
        console.error("Resend email error:", error);
        throw error;
    }
}

module.exports = sendEmail;
