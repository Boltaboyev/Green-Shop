import {Select} from "antd"

import {title_category} from "../../../../../utils"
import {useSearchParamsHandler} from "../../../../../hooks/useSearchParams"

const ProductsTitle = () => {
    const {setParam, getParam} = useSearchParamsHandler()
    const category = getParam("category") || "house-plants"
    const range_min = getParam("range_min") || 0
    const range_max = getParam("range_max") || 1000
    const sort = getParam("sort") || "default-sorting"
    const type = getParam("type") || "all-plants"

    const handleChange = (value: string) => {
        setParam({category, range_min, range_max, sort: value, type})
    }

    return (
        <div className="flex justify-between items-center gap-[20px] w-full max-[490px]:flex-col max-[490px]:items-start">
            <div className="flex justify-start items-center gap-[15px]">
                {title_category.map((value) => (
                    <h3
                        className={`${
                            type === value?.label
                                ? "text-[#46a358]"
                                : "text-[#3d3d3d]"
                        } hover:text-[#46a358] cursor-pointer`}
                        onClick={() => {
                            setParam({
                                category,
                                range_min,
                                range_max,
                                sort,
                                type: value?.label,
                            })
                        }}
                        key={value?.id}>
                        {value?.title}
                    </h3>
                ))}
            </div>

            <div className="flex items-center gap-2">
                <p className="max-[490px]:hidden">Sort by:</p>
                <Select
                    className="!w-[150px]"
                    defaultValue={sort}
                    style={{width: 120}}
                    onChange={handleChange}
                    options={[
                        {
                            value: "default-sorting",
                            label: "Default Sorting",
                        },
                        {value: "the-cheapest", label: "The Cheapest"},
                        {value: "most-expensive", label: "Most Expensive"},
                    ]}
                />
            </div>
        </div>
    )
}

export default ProductsTitle
