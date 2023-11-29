import { Pacifico, Comfortaa } from "next/font/google";
import Input from "./components/Input";
import ShortedLink from "./components/ShortedLink";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const comfortaa = Comfortaa({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-10 md:p-16 bg-slate-50 ${comfortaa.className}`}
    >
      <div className="w-full sm:w-5/6 lg:w-4/6 xl:w-1/2 2xl:w-2/5 flex flex-col items-center gap-5">
        <header
          className={`text-3xl md:text-5xl mb-5 md:mb-10 font-medium text-[#6096B4] ${pacifico.className} `}
        >
          Link Shorter
        </header>
        <Input />
        <ShortedLink />
        <ShortedLink />
        <ShortedLink />
        <ShortedLink />
      </div>
    </main>
  );
}
