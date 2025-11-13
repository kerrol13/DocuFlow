import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const MainSkeleton = () => {
    return (
        <div className=" w-full h-full max-w-3xl mx-auto px-6 py-19 ">
            <SkeletonTheme baseColor="#d9d9d9" highlightColor="#a5a5a5">
                <Skeleton borderRadius={0} count={1} className="h-18" />
                <div className="w-[350px]">
                    <Skeleton borderRadius={0} count={1} className="h-5 mt-5 " />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-13 w-[140px]">
                    <Skeleton borderRadius={0} count={1} className="h-5" />
                    <Skeleton borderRadius={0} count={1} className="h-5" />
                </div>
                <div className="grid grid-cols-2 gap-1 w-[200px]">
                    <Skeleton borderRadius={0} count={1} className="h-19 mt-[130px]" style={{ width: 70 }} />
                    <Skeleton borderRadius={0} count={1} className="h-12 mt-[158px]" style={{ width: 250 }} />
                </div>
                <div className="ml-[102px] mt-8">
                    <Skeleton borderRadius={0} count={1} className="h-5 " />
                    <Skeleton borderRadius={0} count={1} className="h-5 mt-7" />
                    <Skeleton borderRadius={0} count={1} className="h-5 mt-7" />
                </div>
            </SkeletonTheme>
        </div>
    )
}
export default MainSkeleton