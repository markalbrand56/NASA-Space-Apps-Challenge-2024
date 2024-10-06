import React from 'react'

const TextItem = () => {
    const text = "James Webb Space Telescope";

  return (
    <>
      <h1 className="md:text-4xl text-2xl font-bold leading-6 text-white md:py-10 py-12">
        {[...text].map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.20}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </>
  );
}

export default TextItem