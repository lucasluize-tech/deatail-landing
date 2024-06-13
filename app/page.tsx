"use client";

import { useState } from "react";
import ServiceCard from "@/app/ui/serviceCard";
import toast from "react-hot-toast";

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
        className='hero bg-contain bg-no-repeat bg-bottom h-screen flex items-center justify-center text-center'
        style={{ backgroundImage: "url('/bg-image.jpg')" }}>
        <div className='bg-black bg-opacity-50 p-8 rounded-lg mb-64'>
          <h1 className='text-5xl mb-4 font-serif shadow-sm'>
            Experience the Ultimate Car Detailing
          </h1>
          <p className='text-lg mb-8 font-serif shadow-sm'>
            <i>Professional, Reliable, and Affordable</i>
          </p>
          <a
            href='#services'
            className='font-serif cta-button bg-green-500 text-black py-3 px-6 rounded font-semibold tracking-wide hover:scale-105 transition duration-300 ease-in-out'>
            Get Started
          </a>
        </div>
      </header>

      <main className='px-4 py-8 font-serif'>
        <section id='services' className='text-center py-8 font-serif'>
          <h2 className='text-4xl mb-6 font-semibold font-serif shadow-md'>
            My Services
          </h2>
          <div className='flex flex-wrap justify-center gap-8'>
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
                "Ceramic Protection",
                "Interior Protection",
                "Streak free windows",
              ]}
              highlight
            />
            <ServiceCard
              title='Full Detail'
              description='Complete detailing for your car.'
              price='From $349*'
              details={[
                "Complete exterior and interior detailing",
                "Steam Cleaning and Sanitizing",
                "UV Protection",
                "Full interior Extraction",
                "Ceramic coating",
                "Tire and wheel detailing and dressing",
              ]}
            />
            <div className='w-full flex flex-col gap-4 text-center italic font-bold'>
              <p>
                * Final price may vary based on vehicle size, model and
                condition.
              </p>
              <a
                className='px-2 py-4 rounded bg-green-500 text-black hover:scale-105 transition duration-500 ease-in-out'
                href='#contact'>
                Book Now
              </a>
            </div>
          </div>
        </section>

        <section id='testimonials' className='py-8 bg-#2e2d2d-900 text-center'>
          <h2 className='text-4xl mb-6'>What My Customers Say</h2>
          <div className='flex items-center justify-start space-x-6 overflow-x-auto whitespace-nowrap'>
            <Testimonial text='Perfection Personified!' author='David B.' />
            <Testimonial text='Highly recommend!' author='Lorraine B.' />
            <Testimonial text='Great job!' author='Dad' />
            <Testimonial text='Excellent work!' author='Wayne C.' />
            <Testimonial text='Very satisfied!' author='Customer E' />
            <Testimonial text='Will be back!' author='Customer F' />
            <Testimonial text='Top-notch!' author='Customer G' />
            <Testimonial text='Impressive!' author='Customer H' />
            <Testimonial text='Outstanding!' author='Customer I' />
            <Testimonial text='Great service!' author='Customer J' />
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
              className='cta-button bg-green-500 text-black py-3 px-6 rounded'>
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

const Testimonial = ({ text, author }: { text: string; author: string }) => (
  <div className='p-4 bg-gray-700 rounded-lg shadow-lg bg-opacity-30'>
    <p className='mb-2'>&quot;{text}&quot;</p>
    <p className='font-bold'>- {author}</p>
  </div>
);
