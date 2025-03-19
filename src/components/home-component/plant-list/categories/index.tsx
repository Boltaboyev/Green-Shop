import type {CategoryType, QueryType} from "../../../../@types"
import {useQueryHandler} from "../../../../hooks/useQuery"
import {useState} from "react"

import Loader from "../../../../generic/loader"
import Discount from "./discount"
import Price from "./price-filter"

// icons
import {PiSlidersHorizontal} from "react-icons/pi"

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false)

    const {data, isLoading, isError}: QueryType<CategoryType[]> =
        useQueryHandler({
            url: "/flower/category",
            pathname: "category",
        })

    const {category_loader} = Loader()

    return (
        <>
            {/* filter btn */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="justify-between text-white font-medium items-center gap-[10px] w-full p-[10px_20px] rounded-lg bg-[#46a358] hidden max-[750px]:flex">
                <p>Filter</p>
                <PiSlidersHorizontal className="text-[24px]" />
            </button>

            {/* Sidebar (Filter) */}
            <aside
                className={`bg-[#f2f2f2] w-[330px] p-[15px] rounded-md max-[750px]:w-full overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-fit p-[15px]" : "max-[750px]:!h-0 max-[750px]:!p-0"
                }`}>
                <div className="p-2 flex flex-col gap-[10px]">
                    <h3 className="text-[#3d3d3d] font-bold">Categories</h3>

                    <div className="flex flex-col gap-[16px] ml-2">
                        {isLoading || isError
                            ? category_loader()
                            : data?.map((value) => (
                                  <div
                                      key={value._id}
                                      className="flex justify-between items-center gap-[15px]">
                                      <h3 className="hover:text-[#46a358] cursor-pointer text-[#3d3d3d] text-[15px] font-medium">
                                          {value.title}
                                      </h3>
                                      <h3>({Math.abs(value.count)})</h3>
                                  </div>
                              ))}
                    </div>

                    {/* filter by price */}
                    <Price />

                    {/* discount */}
                    <div className="max-[750px]:hidden">
                        <Discount />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Categories
