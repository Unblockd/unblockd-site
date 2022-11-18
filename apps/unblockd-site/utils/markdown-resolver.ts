import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

//@returns: Sorted array of post objects by date
export const getPosts = () => {
  return sortPostsByDate(
    getPostsFiles().map((fileName) => {
      return getPostData(fileName);
    })
  );
};

const postsDirectory = path.join(process.cwd(), 'apps/unblockd-site/posts');

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const sortPostsByDate = (posts: any) => {
  posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return posts;
};

export interface PostData {
  slug: string;
  data: string;
  content: string;
  readingTime: string;
  sort(items: any): number;
}

// type componentShape = typeof data & State;

export function getPostData(postFilepath: string) {
  const postSlug = postFilepath.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postFilepath}`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postFilepath.replace(/\.md$/, ''),
    ...data,
    readingTime: readingTime(content).text,
    content,
  } as PostData;

  return postData;
}
