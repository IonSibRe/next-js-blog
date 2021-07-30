import Head from "next/head";
import Posts from "../components/Posts";
import fs from "fs";
import path from "path";

export default function Home({ posts }) {
	return (
		<div>
			<Head>
				<title>Next Blog</title>
			</Head>
			<Posts posts={posts} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=6"
	);
	let posts = await res.json();

	const imgs = fs
		.readdirSync(path.join("public", "img"))
		.map((img) => `/img/${img}`);

	posts = posts.map((post, index) => ({ ...post, img: imgs[index] }));

	return {
		props: {
			posts,
		},
	};
}
