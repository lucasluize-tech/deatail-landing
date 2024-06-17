"use client";

import { useState } from "react";
import ServiceCard from "@/app/ui/serviceCard";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Best Value Detail",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (data.ok == false) {
        toast.error("Failed to send message. Internal Server Error.");
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Best Value Detail",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
    toast.success("Message sent! Check your Email for confirmation.");
  };

  return (
    <>
      <header
        className='hero bg-contain bg-no-repeat bg-bottom h-screen flex lg:items-start items-center justify-center text-center'
        style={{ backgroundImage: "url('/bg-image.jpg')" }}>
        <div className='bg-black bg-opacity-50 p-8 rounded-lg mb-64 lg:mb'>
          <h1 className='text-5xl mb-4 font-serif shadow-sm'>
            Experience the Ultimate Car Detailing
          </h1>
          <p className='text-lg mb-8 font-serif shadow-sm'>
            <i>Professional, Reliable, and Affordable</i>
          </p>
          <a
            href='#services'
            className='font-serif cta-button bg-green-500 text-black 
            py-3 px-6 rounded font-semibold tracking-wide hover:scale-105 transition duration-300 ease-in-out'
            aria-label='Choose your car detailing services now'>
            Get Started
          </a>
        </div>
      </header>

      <main className='px-4 py-8 font-serif'>
        <section
          id='services'
          className='flex items-center flex-col justify-center h-screen text-center py-16 font-serif'>
          <h2 className='text-4xl mb-6 font-semibold font-serif shadow-md'>
            My Services
          </h2>
          <ul className='flex flex-wrap justify-center gap-8'>
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
            <div className='w-full flex flex-col gap-4 text-center italic font-bold lg:items-center'>
              <p>
                * Final price may vary based on vehicle size, model and
                condition.
              </p>
              <a
                className='lg:w-1/2 px-2 py-4 rounded bg-green-500 text-black hover:scale-105 transition duration-500 ease-in-out'
                href='#contact'
                aria-label='Book car detailing services now'>
                Book Now
              </a>
            </div>
          </ul>
        </section>

        <section
          id='about'
          className='flex items-center flex-col justify-center min-h-screen text-center py-16 font-serif'>
          <h2 className='text-4xl mb-6 font-semibold font-serif shadow-md'>
            About Me
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
              a loyal clientele and Hopefully your are Next! Welcome to the UDX
              Family, A Family owned and operated business.
            </p>
          </div>
          <a
            className='lg:w-1/3 px-4 py-4 rounded bg-green-500 text-black hover:scale-105 transition duration-500 ease-in-out font-bold'
            href='#contact'
            aria-label='Book professional car detailing services now'>
            Book Your Detail
          </a>
        </section>

        <section
          id='testimonials'
          className='lg:w-1/2 mx-auto py-8 bg-#2e2d2d-900 text-center'>
          <h2 className='text-4xl mb-6'>What My Customers Say</h2>
          <div className='flex items-center justify-start space-x-6 overflow-x-auto whitespace-nowrap'>
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

            {/* Add more testimonials */}
          </div>
        </section>

        <section id='contact' className='py-8 text-center'>
          <h2 className='text-4xl mb-6'>Get in Touch</h2>
          <form onSubmit={handleSubmit} className='space-y-4 max-w-md mx-auto'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full p-3 rounded bg-gray-700 text-white'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full p-3 rounded bg-gray-700 text-white'
            />
            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
              required
              className='w-full p-3 rounded bg-gray-700 text-white'
            />
            <select
              name='service'
              value={formData.service}
              onChange={handleChange}
              className='w-full p-3 rounded bg-gray-700 text-white'>
              <option value='Premium Wash'>Premium Wash</option>
              <option value='Best Value Detail'>Best Value Detail</option>
              <option value='Full Detail'>Full Detail</option>
            </select>
            <textarea
              name='message'
              placeholder='Please enter vehicle details make, model, year, and car condition. Final Price will be based on the dirtiness of the vehicle.'
              value={formData.message}
              onChange={handleChange}
              required
              className='h-[150px] w-full p-3 rounded bg-gray-700 text-white'
            />
            <button
              type='submit'
              className='cta-button bg-green-500 font-bold text-black py-3 px-6 rounded'>
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

// const Testimonial = ({ text, author }: { text: string; author: string }) => (
//   <div className='p-4 bg-gray-700 rounded-lg shadow-lg bg-opacity-30 mb-6'>
//     <p className='mb-2'>&quot;{text}&quot;</p>
//     <p className='font-bold'>- {author}</p>
//   </div>
// );

const Testimonial = ({
  text,
  author,
  date,
  rating,
  imageUrl,
  car,
}: {
  text: string;
  author: string;
  date: string;
  rating: number;
  imageUrl: string;
  car: string;
}) => (
  <div className='p-4 bg-gray-800 rounded-lg shadow-lg mb-6 w-60 h-60 flex flex-col relative'>
    <div className='flex items-center mb-2'>
      <Image
        src={imageUrl}
        alt={author}
        width={40}
        height={40}
        className='w-10 h-10 rounded-full mr-3'
      />
      <p className='font-bold text-white text-left'>{author}</p>
    </div>
    <p className='mb-4 text-gray-300 text-sm text-left break-words text-wrap '>
      &quot;{text}&quot;
    </p>
    <p className='text-xs text-gray-400 text-left font-semibold'>{car}</p>
    <div className='flex justify-between items-end mt-auto'>
      <div className='flex'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-500"
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
      <p className='text-xs text-gray-400'>{date}</p>
    </div>
  </div>
);
