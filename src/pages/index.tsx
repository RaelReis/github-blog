import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import { Search } from "../components/Search";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

import { GIT_USER } from "../utils/user";

const Home: NextPage = () => {
  const [user, setUser] = useState({
    avatar_url: "/src/assets/images/avatar.png",
    name: "",
    bio: "",
    login: "",
    company: "",
    followers: 0,
    inssues: [
      {
        id: 0,
        title: "",
        created_at: "",
        body: "",
      },
    ],
  });

  const { avatar_url, name, bio, login, company, followers } = user;

  useEffect(() => {
    getProfile();
    getProfileInssues();
  }, []);

  async function getProfile() {
    const res = await axios.get(`https://api.github.com/users/${GIT_USER}`);
    const data = await res.data;
    setUser(data);
  }

  async function getProfileInssues(search = "") {
    const res = await axios.get(`https://api.github.com/search/issues?q=${search}%20repo:${GIT_USER}/githubblog`);
    const data = await res.data;
    setUser((prevUser) => {
      return { ...prevUser, inssues: data.items };
    });
  }

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
                <Image src={avatar_url} alt="" width={148} height={148} layout="responsive" objectFit="cover" />
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
                <p className="text-base-text leading-6 mb-6">{bio ? bio : "This profile has no bio"}</p>
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <FaGithub size={18} color="#3A536B" />
                    <span className="text-base-subtitle">{login}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBuilding size={18} color="#3A536B" />
                    <span className="text-base-subtitle">{company ? company : "This profile has no company"}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <FaUserFriends size={18} color="#3A536B" />
                    <span className="text-base-subtitle">{`${followers} seguidores`}</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <Search />
          <section className="container mt-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {user.inssues !== undefined &&
                user.inssues.map(({ id, ...postData }) => <PostCard key={id} data={postData} />)}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
