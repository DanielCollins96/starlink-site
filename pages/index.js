import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import ImageHero from '../components/ImageHero'

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-500">
      <Head>
        <title>Starlink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ImageHero 
        imageFilename='1-starlinkcharcoal.jpg'
        fixed={true}
      >
        <div className="absolute grid max-w-4xl w-11/12 text-white text-center left-1/2	top-45 transform -translate-y-2/4 -translate-x-2/4">
          <h2 className="mb-8 text-4xl font-medium lg:mt-12 lg:mb-32 md:text-5xl">Order Starlink</h2>
          <p className="text-xs font-light mb-8 px-12 md:text-sm">Starlink is available to a limited number of users per coverage area at this time. Orders will be fulfilled on a first-come, first-served basis.</p>
          <form action="" className="max-w-2xl m-auto w-11/12">
            <div className="relative">
              <label htmlFor="service-input" className="absolute pl-4 pt-4 text-mainLabel text-xs">Service Address</label>
              <input type="text" id="service-input" className="w-full pt-8 pb-2 pl-4 my-2 bg-mainInputBg bg-opacity-70 outline-none border border-transparent focus:border-white transition duration-300"/>
            </div>
            <div className="text-xs font-light text-888 mt-1.5 mb-10">Can't find your address? Try a <Link href=""><a className="underline">Plus Code</a></Link> with City.</div>
            <button className="w-full bg-black bg-opacity-50 text-gray-600 border-2  border-gray-600 h-14 md:w-64" type="submit">Order Now</button>
          </form>
        </div>
          <div className="absolute w-full text-center bottom-7">
            <p><span className="text-xs font-light text-888">By clicking ORDER NOW, you agree to our <Link href="https://www.starlink.com/legal/privacy-policy"><a className="text-white">Privacy Policy</a></Link>.</span></p>
          </div>
      </ImageHero>
      <ImageHero 
        bgPosition='bg-left' 
        imageFilename='2-Starlink_UT_Rooftop-cropped.jpg'
      >
        <div className="grid text-white w-10/12 m-auto">
          <div className="justify-self-center max-w-prose md:max-w-xl xl:justify-self-end xl:max-w-md 2xl:max-w-prose">
            <h2 className="text-3xl font-medium leading-normal mt-0 mb-8 sm:text-4xl md:text-5xl">
              High-speed, low latency broadband internet.
            </h2>
            <p className="font-light leading-5 my-4">Starlink is now delivering initial beta service both domestically and internationally, and will continue expansion to near global coverage of the populated world in 2021.</p>
            <p className="font-light leading-5 my-4">During beta, users can expect to see data speeds vary from 50Mb/s to 150Mb/s and latency from 20ms to 40ms in most locations over the next several months as we enhance the Starlink system. There will also be brief periods of no connectivity at all.</p>
            <p className="font-light leading-5 my-4">As we launch more satellites, install more ground stations and improve our networking software, data speed, latency and uptime will improve dramatically.</p>
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
