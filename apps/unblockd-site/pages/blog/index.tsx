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
      props.posts.map((post) => <p key={post.slug}>{post.content}</p>)
    ) : (
      <h1 className="text-lg">
        No posts found
      </h1>
    );
  return (
    <div>
      <h1>Welcome to Blog!</h1>
      {posts}
    </div>
  );
}

export default Blog;
