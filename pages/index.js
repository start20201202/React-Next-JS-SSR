import Link from "next/link";

const Index = () => {
	return (
		<div>
			<div className="navbar">
				<Link href="/" className="link">
					Главная
				</Link>
				<Link href="/users" className="link">
					Пользователи
				</Link>
			</div>
			<h1>Главная страница</h1>
			<style jsx>
				{`
					.navbar {
						background: blue;
						padding: 15px;
					}

					.link {
						text-decoration: none;
						color: white;
						font-size: 20px;
						margin: 10px;
					}
				`}
			</style>
		</div>
	);
};

export default Index;
