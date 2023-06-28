import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import project1 from "../../public/images/projects/ProjectImage1.jpg"
import ImgSlider from '@/components/imgSlider'
import { useState } from 'react'
import F1 from '../../public/images/projects/F1.png'
import K1 from '../../public/images/projects/K1.png'
import V1 from '../../public/images/projects/V1.png'
import R1 from '../../public/images/projects/R1.png'




const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, srcset}) => {
    const [trigger, setTrigger] = useState(false)

    return (
        <article className='rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid
         border-dark bg-light dark:border-light dark:bg-dark shadow-2x1 p-12 relative
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light' />
            <button onClick={() => setTrigger(true)}
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"

                />
            </button>
            <ImgSlider trigger={trigger} setTrigger={setTrigger} srcset = {srcset}/>


            <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>

                <p className='sm:text-sm my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link
                        className='sm:px-4 sm:text-base ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'
                        href={link} target='_blank'>Visit Project</Link>

                </div>



            </div>

        </article>
    )
}


const Project = ({ title, type, img, link, srcset}) => {
    const [trigger, setTrigger] = useState(false)

    return (

        <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light xs:p-4'>
            <div className='md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
            <button onClick={() => setTrigger(true)}
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </button>
            <ImgSlider trigger={trigger} setTrigger={setTrigger} srcset = {srcset}/>


            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>


                <div className='w-full mt-2 flex items-center justify-between dark:text-light'>

                    <Link
                        className='md:text-base text-lg font-semibold underline dark:text-light'
                        href={link}
                        target='_blank'>
                        Visit
                    </Link>
                </div>
            </div>

        </article>
    )
}


const projects = () => {

        // Set of images for project 1
        const set4 = [
            { src: "/images/projects/F1.png", width: 2048, height: 1365 },
            { src: "/images/projects/F2.png", width: 2048, height: 1365 },
            { src: "/images/projects/F3.png", width: 2048, height: 1365 },
            { src: "/images/projects/F4.png", width: 2048, height: 1365 },
            { src: "/images/projects/F5.png", width: 2048, height: 1365 }
        ]
    
        // Set of images for project 2
        const set3 = [
            { src: "/images/projects/K1.png", width: 2048, height: 1365 },
            { src: "/images/projects/K2.png", width: 2048, height: 1365 },
            { src: "/images/projects/K3.png", width: 2048, height: 1365 },
            { src: "/images/projects/K4.png", width: 2048, height: 1365 },
            { src: "/images/projects/K5.png", width: 2048, height: 1365 }
        ]
    
        // Set of images for project 3
        const set2 = [
            { src: "/images/projects/V1.png", width: 2048, height: 1365 },
            { src: "/images/projects/V2.png", width: 2048, height: 1365 },
            { src: "/images/projects/V3.png", width: 2048, height: 1365 },
            { src: "/images/projects/V4.png", width: 2048, height: 1365 },
        ]

        const set1 = [
            { src: "/images/projects/R1.png", width: 2048, height: 1365 },
            { src: "/images/projects/R2.png", width: 2048, height: 1365 },
            { src: "/images/projects/R3.png", width: 2048, height: 1365 },
            { src: "/images/projects/R4.png", width: 2048, height: 1365 },
            { src: "/images/projects/R5.png", width: 2048, height: 1365 },
            { src: "/images/projects/R5.png", width: 2048, height: 1365 }
        ]
    
    return (
        <>
            <Head>
                <title>Ali Shakeel | Projects Page </title>
                <meta name='description' content='about us' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>

                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '
                    />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeatureProject
                                title={"Réseau Santé en français de la Saskatchewan"}
                                summary={""}
                                img={R1}
                                link="https://rsfs.ca/"
                                srcset={set1}
                                type={"Featured Project"}
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeatureProject
                                title={"vitalite55 SK"}
                                summary={""}
                                img={V1}
                                link="https://en.vitalite55sk.ca/"
                                srcset={set2}
                                type={"Featured Project"}
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project title={"Kabab King"}
                                img={K1}
                                link="https://www.kababking.ca/"
                                srcset={set3}
                                type={"Featured Project"} />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project title={"Federation Des Francophones De Saskatoon"}
                                img={F1}
                                link="https://www.francosaskatoon.ca"
                                srcset={set4}
                                type={"Featured Project"} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects