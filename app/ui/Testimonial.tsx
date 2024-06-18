import Image from "next/image";

type TestmonialProps = {
  text: string;
  author: string;
  date: string;
  rating: number;
  imageUrl: string;
  car: string;
};

const Testimonial: React.FC<TestmonialProps> = ({
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
}) => {
  return (
    <div className='p-4 bg-[#1f1f1f] rounded-lg shadow-lg mb-6 w-60 h-60 flex flex-col relative'>
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
};

export default Testimonial;
