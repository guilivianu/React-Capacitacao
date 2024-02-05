import { NextPage } from "next";
import Head from "next/head";
import axiosHeader from "../api/axiosHeader";
import { IFilms } from "@/interfaces/IFilms";
import { useEffect, useState } from "react";
import Link from "next/link";

const HomeAPIs: NextPage = () => {
  const [films, setFilms] = useState<IFilms[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);

      const req = async () => {
        const res = await axiosHeader.get("/films");
        setFilms(res.data);
      };

      req();
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className="flex flex-col w-screen h-screen bg-gradient-to-br from-cyan-400 to-cyan-800">
      <Head>
        <title>IFilms</title>
      </Head>

      {/* HEADER */}
      <div className="bg-gray-100 border-b-4 border-gray-200">
        <div className="container max-w-5xl mx-auto p-4 h-28 flex items-center justify-between">
          <h1 className="font-black text-cyan-900 text-4xl">
            Filmes da IFilms
          </h1>

          <ul className="ml-auto">
            <li className="flex gap-3">
              <Link
                href="/"
                className="text-md hover:text-cyan-600 hover:underline"
              >
                Home
              </Link>

              <Link
                href="/hooks"
                className="text-md hover:text-cyan-600 hover:underline"
              >
                Hooks
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* /HEADER */}

      <div className="h-full flex items-center justify-evenly">
        <section className="flex flex-col items-center justify-evenly gap-4 max-w-5xl p-8 rounded shadow bg-white">
          {loading ? (
            "Carregando..."
          ) : (
            <ul className="grid grid-cols-8 gap-4">
              {films &&
                films.map((film, index) => (
                  <li key={index}>
                    <picture>
                      <img src={film.image} className="rounded-lg" />
                    </picture>
                  </li>
                ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default HomeAPIs;

export const getStaticProps = async () => {
  const res = await axiosHeader.get("/films");
  const data = res.data;

  return {
    props: {
      data,
    },
  };
};
