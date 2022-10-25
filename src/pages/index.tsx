import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import { ProfileCard } from "../components/ProfileCard";
import { Search } from "../components/Search";

const DUMB_DATA = [
  {
    id: 1,
    title: "JavaScript data types and data structures",
    pubDate: "2021-08-01",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 2,
    title: "JavaScript data types and data structures",
    pubDate: "2021-08-01",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 3,
    title: "JavaScript data types and data structures",
    pubDate: "2021-08-01",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 4,
    title: "JavaScript data types and data structures",
    pubDate: "2021-08-01",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 5,
    title: "JavaScript data types and data structures",
    pubDate: "2021-08-01",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 6,
    title: "JavaScript data types and data structures",
    pubDate: "2021-08-01",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
  {
    id: 7,
    title: "JavaScript data types and data structures",
    pubDate: "2021-08-01",
    content:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ",
  },
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-background">
      <Head>
        <title>Github Blog - Blog</title>
      </Head>
      <div className="w-full flex flex-col">
        <Header />
        <main className="pb-52">
          <ProfileCard />
          <Search />
          <section className="container mt-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DUMB_DATA.map(({ id, ...postData }) => (
                <PostCard key={id} data={postData} />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
