import PostCard, { PostCardProps } from 'components/post-card/post-card';
import { getPosts } from 'utils/markdown-resolver';
import { generateJSXMeshGradient } from 'meshgrad';

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

// Number of color stops
const ELEMENTS = 5;
export function Blog(props: BlogProps) {
  const posts =
    props.posts.length > 0 ? (
      props.posts.map((post) => (
        <PostCard key={post.slug} post={post}></PostCard>
      ))
    ) : (
      <h1 className="text-lg">No posts found</h1>
    );
  return (
  <div
    style={generateJSXMeshGradient(ELEMENTS)}
    className="grid items-center h-screen w-screen"
  >
    {posts}
  </div>
  )
}

export default Blog;
