import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue, onMouseMove, onMouseLeave } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

// images
import article1 from "../../public/images/articles/ArticleImage1.jpg"


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(e) {
        imgRef.current.style.display = "inline-block "
        x.set(e.pageX)
        y.set(-10)

    }
    function handleMouseLeave(e) {
        imgRef.current.style.display = "none "
        x.set(0)
        y.set(0)
    }



    return (
        <Link Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />

        </Link >
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (

        <li className='relative col-span-1 w-full p-4 bg-light border-solid border border-dark dark:bg-dark dark:border-light  rounded-2xl'>
            <div className='rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark' />
            <Link href={link} target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"

                />
            </Link>
            <Link href={link} target="_blank"><h2 className='xs:text-lg capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2></Link>
            <p className='text-sm mb-2 '>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='sm:flex-col  relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4'>
            <MovingImg title={title} img={img} link={link} />
            <span className='xs:text-sm sm:pl-0 sm:self-start text-primary dark:text-primaryDark font-semib pl-4'>{date}</span>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Prairie Vistas | Articles Page </title>
                <meta name='description' content='about us' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16 '>
                    <AnimatedText text="Words Can Change The World! " className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
                        <FeaturedArticle
                            title="Title goes here"
                            summary={"Featured article summary"}
                            time="9 min read"
                            link={"/"}
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Title goes here"
                            summary={"Featured article summary"}
                            time="9 min read"
                            link={"/"}
                            img={article1}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 '> All Articles </h2>
                    <ul>
                        <Article
                            title="Regular Article title
                            "
                            date="June 7, 2023"
                            link="/"
                            img={article1} />

                        <Article
                            title="Regular Article title
                            "
                            date="June 7, 2023"
                            link="/"
                            img={article1} />

                        <Article
                            title="Regular Article title
                            "
                            date="June 7, 2023"
                            link="/"
                            img={article1} />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles