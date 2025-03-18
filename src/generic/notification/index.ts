import {notification} from "antd"

type NotificationType = "login" | "register" | "password" | 406 | 409

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
            default:
                break
        }
    }
    return notify
}

export {notificationApi}
