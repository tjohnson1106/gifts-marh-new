import Head from "next/head";

import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services"
 
const posts = [
  {
    title: "title one ",
    excerpt: "learn excerpt one"
  },

  {
    title: "title two react ",
    excerpt: "excerpt two tailwind  "
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog Home(index)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
