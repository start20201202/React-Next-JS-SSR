import { useRouter } from "next/dist/client/router";

export default function () {
	const router = useRouter();

	return (
		<div>
			<h1>Пользователь c id {query.id}</h1>
		</div>
	);
}
