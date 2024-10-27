// components/NavbarHero.js
"use client";
import { useState } from "react";
import Image from "next/image";
import pro1 from "../public/project1.png";
import pro2 from "../public/project2.png";
import pro3 from "../public/project3.png";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 min-h-screen">
      <nav className="flex items-center justify-between p-6 bg-white shadow-lg">
        <div className="text-3xl font-bold tracking-wide">MyPortfolio</div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-8 text-lg transition-all duration-300`}
        >
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} className="my-2 md:my-0">
              <a href={`#${item.toLowerCase()}`} className="relative group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-around text-center md:text-left py-20 px-6"
      >
        <section className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">Hello, I’m Yousuf!</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            I’m a passionate developer specializing in web development and
            graphic design. Let’s build something amazing together.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="px-4 py-3 md:px-6 md:py-3 text-base md:text-large bg-gray-800 text-white rounded-full shadow hover:bg-gray-900 transition"
            >
              View My Work
            </a>
          </div>
        </section>
      </section>
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Hello! I’m Yousuf, an Web Developer & Graphics Designer. I bring
            expertise in HTML, CSS, Javascript, Typescript, Next.js, Adobe
            Illustrator And Adobe Photoshop and love creating seamless,
            user-focused experiences. I’m dedicated to crafting solutions that
            blend functionality with visual appeal.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-12 justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6 md:mb-0 w-full md:w-1/2 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <strong className="text-gray-800">
                    Programming Languages:
                  </strong>
                  JavaScript, TypeScript
                </li>
                <li>
                  <strong className="text-gray-800">
                    Frameworks & Libraries:
                  </strong>
                  React, Next.js, Tailwind CSS, Node.js.
                </li>
                <li>
                  <strong className="text-gray-800">
                    Tools & Technologies:
                  </strong>
                  VS Code, Figma, Git.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Design & Problem-Solving
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <strong className="text-gray-800">Tools:</strong>
                  Adobe Illustrator, Adobe Photoshop & Figma
                </li>
                <li>
                  <strong className="text-gray-800">Design:</strong>
                  Skilled in responsive and user-centered design, ensuring every
                  interaction is smooth and visually appealing.
                </li>
                <li>
                  <strong className="text-gray-800">User Experience:</strong>
                  Focused on creating intuitive and engaging experiences across
                  all devices and platforms.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mt-12 max-w-3xl mx-auto">
            I’m committed to continuous learning and innovation, always
            exploring new technologies to stay at the forefront of the field.
            Let’s connect to discuss how I can help bring your vision to life!
          </p>
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Here are some of the projects I have worked on recently, showcasing
            my skills in development and design.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={pro1}
                alt="Project 1"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Food Delivery Website
                </h3>
                <p className="text-gray-600 mb-4">
                  This Is My Food Delivery Website Which I Made Using Next.js
                  And Tailwind.CSS
                </p>
                <a
                  href="https://class-assignment-3-two.vercel.app/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={pro2}
                alt="Project 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Link.io
                </h3>
                <p className="text-gray-600 mb-4">
                  This Is My Course Registration Website Which I Made Using Html
                  & CSS
                </p>
                <a
                  href="https://link-io-website.vercel.app/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={pro3}
                alt="Project 3"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Dynamic Resume Maker
                </h3>
                <p className="text-gray-600 mb-4">
                  This Is My Resume Maker Which I Made Using Html, CSS,
                  Javascript & Typescript
                </p>
                <a
                  href="https://dynamic-resume-maker.vercel.app/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Interested in working together or have any questions? Feel free to
            reach out!
          </p>

          <form className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400"
                placeholder="Ali Ahmed"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-400">
              Im a passionate developer and designer with a focus on creating
              engaging user experiences. I love bringing ideas to life through
              code and design.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:yousufshaikh381@gmail.com"
                className="hover:text-white"
              >
                yousufshaikh381@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a href="tel:+923158130073" className="hover:text-white">
                +92 315 8130073
              </a>
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yousuf-shaikh-691b7b2a3/"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.967 0-1.75-.788-1.75-1.732 0-.943.783-1.732 1.75-1.732s1.75.789 1.75 1.732c0 .944-.783 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.351-4-3.091-4 0v5.604h-3v-11h3v1.722c1.396-2.586 7-2.777 7 2.476v6.802z" />
                </svg>
              </a>
              <a
                href="https://github.com/ShaikhYousuf39"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.416-4.042-1.416-.546-1.385-1.332-1.753-1.332-1.753-1.087-.743.084-.729.084-.729 1.205.084 1.84 1.235 1.84 1.235 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.768.84 1.233 1.911 1.233 3.221 0 4.609-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.289 0 .322.217.694.824.576 4.765-1.587 8.202-6.084 8.202-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100058908816483"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.596 0 0 .6 0 1.325v21.351C0 23.4.596 24 1.325 24H12.82v-9.294H9.692V11.07h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.144v3.24h-1.917c-1.504 0-1.797.715-1.797 1.764v2.31h3.588l-.467 3.636h-3.121V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Yousuf Shaikh. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
