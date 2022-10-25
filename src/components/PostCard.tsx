interface PostCardProps {
  data: {
    title: string;
    pubDate: string;
    content: string;
  };
}

export function PostCard({ data }: PostCardProps) {
  const { title, pubDate, content } = data;

  return (
    <div className="bg-base-post p-8 flex flex-col gap-5 rounded-[10px] duration-300 border-2 border-base-post cursor-pointer hover:border-base-label">
      <div className="flex items-start justify-between gap-8">
        <h4 className="text-base-title text-xl font-bold">{title}</h4>
        <span className="text-base-span text-sm">{pubDate}</span>
      </div>
      <p className="text-base-text">{content}</p>
    </div>
  );
}
