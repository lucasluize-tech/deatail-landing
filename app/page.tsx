"use client";

import { useEffect } from "react";
import ServiceCard from "@/app/ui/serviceCard";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";
import Testimonial from "@/app/ui/Testimonial";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <header className='hero bg-contain bg-no-repeat bg-bottom h-screen flex lg:items-start items-center justify-center text-center'>
        <div className='bg-black bg-opacity-50 p-8 rounded-lg lg:mb'>
          <h1 className='text-6xl mb-4 font-serif shadow-sm'>
            <span className='bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-600'>
              Experience the Ultimate Car Detailing
            </span>
          </h1>
          <p className='text-lg mb-14 font-serif shadow-sm'>
            <i>Professional, Reliable, and Affordable</i>
          </p>
          <button className='mb-14'>
            <a
              href='#services'
              className='font-serif cta-button bg-green-500 text-black
              py-3 px-6 rounded font-semibold tracking-wide transition duration-300 ease-in-out hover:bg-green-700 hover:text-gray-800'
              aria-label='Choose your car detailing services now'>
              Get Started
            </a>
          </button>
          <Image
            src='/bg-image.jpg'
            alt='Professional car detailing service'
            width={400}
            height={400}
            className='mx-auto sm:w-4/5 lg:w-full'
          />
        </div>
      </header>

      <main className='py-8 font-serif'>
        <section
          id='services'
          className='flex items-center flex-col justify-center min-h-screen text-center py-6 font-serif bg-[#1f1f1f] rounded-lg bg-opacity-20'>
          <h2 className='text-4xl mb-6 font-semibold font-serif shadow-md'>
            <span className='bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-600'>
              My Services
            </span>
          </h2>
          <ul className='flex flex-wrap justify-center gap-8 mb-8'>
            <ServiceCard
              title='Premium Wash'
              description='Exterior and interior wash.'
              price='From $80*'
              details={[
                "Exterior hand wash and dry",
                "Interior vacuuming",
                "Window cleaning",
                "Dashboard wipe down",
                "add on wax for $30",
              ]}
            />
            <ServiceCard
              title='Best Value Detail'
              description='Comprehensive detailing package.'
              price='From $249*'
              details={[
                "Premium exterior wash and wax",
                "Interior dusting and vacuuming",
                "Upholstery shampoo",
                "Full wash floor mats",
                "Leather cleaning and conditioning",
                "Trunk and cargo area cleaning",
                "Spot cleaning",
                "Tire and wheel detailing and dressing",
                "Hybrid Ceramic Coating",
                "Interior Protection",
                "Streak free windows",
              ]}
              highlight
            />
            <ServiceCard
              title='Full Detail'
              description='Complete detailing for your car.'
              price='From $399*'
              details={[
                "Complete exterior and interior detailing",
                "Steam Cleaning and Sanitizing",
                "UV Protection",
                "Full interior Extraction",
                "Ceramic coating",
                "Tire and wheel detailing and dressing",
                "Streak free windows",
                "One hand Polishing",
              ]}
            />
          </ul>
          <div className='w-full flex flex-col gap-4 text-center font-bold lg:items-center'>
            <p className='italic mb-6'>
              * Final price may vary based on vehicle size, model and condition.
            </p>
            <a
              className='lg:w-1/2 px-2 mx-2 py-4 rounded bg-green-500 text-black hover:scale-105 transition duration-500 ease-in-out font-bold text-md italic'
              href='#contact'
              aria-label='Book car detailing services now'>
              Book Now
            </a>
          </div>
        </section>

        <section
          id='about'
          className='flex items-center flex-col justify-around h-screen text-center font-serif px-4'>
          <h2 className='text-4xl mb-6 font-semibold font-serif shadow-md'>
            <span className='bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-600'>
              About Me
            </span>
          </h2>
          <div className='max-w-3xl mx-auto mb-8'>
            <p className='text-lg mb-4'>
              With over a decade of Enthusiasm in professional car detailing,
              I&apos;m passionate about bringing out the best in every vehicle I
              touch. My journey began with a simple love for cars and has
              evolved into a dedicated service that combines attention to detail
              with precision.
            </p>
            <p className='text-lg mb-4'>
              I use only the highest quality, eco-friendly products and
              cutting-edge techniques to ensure your car not only looks stunning
              but is also protected for the long haul. From nasty interiors to a
              car that you will love to daily drive!
            </p>
            <p className='text-lg'>
              My commitment to excellence and customer attention have earned me
              a loyal clientele and Hopefully you are Next! Welcome to the UDX
              Family, A Family owned and operated business.
            </p>
          </div>
          <a
            className='w-full lg:w-1/3 px-4 py-4 rounded bg-green-500 text-black hover:scale-105 transition duration-500 ease-in-out italic font-bold'
            href='#contact'
            aria-label='Book professional car detailing services now'>
            Book Your Detail
          </a>
        </section>

        <section
          id='testimonials'
          className='w-full mx-auto py-8 text-center bg-[#1f1f1f] rounded-lg bg-opacity-20'>
          <h2 className='text-4xl mb-12'>
            <span className='bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-600'>
              What my Customers Say
            </span>
          </h2>
          <div className='flex items-center justify-start space-x-6 overflow-x-auto whitespace-nowrap px-4'>
            <Testimonial
              text="Dude, it's beautiful. Perfection personified."
              author='David B.'
              date='06/07/2024'
              rating={5}
              imageUrl='/David.png'
              car='2022 Tesla Model 3'
            />
            <Testimonial
              text="Thank you so much, Lu! The car looks and smells amazing! It's like I just bought it 🆕 🤍"
              author='Lorraine B.'
              date='06/14/2024'
              rating={5}
              imageUrl='/Lo.png'
              car='2023 Tesla Model Y'
            />
            <Testimonial
              text="Exeeded my expectations! I'm so happy with the results. Thank you! 🙏🏼"
              author='Lise L.'
              date='05/28/2024'
              rating={5}
              imageUrl='/lise.png'
              car='2012 Nissan Xterra Pro-4X'
            />

            {/* Add more testimonials */}
          </div>
        </section>
        <section id='contact' className='py-8 text-center'>
          <h2 className='text-4xl mb-6'>Get in Touch</h2>

          <Cal
            className='w-full mt-6'
            calLink='lucasluize/best-value-detail'
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}></Cal>
        </section>
      </main>
    </>
  );
}
