import Head from "next/head";
import { Header } from "../../components/Header";
import { FaGithub } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { GIT_USER } from "../../utils/user";

interface Inssue {
  issue: {
    id: string;
    url: string;
    title: string;
    body: string;
    user: {
      login: string;
    };
    created_at: string;
    comments: number;
  };
}

export default function Post({ issue }: Inssue) {
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
              <Link href={issue.url}>
                <a className="uppercase text-xs font-bold flex items-center gap-2 py-1 duration-300 border-b border-b-transparent hover:border-b-blue">
                  <span>ver no github</span>
                  <BsBoxArrowUpRight size={12} strokeWidth={1.5} />
                </a>
              </Link>
            </div>
            <h1 className="text-base-title text-2xl font-bold">{issue.title}</h1>
            <div className="flex items-center gap-8 mt-2">
              <span className="text-base-span">
                <FaGithub className="inline-block mr-2" />
                <span>{issue.user.login}</span>
              </span>
              <span className="text-base-span">
                <FaCalendar className="inline-block mr-2" />
                <span>{issue.created_at}</span>
              </span>
              <span className="text-base-span">
                <FaComment className="inline-block mr-2" />
                <span>{`${issue.comments} comentários`} </span>
              </span>
            </div>
          </div>
        </div>
        <div className="container mt-10 text-base-text">
          <div className="px-8">
            <p>{issue.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { number } = context.params;

  const res = await axios.get(`https://api.github.com/repos/${GIT_USER}/githubblog/issues/${number}`);
  const issue = await res.data;

  if (!issue) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      issue,
    },
  };
}
