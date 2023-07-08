import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from "../images/developer-pic-2.PNG"
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prairie Vistas | Home</title>
        <meta name="homepage" content="landing page for ali shakeel's website" />
        <meta name="title" content="Prairie Vistas | Homepage | Taking your online presence to new heights" />
        <meta name="description" content="Prairie Vistas, a young and flexible local business with over 9 years of experience. We're here to transform your digital landscape. " />
        <meta name="keywords" content="saskatchewan, saskatoon, website, western, build website, french, francais, web" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Ali Shakeel" />
      </Head>
      <TransitionEffect />
      <main className=" flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image draggable="false" src={profilePic} alt="Ali Shakeel" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"

              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

              <AnimatedText text="Weaving your imagination into practical solutions." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                {/* <Link download={true} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' href="/dummy.pdf" target='_blank'
                >
                  Resume <LinkArrow className={"w-6 ml-1.5"}></LinkArrow>
                </Link> */}
                <Link href={"/contactus"}
                  className='text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact us</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Ali Shakeel' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
