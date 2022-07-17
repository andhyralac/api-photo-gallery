import { z } from 'zod'


export const CreateUserSchema = z.object({
    body: z.object({
        full_name: z.string({
            required_error: 'full name is required',
            invalid_type_error: 'full name must be a string'
        }),
        nickname: z.string({
            required_error: 'nickname is required',
            invalid_type_error: 'nickname must be a string'
        }),
        email: z.string({ required_error: 'email is required' })
            .email({
            message: 'Invalid email address'
        }),
        password: z.string({
            required_error: 'password is required',
        }).min(8, { message: 'Must be 8 or more characters long'}),
        profile_picture: z.string({
            required_error: 'profile_picture is required',
        }).optional()
    })
})

export type CreateUserType = z.infer<typeof CreateUserSchema>