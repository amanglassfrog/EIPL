"use client";
import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="flex flex-col h-[100vh] text-gray-800">
        {/* Header Section */}
        <header className="bg-blue-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold font-serif">
              Ergonomic Infrabuilt Pvt Ltd (EIPL)
            </h1>
            <p className="mt-2">Building with Precision & Excellence</p>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="relative animate-pulse text-center">
            <img src="/eipl.png" alt="EIPL" className="p-8 h-96" />
          </div>
          <h1 className="text-3xl text-center font-bold typewriter">
            This website is under construction!
          </h1>
          <style jsx>{`
            .typewriter {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              border-right: 3px solid white;
              animation: typing 3s steps(30, end),
                blink-caret 0.5s step-end infinite;
              animation-iteration-count: infinite;
            }

            @keyframes typing {
              from {
                width: 0;
              }
              to {
                width: 100%;
              }
            }

            @keyframes blink-caret {
              50% {
                border-color: transparent;
              }
            }
          `}</style>
        </div>

        {/* Footer Section */}
        <footer className="bg-blue-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>
              © {year || "Loading..."} Ergonomic Infrabuilt Pvt Ltd. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ComingSoon;
