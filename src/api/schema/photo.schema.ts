import { z } from 'zod'


export const CreatePhotoSchema = z.object({
    body: z.object({
        description: z.string(
            { required_error: 'description is required' })
    })
})

export type CreatePhotoType = z.infer<typeof CreatePhotoSchema>