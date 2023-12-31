import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import hervpic from '../../public/images/profile/MicrosoftTeams-image.png'
import { TwitterIcon, GithubIcon, LinkedInIcon, YoutubeIcon, SunIcon, MoonIcon } from "@/components/Icons"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";


const AnimateNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span >
}


const PersonCard = ({ img, name, about, github, linkedin }) => {

    return (

        <div class="'relative col-span-1 w-full p-4 bg-light border-solid border border-dark dark:bg-dark dark:border-light  rounded-2xl ">
            <div className='absolute top-0 -right-3 -z-10  rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <div className="grid grid-cols-3 pb-1 xl:grid-cols-1 xl:justify-center">
                <div className='col-span-1  flex items-center justify-center pb-2'>
                    <div className="w-40 h-40 rounded-full shadow-lg">
                        <Image class=" w-full h-full  rounded-full shadow-lg xl:justify-center m-auto " src={img} alt='profilepic' />
                    </div>
                </div>
                <div className='col-span-2 relative ml-2 h-full w-full rounded-2xl '>
                    <div className='pt-4'>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Co-Founder/Developer</span>
                    </div>
                    <h5 className="py-6 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <p className=''> {about}</p>
                    <div className='flex items-center py-6'>
                        <motion.a href={github} target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-8 mx-3'
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a href={linkedin} target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-8 mx-3'
                        >
                            <LinkedInIcon />
                        </motion.a>
                    </div>
                </div>

            </div>
        </div>


    )
}

const About = () => {
    return (
        <>
            <Head>
                <title>Prairie Vistas | About Page </title>
                <meta name='description' content='about us' />

                {/*Social media meta*/}

                {/*Schema markup*/}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Prairie Vistas",
                            "url": "https://www.prairievistas.ca",
                            "sameAs": [
                                //"https://www.linkedin.com/company/prairievistas",
                                //"https://twitter.com/prairievistas",
                                //"https://www.instagram.com/prairievistas"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-306-850-1213",
                                "contactType": "customer support"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "474 Kloppenburg St",
                                "addressLocality": "Saskatoon",
                                "postalCode": "S7W 0N8",
                                "addressCountry": "CA"
                            },
                            "email": "info@prairievistas.ca",
                            "description": "Get in touch with Prairie Vistas Web Design Agency for custom web design, affordable web development, and responsive website design services in Saskatchewan, Canada.",
                            "logo": "https://www.prairievistas.ca/logo.png", // Replace with your logo URL
                            "taxID": "Unavailable"
                        })
                    }}
                />


            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText className="mb-10 lg:!text-2xl sm:!text-6xl xs:!text-4xl sm:mb-8" text="Passion Fuels Purpose!" />
                    <h2 className='mb-10 my-2 w-full text-left text-4xl flex items-center justify-center font-bold dark:text-light'>Meet our Team</h2>
                    <div className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1 max-w-[1290px] m-auto '>
                        <PersonCard img={hervpic} name={"Herve Mununu"} github={"https://github.com/ginsan11"} linkedin={"https://www.linkedin.com/in/herv%C3%A9-mununu-a8aa94279/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BdWd3OcObSgWGNsS41YVtTw%3D%3D"}
                            about={" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        />
                        <PersonCard img={profilePic} name={"Ali Shakeel"} github={"https://github.com/seemslikeali"} linkedin={"https://www.linkedin.com/in/ali-shakeel-8758a4225/"}
                            about={" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        />
                    </div>
                    <div className='grid w-full h-full py-12  grid-cols-2 gap-16 sm:gap-8 '>


                        <div className='col-span-2 pt-10 flex items-center justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-center justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimateNumbers value={100} />%
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Satsfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-center justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimateNumbers value={40} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Project Complete Clients</h2>
                            </div>
                            <div className='flex flex-col items-center justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimateNumbers value={20} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Combined Years of experience</h2>
                            </div>
                        </div>

                    </div>
                    <Skills />
                    <Experience />
                    <Education />

                </Layout>
            </main>

        </>
    )
}

export default About