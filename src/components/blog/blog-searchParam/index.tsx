import {Input} from "antd"

import {useSearchParamsHandler} from "../../../hooks/useSearchParams"

const BlogSearch = () => {
    const {Search} = Input

    const {setParam} = useSearchParamsHandler()

    const onSearch = (e: string) => {
        setParam({search: e})
    }

    return (
        <div className="w-[70%] m-auto">
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
            />
        </div>
    )
}

export default BlogSearch
