import Head from 'next/head'
import Header from '../components/header'
import ImageHero from '../components/ImageHero'

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ImageHero imageFilename='1-starlinkcharcoal.jpg'>
      </ImageHero>
      <ImageHero bgPosition='bg-left' imageFilename='2-Starlink_UT_Rooftop-cropped.jpg'>
        <div className="grid text-white w-10/12 m-auto">
          <div className="max-w-prose justify-self-center md:max-w-2xl xl:justify-self-end xl:max-w-md 2xl:max-w-prose">
            <h2 class="text-2xl font-medium leading-normal mt-0 mb-8 sm:text-3xl md:text-5xl">
              High-speed, low latency broadband internet.
            </h2>
            <p className="font-extralight leading-5 my-4">Starlink is now delivering initial beta service both domestically and internationally, and will continue expansion to near global coverage of the populated world in 2021.</p>
            <p className="font-extralight leading-5 my-4">During beta, users can expect to see data speeds vary from 50Mb/s to 150Mb/s and latency from 20ms to 40ms in most locations over the next several months as we enhance the Starlink system. There will also be brief periods of no connectivity at all.</p>
            <p className="font-extralight leading-5 my-4">As we launch more satellites, install more ground stations and improve our networking software, data speed, latency and uptime will improve dramatically.</p>
          </div>
        </div>
      </ImageHero>
      <ImageHero />
      <div className="inline-block h-12 bg-red-400">
        hey
      </div>
    </div>
  )
}
