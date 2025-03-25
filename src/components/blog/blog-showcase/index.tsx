import {useReduxDispatch} from "../../../hooks/useRedux"
import {setAuthorizationModalVisibility} from "../../../redux/modal-slice"

// img
import img from "../../../assets/img/blog-header.png"

const BlogHeader = () => {
    const dispatch = useReduxDispatch()
    return (
        <div className="flex flex-col justify-center items-center gap-[20px]">
            <div className="w-full h-fit rounded-2xl overflow-hidden">
                <img
                    src={img}
                    alt=""
                    className="h-full w-full object-contain rounded-xl"
                />
            </div>

            <h1 className="font-bold text-center text-6xl leading-[130%] max-[730px]:text-4xl max-[430px]:text-2xl">
                Monetize your content <br /> with
                <span className="text-[#46A358]"> GreenShop</span>
            </h1>
            <p className="text-center w-[70%] leading-[140%] text-[#3d3d3d] font-medium max-[730px]:w-[100%] max-[730px]:font-normal max-[730px]:text-[14px]">
                GreenShop - a platform for buying and selling, publishing and
                monetizing all types of flowers: articles, notes, video, photos,
                podcasts or songs.
            </p>
            <button
                onClick={() =>
                    dispatch(
                        setAuthorizationModalVisibility({
                            open: true,
                            loading: false,
                        })
                    )
                }
                className="bg-[#46A358] rounded-md text-white p-[8px_25px] max-[335px]:w-full">
                Join GreenShop
            </button>
        </div>
    )
}

export default BlogHeader
