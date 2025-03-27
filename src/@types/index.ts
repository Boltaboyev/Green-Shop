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

export interface CategoryType {
    count: number
    created_at: string
    created_by: string
    route_path: string
    title: string
    _id: string
}

export interface QueryType {
    isLoading: boolean
    isError: boolean
    data?: CartType
}

export interface QueryType2<T> {
    isLoading: boolean
    isError: boolean
    data?: T
}

export interface DiscountType {
    _id: number
    title: string
    discoount_up_to: number
    poster_image_url: string
}

export interface CartType {
    category: string
    comments: string[]
    created_at: string
    created_by: string
    description: string
    detailed_images: string[]
    discount: boolean
    discount_price: string
    main_image: string
    price: number
    rate: number
    short_description: string
    sold_times: number
    tags: string[]
    title: string
    views: number
    __v: number
    _id: string
    count?: number
    userPrice?: number
}

export interface TitleCategoryType {
    id: number
    title: string
    label: string
}

export interface CouponType {
    code: string
    discount_for: number
    id: number
    title: string
}

export interface AuthUser<T> {
    _id?: string
    email?: string
    name?: string
    surname?: string
    profile_photo?: string
    create_account_limit?: number
    phone_number?: string
    wishlist?: T
    username?: string
    billing_address?: T
    followers?: string[]
    permission?: {
        create: boolean
        update: boolean
        delete: boolean
        read: boolean
    }
}

export interface MakeOrderType {
    name: string
    surname: string
    country: string
    street: string
    state: string
    email: string
    zip: string
    appartment: string
    town: string
    phone_number: string
    comment: string
    payment_method: string
}

export interface BlogType {
    content: string
    created_at: string
    created_by: string
    reaction_length: number
    short_description: string
    title: string
    views: number
    __v: number
    _id: string
}
export interface BlogTypeApi {
    data?: BlogType[]
    isLoading: boolean
    isError: boolean
}
export interface BlogTypeApiItem {
    data?: BlogType
    isLoading: boolean
    isError: boolean
}

export interface UserTypeApi {
    data?: AuthUser<CartType[]>
    isLoading: boolean
    isError: boolean
}

interface BillingAddress {
    country?: string
    town?: string
    street_address?: string
    additional_street_address?: string
    state?: string
    zip?: string
}

export interface OrderType {
    billing_address: BillingAddress
    created_at: string
    created_by: string
    extra_shop_info: {
        total: number
        method: string
    }
    shop_list: CartType[]
    _id: string
}

export interface UserBodyTitleType {
    id: string
    title: string
    Component: React.FC
}
