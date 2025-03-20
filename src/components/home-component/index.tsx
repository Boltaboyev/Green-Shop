// components
import Blog from "./blog"
import DoubleCard from "./double-card"
import Footer from "./footer"
import Hero from "./hero"
import PlantList from "./plant-list"

const HomeComponent = () => {
    return (
        <div>
            <Hero />
            <PlantList />
            <DoubleCard />
            <Blog/>
            <Footer />
        </div>
    )
}

export default HomeComponent
