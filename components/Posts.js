import React from "react";
import Post from "./Post";
import styles from "../styles/Post.module.css";

const Posts = ({ posts }) => {
	return (
		<section className={styles.postsSection}>
			<div className={styles.postsContainer}>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</section>
	);
};

export default Posts;
