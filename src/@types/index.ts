export interface FieldType {
    email?: string
    password?: string
    remember?: string
}

export interface RegisterType {
    name?: string
    surname?: string
    email?: string
    password?: string
    confirm_password?: string
}

export interface HeroSliderType {
    id: number
    title: string
    subTitle: string
    description: string
    big_img_url: string
    small_img_url: string
    buttonText: string
}

export interface AuthUser {
    _id?: string
    email?: string
    name?: string
    surname?: string
    profile_photo?: string
    create_account_limit?: number
    phone_number?: string
    wishlist?: []
    username?: string
    country?: string
    town?: string
    street_address?: string
    additional_street_address?: string
    state?: string
    zip?: string
    followers?: string[]
    permission?: {
        create: boolean
        update: boolean
        delete: boolean
        read: boolean
    }
}
