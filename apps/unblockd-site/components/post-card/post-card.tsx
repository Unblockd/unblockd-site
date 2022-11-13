import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface PostCardProps {
  post: any;
  key: any;
}

export function PostCard(props: PostCardProps) {
  const { title, image, excerpt, date, slug, readingTime, topic, content } =
    props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/blog/${slug}/${image}`;
  const linkPath = `/blog/${slug}`;

  return (
    <>
      <Link href={linkPath}>
        <a>
          <div className="bg-white dark:bg-gray-800 my-2 w-11/12 md:w-[600px] overflow-hidden border rounded-lg border-gray-500 py-6 px-6 hover:shadow-sm hover:bg-blue-100 dark:hover:bg-gray-900 hover:cursor-pointer hover:border-blue-600 mx-auto">
            <div className="md:flex justify-between">
              <div className="md:w-7/12 text-center">
                <h1 className="text-2xl font-bold">{title}</h1>

                <h3 className="text-gray-600 dark:text-gray-400 my-2 text-lg">
                  {excerpt}
                </h3>
                <p className="invisible hidden md:line-clamp-7 md:visible px-16 pt-2">
                  {content}
                </p>
              </div>
              <div className="h-full text-center items-center content-center">
                <Image
                  src={imagePath}
                  className="rounded-xl shadow-md"
                  width="200px"
                  height="200px"
                  alt="post image"
                />
              </div>
            </div>
            <div className="flex justify-between pt-4 text-gray-600 dark:text-gray-400">
              <p className="text-lg">{formattedDate}</p>
              <div className="inline-flex space-x-2">
                <h3 className="text-base px-2  border bg-blue-100 border-blue-300 inline rounded-lg text-gray-900">
                  {topic}
                </h3>
                <h2 className="text-lg">{readingTime}</h2>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default PostCard;
