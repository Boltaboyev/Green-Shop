import {Slider} from "antd"
import {useState} from "react"

const Price = () => {
    const [price, setPrice] = useState<number[]>([0, 1000])
    return (
        <div className="mt-7 flex flex-col gap-[6px]">
            <h3 className="text-[#3d3d3d] font-bold">Price Range</h3>

            <div className="flex flex-col gap-[10px] ml-2">
                <Slider
                    range
                    defaultValue={price}
                    min={0}
                    max={1000}
                    onChange={(value) => setPrice(value)}
                />
                <div className="flex justify-start items-center">
                    <h3 className="text-[#3d3d3d] font-medium">Price</h3>
                    <span className="text-[#46a358] text-[15px] font-bold ml-4">
                        {price[0]}$ - {price[1]}$
                    </span>
                </div>

                <button className="bg-[#46a358] rounded-lg font-medium text-[#fff] p-[7px_25px]">
                    Filter
                </button>
            </div>
        </div>
    )
}

export default Price
