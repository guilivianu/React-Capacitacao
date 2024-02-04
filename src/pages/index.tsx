import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "../components/Button";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = () => {
    console.log("Oi!");
  };

  return (
    <main className="w-screen h-screen bg-gray-50 text-gray-600">
      <Head>
        <title>Home</title>
      </Head>
      {/* HEADER */}
      <div className="bg-gray-100 border-b-4 border-gray-200">
        <div className="container max-w-5xl mx-auto p-4 h-28 flex flex-col justify-evenly">
          <h1 className="font-black  text-cyan-900 text-4xl">React</h1>
          <h2 className=" font-semibold text-sm">
            Capacitação byron.solutions
          </h2>
        </div>
      </div>
      {/* /HEADER */}
      {/* HOOKS */}
      <div className="container max-w-5xl mx-auto p-4 py-8 flex items-center">
        <div className="grid grid-cols-4 gap-7">
          <div className=" gap-5 grid col-span-3">
            <h3 className="text-2xl font-bold">Hooks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus non obcaecati laboriosam, animi necessitatibus aperiam
              eligendi illo corporis voluptates alias maxime? Eius ratione est
              recusandae explicabo dicta quis eligendi sed, obcaecati aliquid
              quia minus debitis error. Nobis rem corrupti, veniam aliquam
              repellat blanditiis, explicabo dolores non nemo asperiores, vel
              voluptatibus?
            </p>
            <div>
              <Link
                href="/hooks"
                className="inline-flex items-center bg-cyan-500 px-3 py-2 rounded text-cyan-900 font-medium hover:bg-cyan-600 hover:shadow-xl transition ease-in-out hover:scale-105 duration-300"
              >
                Acessar projetos de "Hooks"
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <picture>
              <img
                src="/img/hooks.png"
                alt=""
                className="max-h-xs rounded-lg shadow-lg"
              />
            </picture>
          </div>
        </div>
      </div>
      {/* /APIs */}
      <div className=" bg-gray-100">
        <div className=" container max-w-5xl mx-auto p-4 py-8 flex items-center">
          <div className="grid grid-cols-4 gap-7">
            <div className="flex items-center">
              <picture>
                <img
                  src="/img/api.jpg"
                  alt=""
                  className="max-h-xs relative rounded-lg shadow-lg"
                />
              </picture>
            </div>
            <div className=" gap-5 grid col-span-3">
              <h3 className="text-2xl font-bold">Consumindo APIs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus non obcaecati laboriosam, animi necessitatibus
                aperiam eligendi illo corporis voluptates alias maxime? Eius
                ratione est recusandae explicabo dicta quis eligendi sed,
                obcaecati aliquid quia minus debitis error. Nobis rem corrupti,
                veniam aliquam repellat blanditiis, explicabo dolores non nemo
                asperiores, vel voluptatibus?
              </p>
              <div>
                <Link
                  href="/hooks"
                  className="inline-flex items-center bg-cyan-500 px-3 py-2 rounded text-cyan-900 font-medium hover:bg-cyan-600 hover:shadow-xl transition ease-in-out hover:scale-105 duration-300"
                >
                  Acessar projetos de "APIs"
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /APIs */}
    </main>
  );
}
