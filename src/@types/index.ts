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

export interface QueryType<T> {
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
}
