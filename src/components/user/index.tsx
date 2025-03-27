import UserHeader from "./user-header"
import UserBody from "./user-body"

const UserComponent = () => {
    return (
        <section className="py-[30px]">
            <div className="container2">
                <UserHeader />
                <UserBody />
            </div>
        </section>
    )
}

export default UserComponent
