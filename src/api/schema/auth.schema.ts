import { z } from 'zod'


export const AuthSchema = z.object({
    body: z.object({
        email: z.string({ required_error: 'email is required' })
            .email({
            message: 'Invalid email address'
        }),
        password: z.string({
            required_error: 'password is required',
        })
    })
})

export type AuthType = z.infer<typeof AuthSchema>