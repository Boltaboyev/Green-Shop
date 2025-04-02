import {notification} from "antd"

type NotificationType =
    | "login"
    | "register"
    | "auth_error"
    | "password"
    | 406
    | 409
    | "coupon"
    | "coupon_404"
    | "success_coupon"
    | "add"
    | "delete"
    | "shop_not"
    | "like"
    | "unlike"
    | "follow"
    | "unfollow"
    | "editProfile"
    | "errorEditProfile"
    | "editAddress"
    | "errorEditAddress"

const notificationApi = () => {
    const notify = (props: NotificationType) => {
        switch (props) {
            case "login":
                return notification.success({
                    message: "Logged in successfully",
                    duration: 1,
                    placement: "top",
                })
            case "register":
                return notification.success({
                    message: "Registered successfully",
                    duration: 1,
                    placement: "top",
                })
            case "auth_error":
                return notification.error({
                    message: "Something went wrong !",
                    duration: 1,
                    placement: "top",
                })
            case 406:
                return notification.error({
                    message: "This email already exists !",
                    duration: 1,
                    placement: "top",
                })
            case 409:
                return notification.error({
                    message: "Incorrect login or password ! ",
                    duration: 1,
                    placement: "top",
                })
            case "coupon":
                return notification.info({
                    message: "Please enter a coupon code",
                    duration: 1,
                    placement: "top",
                })
            case "coupon_404":
                return notification.error({message: "Coupon not found !"})
            case "success_coupon":
                return notification.success({
                    message: "Coupon successfully applied",
                    duration: 1,
                    placement: "top",
                })
            case "add":
                return notification.success({
                    message: "Product added to cart",
                    duration: 1,
                    placement: "top",
                })
            case "delete":
                return notification.info({
                    message: "Removed from cart !",
                    duration: 1,
                    placement: "top",
                })
            case "shop_not":
                return notification.error({message: "Please place an order !"})
            case "like":
                return notification.success({
                    message: "Product added to wishlist",
                    duration: 1,
                    placement: "top",
                })
            case "unlike":
                return notification.info({
                    message: "Product removed from wishlist",
                    duration: 1,
                    placement: "top",
                })
            case "follow":
                return notification.success({
                    message: "You have followed this user.",
                    duration: 1,
                    placement: "top",
                })
            case "unfollow":
                return notification.info({
                    message: "You have unfollowed this user.",
                    duration: 1,
                    placement: "top",
                })
            case "editProfile":
                return notification.success({
                    message: "Profile updated successfully",
                    duration: 1,
                    placement: "top",
                })
            case "errorEditProfile":
                return notification.error({
                    message: "Profile update failed !",
                    duration: 1,
                    placement: "top",
                })

            case "editAddress":
                return notification.success({
                    message: "Address updated successfully",
                    duration: 1,
                    placement: "top",
                })
            case "errorEditAddress":
                return notification.error({
                    message: "Address update failed !",
                    duration: 1,
                    placement: "top",
                })

            default:
                break
        }
    }
    return notify
}

export {notificationApi}
