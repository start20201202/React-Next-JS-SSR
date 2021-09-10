import { useState } from "react";
import Link from "next/link";

const Users = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: "petya" },
		{ id: 2, name: "vasya" },
	]);
	return (
		<div>
			<h1>Страница пользователей</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						(
						<Link href={"/users/${user.id}"}>
							<a>{users.name}</a>
						</Link>
						)
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
