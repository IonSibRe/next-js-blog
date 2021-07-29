import Head from "next/head";
import Posts from "../components/Posts";

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
		"https://jsonplaceholder.typicode.com/posts?_limit=9"
	);
	const posts = await res.json();

	return {
		props: {
			posts,
		},
	};
}
