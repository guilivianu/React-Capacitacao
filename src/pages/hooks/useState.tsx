import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { text } from "stream/consumers";
import ButtonHooks from "@/components/ButtonHooks";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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

  return (
    <main className="flex flex-col w-screen h-full bg-gradient-to-br from-purple-400 to-purple-800">
      <Head>
        <title>useState</title>
      </Head>

      <section className="bg-gray-100 border-b-4 border-gray-200 p-8 text-center font-bold text-4xl">
        <h1>useState</h1>
      </section>

      <div className="lg:flex-row lg:justify-center lg:gap-44 h-screen flex flex-col items-center justify-evenly gap-8">
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
    </main>
  );
}
