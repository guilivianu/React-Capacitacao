import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { text } from "stream/consumers";
import ButtonHooks from "@/components/ButtonHooks";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function UseState() {
  let [value, setValue] = useState<number>(0);
  const handleClick = () => {
    setValue((oldValue) => oldValue + 1);
  };

  let content = {
    main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    alt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus cupiditate totam eius consectetur cumque nihil eligendi, recusandae sit modi.",
  };
  const [text, setText] = useState<string>(content.main);
  const handleClickS = () => {
    if (text === content.main) {
      setText(content.alt);
    } else {
      setText(content.main);
    }
  };

  const router = useRouter();
  const handleClickR = () => {
    router.reload();
  };

  return (
    <main className="flex flex-col w-screen h-screen bg-gradient-to-br from-cyan-400 to-cyan-800">
      <Head>
        <title>useState</title>
      </Head>

      <section className="bg-gray-100 border-b-4 border-gray-200  ">
        <div className="container max-w-5xl mx-auto p-4 gap-2 flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl ">useState</h1>
          <div className="flex gap-3">
            <Link
              href="/hooks"
              className="inline-flex items-center text-xs font-bold bg-cyan-600 text-white px-2 py-2 rounded-full shadow hover:bg-cyan-700 focus:outline-none active:bg-cyan-800"
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
            <button
              onClick={handleClickR}
              className="inline-flex items-center text-xs font-bold bg-cyan-600 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-700 focus:outline-none active:bg-cyan-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                  clip-rule="evenodd"
                />
              </svg>
              Reiniciar
            </button>
          </div>
        </div>
      </section>

      <div className="container max-w-5xl mx-auto lg:justify-center lg:gap-6 h-screen w-full flex flex-row items-center justify-evenly">
        <div className="flex w-full items-center justify-evenly">
          <section className="flex flex-col items-center w-80 h-80 rounded-lg shadow bg-white">
            <div className="flex justify-center w-full p-4 bg-gray-100 border-b-2 rounded-t-lg border-gray-200">
              <h4 className="font-bold text-2xl">Número</h4>
            </div>
            <div className="flex flex-col justify-evenly items-center h-full">
              <span className="font-bold text-4xl"> {value} </span>
              <ButtonHooks onClick={handleClick}>Incrementar</ButtonHooks>
            </div>
          </section>
          <section className="flex flex-col items-center justify-evenly max-w-xs rounded-lg shadow bg-white">
            <div className="flex justify-center w-full p-4 bg-gray-100 border-b-2 rounded-t-lg border-gray-200">
              <h4 className="font-bold text-2xl">String</h4>
            </div>
            <div className="flex flex-col items-center h-full gap-8 p-8">
              <p className=" px-8"> {text} </p>
              <ButtonHooks onClick={handleClickS}>Alterar</ButtonHooks>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
