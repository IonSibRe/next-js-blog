import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Post.module.css";
import fs from "fs";
import path from "path";

const Post = ({ post: { title, body, img } }) => {
	const date = new Date();
	const formattedDate = `${date.getDate()}.${
		date.getMonth() + 1
	} ${date.getFullYear()}`;

	return (
		<div className={styles.singlePostWrap}>
			<Link href="/">
				<a className={styles.singlePostBtn}>Go Back</a>
			</Link>
			<div className={styles.singlePostCard}>
				<div className={styles.singlePostCardInner}>
					<div className={styles.singlePostCardHeaderWrap}>
						<h1 className={styles.singlePostTitle}>{title}</h1>
						<h2 className={styles.singlePostTime}>
							Posted on {formattedDate}
						</h2>
					</div>
					<div className={styles.singlePostCardImgWrap}>
						<Image
							src={img}
							alt=""
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<p className={styles.postText}>{body}</p>
				</div>
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=6"
	);
	const posts = await res.json();

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);
	let post = await res.json();

	const imgs = fs
		.readdirSync(path.join("public", "img"))
		.map((img) => `/img/${img}`);

	post = { ...post, img: imgs[params.id - 1] };

	return { props: { post } };
}

export default Post;
