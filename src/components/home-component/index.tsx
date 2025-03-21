// components
import Blog from "./blog"
import DoubleCard from "./double-card"
import Hero from "./hero"
import PlantList from "./plant-list"

const HomeComponent = () => {
    return (
        <>
            <Hero />
            <PlantList />
            <DoubleCard />
            <Blog/>
        </>
    )
}

export default HomeComponent
