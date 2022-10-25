import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export function ProfileCard() {
  return (
    <div className="container">
      <div className="py-8 px-10 rounded-[10px] bg-base-profile -mt-16 flex items-center gap-8 shadow-[0_2px_28px_rgba(0,0,0,0.3)]">
        <div className="min-h-[148px] min-w-[148px] profile-image rounded-lg overflow-hidden">
          <Image
            src="/assets/images/avatar.png"
            alt=""
            width={148}
            height={148}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div>
          <header className="mb-2 flex items-center justify-between">
            <h2 className="text-base-title text-2xl font-bold">Cameron Williamson</h2>
            <button className="text-blue flex items-center gap-2">
              <span className="text-xs uppercase font-bold">github</span>
              <BsBoxArrowUpRight size={12} strokeWidth={1.5} />
            </button>
          </header>
          <p className="text-base-text leading-6 mb-6">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
            dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaGithub size={18} color="#3A536B" />
              <span className="text-base-subtitle">cameronwll</span>
            </span>
            <span className="flex items-center gap-2">
              <FaBuilding size={18} color="#3A536B" />
              <span className="text-base-subtitle">Rocketseat</span>
            </span>
            <span className="flex items-center gap-2">
              <FaUserFriends size={18} color="#3A536B" />
              <span className="text-base-subtitle">seguidores</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
