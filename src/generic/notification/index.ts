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
                return notification.success({message: "Login successfully"})
            case "register":
                return notification.success({message: "Register successfully"})
            case 406:
                return notification.error({
                    message: "The email already exists !",
                })
            case 409:
                return notification.error({
                    message: "Login or password wrong ! ",
                })
            case "coupon":
                return notification.error({message: "Place eneter coupon"})
            case "coupon_404":
                return notification.error({message: "Coupon is not defined !"})
            case "success_coupon":
                return notification.success({message: "Coupon success !"})
            case "add":
                return notification.success({
                    message: "Added to cart",
                })
            case "delete":
                return notification.success({
                    message: "Deleted from cart !",
                })
            default:
                break
        }
    }
    return notify
}

export {notificationApi}
