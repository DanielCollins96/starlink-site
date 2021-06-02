import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <div className="inline-block h-12 bg-red-400">
        hey
      </div>
    </div>
  )
}
