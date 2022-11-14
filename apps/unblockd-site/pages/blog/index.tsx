import PostCard, { PostCardProps } from 'components/post-card/post-card';
import { getPosts } from 'utils/markdown-resolver';

/* eslint-disable-next-line */
export interface BlogProps {
  posts: any;
}

export const getStaticProps = () => {
  const data = getPosts();
  return {
    props: {
      posts: data,
    },
  };
};

export function Blog(props: BlogProps) {
  const posts =
    props.posts.length > 0 ? (
      props.posts.map((post) => (
        <PostCard key={post.slug} post={post}></PostCard>
      ))
    ) : (
      <h1 className="text-lg">No posts found</h1>
    );
  return <div className="grid items-center">{posts}</div>;
}

export default Blog;
