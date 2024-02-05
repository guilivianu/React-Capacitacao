import type { NextPage } from "next";
import ButtonHooks from "@/components/ButtonHooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const UseEffect: NextPage = () => {
  const [count, SetCount] = useState<number>(0);
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  const router = useRouter();
  const handleClick = () => {
    router.reload();
  };

  return (
    <main className="flex flex-col w-screen h-screen bg-gradient-to-br from-cyan-400 to-cyan-800">
      <section className="flex items-center justify-center gap-2 bg-gray-100 border-b-4 border-gray-200 p-8 text-center font-bold text-4xl">
        <Link
          href="/hooks"
          className="inline-flex items-center text-xs font-bold bg-cyan-600 text-white px-3 py-3 rounded-full shadow hover:bg-cyan-700 focus:outline-none active:bg-cyan-800"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z"
              clip-rule="evenodd"
            />
          </svg>{" "}
        </Link>
        <h1>UseEffect</h1>
      </section>

      <div className="h-screen flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-evenly gap-4 max-w-xs p-8 rounded shadow bg-white">
          <p>Você clicou {count} vezes</p>
          <div className="grid grid-cols-2 gap-4">
            <ButtonHooks onClick={() => SetCount((oldCount) => oldCount + 1)}>
              Clicar
            </ButtonHooks>
            <ButtonHooks onClick={handleClick}>Reinicar</ButtonHooks>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UseEffect;
