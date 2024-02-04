import type { NextPage } from "next";
import ButtonHooks from "@/components/ButtonHooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <main className="flex flex-col w-screen h-screen bg-gradient-to-br from-purple-400 to-purple-800">
      <section className="bg-gray-100 border-b-4 border-gray-200 p-8 text-center font-bold text-4xl">
        <h1>useEffect</h1>
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
