import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const Card = ({ id, title, content, author, likes, createdAt }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white p-5 rounded-2xl shadow cursor-pointer" onClick={() => navigate(`/posts/${id}`)}>
            <h3 className="flex">
                <div className="w-auto text-xl font-bold my-1 whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
            </h3>

            <div className="text-xs text-gray-500 pb-2">{author}</div>
            <div className="text-gray-500 text-sm pb-3">{content}</div>
            <div className="flex justify-between">
                <div className="w-9 shrink-0 text-base">❤️ {likes}</div>
                <div className="text-sm">{dayjs(createdAt).fromNow().toString()}</div>
            </div>
        </div>
    );
};

export const CardSkeleton = () => {
    return (
        <div className="w-full mx-auto bg-white my-5 p-5 rounded-2xl shadow cursor-pointer">
            <div className="relative rounded bg-[#e0e0e0] overflow-hidden w-full h-4 mb-3 "></div>
            <div className="relative rounded bg-[#e0e0e0] overflow-hidden w-full h-4 mb-3 "></div>
            <div className="relative rounded bg-[#e0e0e0] overflow-hidden w-full h-4 mb-3 "></div>
        </div>
    );
};
