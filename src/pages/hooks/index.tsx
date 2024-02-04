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
                href="/hooks/useState"
                className="text-md hover:text-gray-800 hover:underline"
              >
                useState
              </Link>

              <Link
                href="/hooks/useEffect"
                className="text-md hover:text-gray-800 hover:underline"
              >
                useEffect
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* /HEADER */}
    </main>
  );
}
