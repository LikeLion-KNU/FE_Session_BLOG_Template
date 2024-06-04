import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const Post = ({ id, title, author, likes, createdAt, content }) => {
    const navigate = useNavigate();

	return (
		<div className="container mx-auto px-36 py-12 flex flex-col">
			<div className="flex justify-between items-center">
				<div className="pb-2">#{id}번째 게시글</div>
				<button type="button" onClick={() => navigate(-1)}>뒤로가기</button>
			</div>

			<div className="text-4xl font-bold pb-2">{title}</div>

			<div className="text-base text-gray-500 flex justify-between items-center">
				<span>{author} | {dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
				<span>❤️ {likes}</span>
			</div>

			<hr className="my-4 border-black/25"/>

			<div className="py-4">
				<p>{content}</p>
			</div>
		</div>
	);
};