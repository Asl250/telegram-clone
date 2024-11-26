import { z } from "zod"

export const emailSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email'}),
})
export const otpSchema = z
	.object({ otp: z.string().min(6, { message: "Your one-time password must be 6 characters.", }), })
	.merge(emailSchema)

export const massageSchema = z.object({
	text: z.string().min(1, { message: "Massage cannot be empty", }),
	image: z.string().optional(),
})
