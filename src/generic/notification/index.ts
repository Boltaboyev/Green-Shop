import {notification} from "antd"

type NotificationType =
    | "login"
    | "register"
    | "password"
    | 406
    | 409
    | "coupon"
    | "coupon_404"
    | "success_coupon"
    | "add"
    | "delete"

const notificationApi = () => {
    const notify = (props: NotificationType) => {
        switch (props) {
            case "login":
                return notification.success({message: "Logged in successfully"})
            case "register":
                return notification.success({
                    message: "Registered successfully",
                })
            case 406:
                return notification.error({
                    message: "This email already exists !",
                })
            case 409:
                return notification.error({
                    message: "Incorrect login or password ! ",
                })
            case "coupon":
                return notification.info({
                    message: "Please enter a coupon code",
                })
            case "coupon_404":
                return notification.error({message: "Coupon not found !"})
            case "success_coupon":
                return notification.success({
                    message: "Coupon successfully applied",
                })
            case "add":
                return notification.success({
                    message: "Product added to cart",
                })
            case "delete":
                return notification.info({
                    message: "Removed from cart !",
                })
            default:
                break
        }
    }
    return notify
}

export {notificationApi}
