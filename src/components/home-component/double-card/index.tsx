// img
import card1 from "../../../assets/img/card/1.png"
import card2 from "../../../assets/img/card/2.png"
import line from "../../../assets/img/card/line.png"

// icons
import {PiArrowRight} from "react-icons/pi"

const DoubleCard = () => {
    return (
        <section className="py-[30px]">
            <div className="container2 grid grid-cols-2 gap-[20px] max-[960px]:grid-cols-1">
                <div className="flex justify-between items-center gap-[20px] relative px-[15px] rounded-xl overflow-hidden border border-[#e5e5e5] max-[480px]:flex-col-reverse max-[480px]:py-[15px]">
                    <div className="flex justify-center items-center h-[250px] max-[480px]:h-[170px]">
                        <img
                            src={card1}
                            alt=""
                            className="h-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-end gap-[14px] max-[480px]:text-center max-[480px]:items-center">
                        <h1 className="font-bold leading-[133%] uppercase text-[#3d3d3d] max-[310px]:text-[14px]">
                            Summer cactus & succulents
                        </h1>
                        <p className="font-normal text-[14px] leading-[171%] text-[#727272]">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants
                        </p>

                        <button className="bg-[#46a358] text-white flex justify-center items-center p-[8px_25px] rounded-md max-[410px]:w-full">
                            Find More <PiArrowRight />
                        </button>
                    </div>

                    <img
                        src={line}
                        alt=""
                        className="absolute left-0 bottom-0"
                    />
                </div>

                <div className="flex justify-between items-center gap-[20px] relative px-[15px] rounded-xl overflow-hidden border border-[#e5e5e5] max-[480px]:flex-col-reverse max-[480px]:py-[15px]">
                    <div className="flex justify-center items-center h-[250px] max-[480px]:h-[170px]">
                        <img
                            src={card2}
                            alt=""
                            className="h-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-end gap-[14px] max-[480px]:text-center max-[480px]:items-center">
                        <h1 className="font-bold leading-[133%] uppercase text-[#3d3d3d] max-[310px]:text-[14px]">
                            Styling Trends & much more
                        </h1>
                        <p className="font-normal text-[14px] leading-[171%] text-[#727272]">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants
                        </p>

                        <button className="bg-[#46a358] text-white flex justify-center items-center p-[8px_25px] rounded-md max-[410px]:w-full">
                            Find More <PiArrowRight />
                        </button>
                    </div>

                    <img
                        src={line}
                        alt=""
                        className="absolute left-0 bottom-0"
                    />
                </div>
            </div>
        </section>
    )
}

export default DoubleCard
