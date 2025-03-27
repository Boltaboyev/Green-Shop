import Loader from "../../../../../generic/loader"
import type {CategoryType, QueryType2} from "../../../../../@types"
import {useQueryHandler} from "../../../../../hooks/useQuery"
import {useSearchParamsHandler} from "../../../../../hooks/useSearchParams"

const CategoryItem = () => {
    const {setParam, getParam} = useSearchParamsHandler()
    const range_min = getParam("range_min") || 0
    const range_max = getParam("range_max") || 1000
    const sort = getParam("sort") || "default-sorting"
    const type = getParam("type") || "all-plants"
    const category = getParam("category") || "house-plants"

    const {data, isLoading, isError}: QueryType2<CategoryType[]> =
        useQueryHandler({
            url: "flower/category",
            pathname: "category",
        })

    const {category_loader} = Loader()

    return (
        <div className="flex flex-col gap-[16px] ml-2">
            {isLoading || isError
                ? category_loader()
                : data?.map((value) => (
                      <div
                          onClick={() =>
                              setParam({
                                  category: value.route_path,
                                  range_min,
                                  range_max,
                                  sort,
                                  type,
                              })
                          }
                          key={value._id}
                          className={`${
                              category === value.route_path &&
                              "*:text-[#45a358]"
                          } flex justify-between items-center gap-[15px]`}>
                          <h3 className="hover:text-[#46a358] cursor-pointer text-[#3d3d3d] text-[15px] font-medium">
                              {value.title}
                          </h3>
                          <h3>({Math.abs(value.count)})</h3>
                      </div>
                  ))}
        </div>
    )
}

export default CategoryItem
