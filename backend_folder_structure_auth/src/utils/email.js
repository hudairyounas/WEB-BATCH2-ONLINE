import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export const sendEmail = async (email) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Welcome to Future Plix",
        text: "Thank you for joining Future Plix",
        html: "<h1>Thank you for joining Future Plix</h1>",
    })
}
