import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Post.module.css";

const Post = ({ post: { id, title, body, img } }) => {
	const date = new Date();
	const formattedDate = `${date.getDate()}.${date.getMonth()} ${date.getFullYear()}`;

	return (
		<div className={styles.postCard}>
			<div className={styles.postCardInner}>
				<div className={styles.postCardImgWrap}>
					<Image src={img} alt="#" layout="fill" objectFit="cover" />
				</div>
				<div className={styles.postCardContentWrap}>
					<h2 className={styles.postTitle}>{title}</h2>
					<h3 className={styles.postTime}>
						Posted on {formattedDate}
					</h3>
					<p className={styles.postText}>{body}</p>
					<Link href={`/posts/${id}`}>
						<a className={styles.postLink}>Read More</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Post;
