"use client";

import { useState } from "react";

const ServiceCard = ({
  title,
  description,
  price,
  details,
  highlight,
}: {
  title: string;
  description: string;
  price: string;
  details: string[];
  highlight?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 ${
        highlight
          ? "bg-black text-green text-md font-normal tracking-wide font-serif"
          : "bg-gray-900 text-white tracking-wide"
      }`}
      onClick={() => setExpanded(!expanded)}
      style={{
        border: "2px solid white",
        boxShadow: "0 0 15px white",
        borderRadius: "10px",
        overflow: "hidden",
      }}>
      <div
        className={`absolute inset-0 bg-green-700 opacity-10 transition duration-700 ${
          expanded ? "opacity-100" : ""
        }`}
        style={{ filter: "blur(20px)" }}></div>
      <div className='relative z-10'>
        <h3
          className={`text-2xl mb-4 ${
            highlight && expanded ? "font-bold" : ""
          }`}>
          {title}
        </h3>
        <p className='mb-4'>{description}</p>
        <p className='font-bold mb-4'>{price}</p>
        {expanded && (
          <ul className='list-disc list-inside mb-4'>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        {expanded && <div className='font-bold text-black '>⬆️</div>}
        {!expanded && (
          <div className='flex flex-col items-center cta-button text-green-600'>
            <p className='px-4'>details</p>
            <p className='px-4'>⬇</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
