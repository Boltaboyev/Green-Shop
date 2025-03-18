import {FC} from "react"
import {HeroSliderType} from "../../../../@types"

const HeroItem: FC<HeroSliderType> = ({
    subTitle,
    title,
    description,
    buttonText,
    big_img_url,
}) => {
    return (
        <div className="bg-[#f5f5f5] flex items-center justify-between p-[20px] h-[450px] max-[900px]:flex-col max-[900px]:h-fit">
            <div className="flex flex-col gap-[15px]">
                <h3 className="text-[#3D3D3D] font-medium max-[440px]:text-[14px] max-[330px]:text-[12px]">
                    {subTitle}
                </h3>

                <h2 className="font-bold w-[76%] leading-[110%] text-[#3D3D3D] uppercase text-[4rem] max-[1095px]:w-full max-[690px]:text-[2rem]">
                    {title} <span className="text-[#46A358]">Planet</span>
                </h2>

                <p className="w-3/5 text-[#727272] max-[600px]:w-full">
                    {description}
                </p>

                <button className="rounded-lg bg-[#46A358] text-white font-medium uppercase p-[10px_30px] w-fit max-[440px]:hidden">
                    {buttonText}
                </button>
            </div>

            <div className="relative h-full ">
                <img
                    src={big_img_url}
                    alt="big"
                    className="max-[900px]:h-[200px] object-contain"
                />
            </div>

            <button className="rounded-lg bg-[#46A358] text-white font-medium uppercase p-[10px_30px] hidden max-[440px]:block w-full mb-4">
                {buttonText}
            </button>
        </div>
    )
}

export default HeroItem
