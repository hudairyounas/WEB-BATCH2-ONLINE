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

export const sendEmail = async (email, otp) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Welcome to Future Plix",
        text: `Your OTP is ${otp}`,
        html: `<h1>Your OTP is ${otp}</h1>`,
    })
}