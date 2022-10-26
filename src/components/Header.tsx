import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-[296px] bg-[url(/assets/images/header-bg.png)] bg-cover bg-no-repeat bg-center">
      <div className="h-[98px] w-[148] container flex justify-center mt-16">
        <Image src="/assets/images/logo.svg" alt="" width={148} height={98} priority />
      </div>
    </header>
  );
}
