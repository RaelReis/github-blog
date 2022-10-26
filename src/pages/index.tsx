import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

import { GIT_USER } from "../utils/user";

interface UserData {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

interface UserInssues {
  id: number;
  title: string;
  created_at: string;
  body: string;
  number: number;
}

interface HomeProps {
  userData: UserData;
  userIssues: UserInssues[];
}

const Home: NextPage<HomeProps> = ({ userData, userIssues }) => {
  const { avatar_url, bio, company, followers, login, name } = userData;

  return (
    <div className="min-h-screen bg-base-background">
      <Head>
        <title>Github Blog - Blog</title>
      </Head>
      <div className="w-full flex flex-col">
        <Header />
        <main className="pb-52">
          <section className="container">
            <div className="py-8 px-10 rounded-[10px] bg-base-profile -mt-16 flex items-center gap-8 shadow-[0_2px_28px_rgba(0,0,0,0.3)]">
              <div className="min-h-[148px] min-w-[148px] profile-image rounded-lg overflow-hidden">
                <Image
                  src={avatar_url}
                  alt=""
                  width={148}
                  height={148}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </div>
              <div>
                <header className="mb-2 flex items-center justify-between">
                  <h2 className="text-base-title text-2xl font-bold">{name}</h2>
                  <a
                    href={`https://github.com/${GIT_USER}`}
                    target="_blank"
                    className="text-blue flex items-center gap-2 py-1 duration-300 border-b border-b-transparent hover:border-b-blue"
                    rel="noreferrer"
                  >
                    <span className="text-xs uppercase font-bold">github</span>
                    <BsBoxArrowUpRight size={12} strokeWidth={1.5} />
                  </a>
                </header>
                <p className="text-base-text leading-6 mb-6">{bio ? bio : "Esse perfil não tem bio"}</p>
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <FaGithub size={18} color="#3A536B" />
                    <span className="text-base-subtitle">{login}</span>
                  </span>
                  {company && (
                    <span className="flex items-center gap-2">
                      <FaBuilding size={18} color="#3A536B" />
                      <span className="text-base-subtitle">{company}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    <FaUserFriends size={18} color="#3A536B" />
                    <span className="text-base-subtitle">{`${followers} seguidores`}</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="container mt-[72px] flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base-subtitle text-lg">Publicações</h3>
              <span className="text-base-span text-sm">{`${userIssues.length} publicações`}</span>
            </div>
            <div>
              <input
                className="w-full outline-none duration-200 rounded-md px-4 py-3 bg-base-input text-base-text border border-base-border placeholder-base-label focus:border-blue"
                type="text"
                placeholder="Buscar conteúdo"
              />
            </div>
          </section>
          <section className="container mt-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userIssues !== undefined &&
                userIssues.map(({ id, ...postData }) => <PostCard key={id} data={postData} />)}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const resOne = await axios.get(`https://api.github.com/users/${GIT_USER}`);
  const userData = await resOne.data;

  const resTwo = await axios.get(`https://api.github.com/search/issues?q=%20repo:${GIT_USER}/githubblog`);
  const { items: userIssues } = await resTwo.data;

  if (!userData || !userIssues) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userData,
      userIssues,
    },
  };
}
