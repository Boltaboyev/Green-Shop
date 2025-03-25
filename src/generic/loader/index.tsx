import {Skeleton} from "antd"

const Loader = () => {
    const category_loader = () => {
        return Array.from({length: 9}).map((_, idx) => (
            <div key={idx}>
                <Skeleton.Input className="!w-full !h-[20px]" />
            </div>
        ))
    }

    const discount_loader = () => {
        return (
            <div className="w-full">
                <Skeleton.Input className="!w-full !h-[40px]" />
                <Skeleton.Input className="!w-full !h-[40px] mt-[5px]" />
                <Skeleton.Image className="!w-full !h-[200px] !mt-[10px]" />
            </div>
        )
    }

    const card_loader = () => {
        return Array.from({length: 9}).map((_, idx) => (
            <div key={idx} className="flex flex-col gap-[10px]">
                <Skeleton.Image className="!w-full !h-[250px]" />
                <Skeleton.Input />
            </div>
        ))
    }

    const image_loading = () => {
        return Array.from({length: 4}).map((_, idx) => (
            <Skeleton.Image
                key={idx}
                active
                className="!w-[90px] !h-[90px] max-[600px]:!h-[60px] max-[600px]:!w-[60px]"
            />
        ))
    }

    const blog_loader = () => {
        return Array.from({length: 6}).map((_, idx) => (
            <div key={idx}>
                <Skeleton.Input
                    active
                    className="my-[15px] !h-[25px] !w-[70%]"
                />
                {Array.from({length: 6}).map((_, idx) => (
                    <Skeleton.Input
                        key={idx}
                        active
                        className="!w-full my-[5px] !h-[20px]"
                    />
                ))}
            </div>
        ))
    }

    const blog_userPostLoader = () => {
        return (
            <div>
                <div className="flex gap-4">
                    <Skeleton.Avatar active />
                    <Skeleton.Input active />
                </div>
                <div>
                    <Skeleton.Input
                        active
                        className="my-[15px] !h-[25px] !w-[70%]"
                    />
                    {Array.from({length: 10}).map((_, idx) => (
                        <Skeleton.Input
                            key={idx}
                            active
                            className="!w-full my-[10px] !h-[20px]"
                        />
                    ))}
                </div>
            </div>
        )
    }

    return {
        category_loader,
        discount_loader,
        card_loader,
        image_loading,
        blog_loader,
        blog_userPostLoader,
    }
}

export default Loader
