import {notification} from "antd"

type NotificationType = "login" | "register" | "password"

const notificationApi = () => {
    const notify = (props: NotificationType) => {
        switch (props) {
            case "login":
                return notification.success({message: "Login successfully"})
            case "register":
                return notification.success({message: "Register successfully"})
            case "password":
                return notification.error({
                    message: "Confirm password is not match ! ",
                })
            default:
                break
        }
    }
    return notify
}

export {notificationApi}
