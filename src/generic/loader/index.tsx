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

    return {category_loader, discount_loader, card_loader}
}

export default Loader
