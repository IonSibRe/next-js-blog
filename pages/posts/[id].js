import React from "react";
import Link from "next/link";
import styles from "../../styles/Post.module.css";

const Post = ({ post: { title, body } }) => {
	const date = new Date();
	const formattedDate = `${date.getDate()}.${date.getMonth()} ${date.getFullYear()}`;

	return (
		<div className={styles.singlePostWrap}>
			<Link href="/">
				<a className={styles.singlePostBtn}>Go Back</a>
			</Link>
			<div className={styles.singlePostCard}>
				<div className={styles.postCardInner}>
					<h2 className={styles.postTitle}>{title}</h2>
					<h3 className={styles.postTime}>
						Posted on {formattedDate}
					</h3>
					<p className={styles.postText}>{body}</p>
				</div>
			</div>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);
	const post = await res.json();

	return { props: { post } };
}

export async function getStaticPaths() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=9"
	);
	const posts = await res.json();

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() },
	}));

	return { paths, fallback: false };
}

export default Post;
