// img
import card1 from "../../../assets/img/blog/1.png"
import card2 from "../../../assets/img/blog/2.png"
import card3 from "../../../assets/img/blog/3.png"
import card4 from "../../../assets/img/blog/4.png"

// icons
import {PiArrowRight} from "react-icons/pi"

const blogPosts = [
    {
        image: card1,
        date: "September 12 | Read in 6 minutes",
        title: "Cactus & Succulent Care Tips",
        description:
            "Cacti are succulents are easy care plants for any home or patio.",
    },
    {
        image: card2,
        date: "September 13 | Read in 2 minutes",
        title: "Top 10 Succulents for Your Home",
        description: "Best in hanging baskets. Prefers medium to high light.",
    },
    {
        image: card3,
        date: "September 15 | Read in 3 minutes",
        title: "Cacti & Succulent Care Tips",
        description:
            "Cacti and succulents thrive in containers and because most are.",
    },
    {
        image: card4,
        date: "September 12 | Read in 6 minutes",
        title: "Best Houseplants Room by Room",
        description:
            "The benefits of houseplants are endless. In addition to..",
    },
]

const Blog = () => {
    return (
        <section className="py-7">
            <div className="container2">
                <div className="flex flex-col justify-center items-center gap-2.5 mb-4">
                    <h1 className="font-bold text-[30px] leading-[53%] text-center text-[#3d3d3d] max-[400px]:text-[20px]">
                        Our Blog Posts
                    </h1>
                    <p className="font-normal text-[14px] leading-[171%] text-center text-[#727272] max-[400px]:leading-[120%]">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants.
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-7 max-[1000px]:grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-[20px] *:max-[540px]:border *:max-[540px]:border-green-200 *:max-[540px]:rounded-lg *:max-[540px]:p-2">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 group justify-between">
                            <div className="flex justify-center items-center h-[200px] overflow-hidden rounded-md">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <small className="font-medium text-[14px] leading-[114%] text-[#46a358] max-[540px]:text-[12px]">
                                {post.date}
                            </small>
                            <h3 className="font-bold text-[20px] leading-[130%] text-[#3d3d3d] max-[540px]:text-[18px]">
                                {post.title}
                            </h3>
                            <p className="font-normal text-[14px] leading-[127%] text-[#727272]">
                                {post.description}
                            </p>
                            <button className="text-[#3d3d3d] flex justify-start items-center gap-2.5 hover:text-[#46a358]">
                                Read More <PiArrowRight />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
