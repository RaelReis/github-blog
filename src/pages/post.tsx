import Head from "next/head";
import { Header } from "../components/Header";
import { FaGithub } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export default function Post() {
  return (
    <div className="min-h-screen bg-base-background">
      <Head>
        <title>Github Blog - Post</title>
      </Head>
      <div className="w-full flex flex-col">
        <Header />
        <div className="container">
          <div className="-mt-16 p-8 bg-base-profile rounded-[10px]">
            <div className="mb-5 flex items-center justify-between text-blue">
              <Link href="/">
                <a className="uppercase text-xs font-bold flex items-center gap-2 py-1 duration-300 border-b border-b-transparent hover:border-b-blue">
                  <FaChevronLeft size={12} />
                  <span>voltar</span>
                </a>
              </Link>
              <button className="uppercase text-xs font-bold flex items-center gap-2 py-1 duration-300 border-b border-b-transparent hover:border-b-blue">
                <span>ver no github</span>
                <BsBoxArrowUpRight size={12} strokeWidth={1.5} />
              </button>
            </div>
            <h1 className="text-base-title text-2xl font-bold">
              JavaScript data types and data structures
            </h1>
            <div className="flex items-center gap-8 mt-2">
              <span className="text-base-span">
                <FaGithub className="inline-block mr-2" />
                <span>cameronwll</span>
              </span>
              <span className="text-base-span">
                <FaCalendar className="inline-block mr-2" />
                <span>Há 1 dia</span>
              </span>
              <span className="text-base-span">
                <FaComment className="inline-block mr-2" />
                <span>5 comentários</span>
              </span>
            </div>
          </div>
        </div>
        <div className="container mt-10 text-base-text">
          <div className="px-8">
            <p>
              <strong>
                Programming languages all have built-in data structures, but these often differ from
                one language to another.
              </strong>{" "}
              This article attempts to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data structures. Wherever
              possible, comparisons with other languages are drawn.
            </p>
            <strong className="text-blue mt-6 block">Dynamic typing</strong>
            <p>
              JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not
              directly associated with any particular value type, and any variable can be assigned
              (and re-assigned) values of all types:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
