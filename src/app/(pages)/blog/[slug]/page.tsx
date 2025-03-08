import ReactMarkdown from "react-markdown";
import { getBlogPost } from "../action";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);
  const date = post.date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  if (post.error) {
    return <div className="text-center text-red-500">{post.error}</div>;
  }

  return (
    <div className="bg-white text-black ">
      <article className="prose prose-lg mx-auto p-6 pb-24 max-w-7xl">
        <header className="pb-12">
          <p className="text-gray-500 text-xl text-right mb-6">{date}</p>
          <h1 className="text-4xl font-bold text-center">{post.title}</h1>
        </header>
        <main className="flex flex-col gap-4">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold">{children}</h2>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4">{children}</ul>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </main>
      </article>
    </div>
  );
}
