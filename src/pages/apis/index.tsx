import { NextPage } from "next";
import Head from "next/head";
import axiosHeader from "../api/axiosHeader";
import { IFilms } from "@/interfaces/IFilms";
import { log } from "console";
import { useEffect, useState } from "react";

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
    <main className="flex flex-col w-full h-full bg-gradient-to-br from-purple-400 to-purple-800">
      <Head>
        <title>IFilms</title>
      </Head>

      <section className="bg-gray-100 border-b-4 border-gray-200 p-8 text-center font-bold text-4xl">
        <h1>Consumindo APIs</h1>
      </section>

      <div className="h-screen flex items-center justify-evenly">
        <section className="flex flex-col items-center justify-evenly gap-4 max-w-3xl p-8 rounded shadow bg-white">
          {loading ? (
            "Carregando..."
          ) : (
            <ul className="grid grid-cols-6 gap-4">
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
