import Head from "next/head";
import Link from "next/link";

export default function HomeHooks() {
  return (
    <main className="w-screen h-screen bg-gray-50 text-gray-600">
      <Head>
        <title>Hooks</title>
      </Head>

      {/* HEADER */}
      <div className="bg-gray-100 border-b-4 border-gray-200">
        <div className="container max-w-5xl mx-auto p-4 h-28 flex items-center justify-between">
          <h1 className="font-black text-cyan-900 text-4xl">Hooks</h1>

          <ul className="ml-auto">
            <li className="flex gap-3">
              <Link
                href="/"
                className="text-md hover:text-cyan-600 hover:underline"
              >
                Home
              </Link>

              <Link
                href="/apis"
                className="text-md hover:text-cyan-600 hover:underline"
              >
                APIs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* /HEADER */}

      {/* BODY */}
      <section className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-12 mt-32">
          {/* useState */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg transition ease-in-out hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex justify-center w-full rounded-t-lg bg-blue-100 border-b-2 border-blue-200 p-2">
              <h2 className="text-2xl text-cyan-950 font-bold p-4">useState</h2>
            </div>

            <div className="flex flex-col p-6 gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nisi numquam inventore, quasi culpa eos temporibus ut debitis
                sint neque non eaque mollitia iste explicabo nemo. Officia
                architecto quam omnis nemo! A quod ipsum voluptatem, optio
                fugiat ratione dicta molestias laboriosam quam placeat nobis eum
                omnis aliquam. Molestiae, nesciunt tempore.
              </p>
              <div>
                <Link
                  href="/hooks/useState"
                  className="inline-flex items-center bg-cyan-500 px-3 py-2 rounded text-cyan-900 text-sm font-medium hover:bg-cyan-400 hover:shadow-xl"
                >
                  Acessar projeto de "useState"
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

          {/* useEffect */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg transition ease-in-out hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex justify-center w-full rounded-t-lg bg-blue-100 border-b-2 border-blue-200 p-2">
              <h2 className="text-2xl text-cyan-950 font-bold p-4">
                useEffect
              </h2>
            </div>

            <div className="flex flex-col p-6 gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nisi numquam inventore, quasi culpa eos temporibus ut debitis
                sint neque non eaque mollitia iste explicabo nemo. Officia
                architecto quam omnis nemo! A quod ipsum voluptatem, optio
                fugiat ratione dicta molestias laboriosam quam placeat nobis eum
                omnis aliquam. Molestiae, nesciunt tempore.
              </p>
              <div>
                <Link
                  href="/hooks/useEffect"
                  className="inline-flex items-center bg-cyan-500 px-3 py-2 rounded text-cyan-900 text-sm font-medium hover:bg-cyan-400 hover:shadow-xl"
                >
                  Acessar projeto de "useEffect"
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
      </section>
      {/* /BODY */}
    </main>
  );
}
