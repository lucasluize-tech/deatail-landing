import { useState } from "react";
import { toast } from "react-hot-toast";

export function ContactForm() {
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
  );
}

export default ContactForm;
