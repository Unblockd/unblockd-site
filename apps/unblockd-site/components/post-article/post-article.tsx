import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

/* eslint-disable-next-line */
export interface PostArticleProps {
  postData: any;
}

export function PostArticle(props: PostArticleProps) {
  const {
    title,
    image,
    date,
    slug,
    excerpt,
    readingTime,
    topic,
    content,
    updatedDate,
  } = props.postData;

  const formattedDate = new Date(date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedUpdatedDate = new Date(updatedDate).toLocaleDateString(
    'en-AU',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  const imagePath = `/images/blog/${slug}/${image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className="flex flex-col items-center py-2">
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={300}
              height={300}
              className="rounded-2xl border-2 shadow-md"
            />
            <br></br> <br></br>
          </div>
        );
      }

      return (
        <>
          <p>{paragraph.children}</p>
          <br></br>
          <br></br>
        </>
      );
    },

    code(code) {
            const { className, children } = code;
            const language = className.split('-')[1];
            return (
                <SyntaxHighlighter
                    language={language}>
                    {children}
                </SyntaxHighlighter>
            );
        },
  };

  return (
    <>
      <div className="w-full px-12">
        <div className="flex my-4">
          <span className="hover:font-semibold">
            <Link href="/blog">← Go Back</Link>
          </span>
        </div>
        <div className="md:w-3/5 my-6 mx-auto">
          <h1 className="text-4xl font-semibold my-3 text-center">{title}</h1>
          <h3 className="text-my-light-subtext dark:text-my-dark-subtext my-2 text-lg text-center">
            {excerpt}
          </h3>

          <div className="flex flex-col items-center py-2">
            <Image
              src={imagePath}
              width="200px"
              height="200px"
              alt="post image"
              className="rounded-2xl border-2 shadow-md"
            />
          </div>

          <h2 className="text-md font-medium text-center text-my-light-subtext dark:text-my-dark-subtext py-2">
            {formattedDate} - {readingTime}
          </h2>
          <hr className="border-my-light-border dark:border-my-dark-border" />
          <article className="prose prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-my-light-subtext prose-a:dark:text-my-dark-subtext lg:prose-lg my-4">
            <ReactMarkdown components={customRenderers}>
              {content}
            </ReactMarkdown>
          </article>
          <hr className="border-my-light-border dark:border-my-dark-border" />
          <div className="md:justify-between  md:my-4 my-2 py-4 px-8">
            <div>
              <h3 className="border-my-light-border dark:border-my-dark-border dark:text-blue-400 text-blue-400 text-center px-2 py-2 rounded-lg">
                <Link href={`/topics/${topic}`}>
                  <p>See more articles on {topic}</p>
                </Link>
              </h3>
            </div>
            <div>
              <h2 className="text-my-light-subtext dark:text-my-dark-subtext text-md font-semibold text-center">
                Last updated
              </h2>
              <h2 className="text-my-light-subtext dark:text-my-dark-subtext text-lg font-semibold text-center ">
                {updatedDate ? formattedUpdatedDate : formattedDate}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostArticle;
