import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronRight, Code2, Briefcase, User, FileDown, GraduationCap, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import lince from './assets/lince.jpeg';
import inteliX from './assets/intelix.jpeg';
import typescript from './assets/icons/typescript-icon.svg';
import flutter from './assets/icons/flutter.svg';
import { FaReact, FaJsSquare, FaStar } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: 'React', level: 85, icon: <FaReact className="text-blue-300 w-12 h-12" /> },
    { name: 'JavaScript', level: 90, icon: <FaJsSquare className="text-yellow-500 w-12 h-12" /> },
    { name: 'TypeScript', level: 75, icon: <img src={typescript} alt="TypeScript" className="w-12 h-12" /> },
    { name: 'Flutter', level: 80, icon: <img src={flutter} alt="Flutter" className="w-12 h-12" /> }
  ];

  const projects = [
    {
      title: "LINCE Occupational Consulting",
      description: "Management and analysis system for the company LINCE. The platform includes client management, process management, and full control of finances and reports.",
      image: lince,
      tags: ["PHP", "CakePHP", "MySQL", "JavaScript"]
    },
    {
      title: "ChatBot from InteliX",
      description: "I contributed to the front-end development of the chatbot system and management of AI models for the InteliX Startup. This includes the ability to manage the knowledge base and bot training.",
      image: inteliX,
      tags: ["React", "Redux", "TypeScript", "Tailwind CSS"]
    },
  ];

  const experience = [
    {
      company: "Linear Sistemas",
      role: "Front-End Developer",
      period: "2022 - Present",
      description: `- Actively participating in rebuilding the company's main product, which was originally a desktop application and is now being redesigned into a web solution.\n
        - Responsible for integrating the application's microservices, ensuring efficient communication between system modules.\n
        - Development of reusable components to optimize the interface and enhance the user experience.\n
        - Implementing solutions for the ERP system. Development of essential modules such as finance, inventory, tax, sales, customer management (CRM), among others.\n
        - Writing unit and integration tests to ensure system quality and stability, improving test coverage and reducing production bugs.`
    },
    {
      company: "G2i",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: `- Contributed to the company's internal management system, enabling task control and productivity for the team. Additionally, improved the creation of tasks assigned to collaborators.\n
        - Worked on providing solutions for the finance, customer service, and electronic medical record areas.\n
        - Responsible for the creation and maintenance of the internal system's Knowledge Base.`
    }
  ];

  const educations = [
    {
      degree: "Information Systems",
      institution: "Federal University of Mato Grosso do Sul (UFMS)",
      period: "2018 - 2022",
      description: "Bachelor's degree"
    }
  ];

  const certifications = [
    {
      name: "Web Design: Build websites with PHP, HTML, CSS, and JavaScript",
      issuer: "Udemy",
      date: "2023",
      link: "https://drive.google.com/file/d/1AzHMaQGjyB9kGds4u2fgNxGdPC_S4D2u/view?usp=sharing"
    },
    {
      name: "Complete Modern Web Course with JavaScript 2021",
      issuer: "Udemy",
      date: "2022",
      link: "https://drive.google.com/file/d/1XldxwRqvPCxa65PvgduVcBZAI40M-FqS/view?usp=sharing"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* <span className="block text-xl font-bold text-emerald-400">Fernando K. Yahiro</span> */}
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#projects" className="text-gray-300 hover:text-emerald-400">Projects</a>
              <a href="#experiences" className="text-gray-300 hover:text-emerald-400">Experience</a>
              <a href="#educations" className="text-gray-300 hover:text-emerald-400">Education</a>
              <a href="#about" className="text-gray-300 hover:text-emerald-400">About</a>
              <a href="#skills" className="text-gray-300 hover:text-emerald-400">Skills</a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-emerald-400">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Projects</a>
              <a href="#experiences" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Experience</a>
              <a href="#educations" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Education</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Skills</a>
            </div>
          </div>
        )}
      </nav>

      <section id="contacts" className="pt-32 pb-20 bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-400 mb-6">
              Frontend Developer
            </h1>
            <p className="text-xl font-bold text-gray-300 mb-8">
              Fernando Kendy Yahiro
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/kendyyahiro" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/fernando-kendy-yahiro-20a636213/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:fernandokyahiro@gmail.com" className="text-gray-300 hover:text-emerald-400">
                <Mail size={24} />
              </a>
            </div>
            <a
              href="/curriculum-fernando-kendy-yahiro.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200">
              <FileDown className="mr-2" size={20} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-800">
        <div className="min-w-5xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Code2 className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
            <h2 className="text-3xl font-bold text-white">Projects</h2>
          </div>
          <Swiper
            style={{ height: 560 }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2, },
              1024: { slidesPerView: 3, },
            }}
            className="project-carousel">
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden h-full">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-emerald-900 text-emerald-300 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="experiences" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <div className="text-emerald-400 mb-2 font-semibold">{exp.role}</div>
                <div className="text-gray-400 mb-4">{exp.period}</div>
                <p style={{ whiteSpace: "pre-line" }} className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="educations" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="text-center mb-12">
              <GraduationCap className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-8">
              {educations.map((education, index) => (
                <div key={index} className="bg-gray-700 rounded-lg shadow-xl p-6">
                  <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                  <div className="text-emerald-400 mb-2 font-semibold">{education.institution}</div>
                  <div className="text-gray-400 mb-4">{education.period}</div>
                  <p className="text-gray-300">{education.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <Award className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-200"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                  <div className="text-emerald-400 font-semibold mb-1">{cert.issuer}</div>
                  <div className="text-gray-400">{cert.date}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              I have 4 years of experience as a software developer with a Bachelor's in Information Systems from UFMS. Specializing in Front-End technologies like <strong>React, TypeScript, and JavaScript</strong>, I’ve contributed to projects in healthcare, retail, and business management. I work well with cross-functional teams using agile methodologies to deliver high-quality results. Passionate about continuous learning, I aim to apply new technologies to drive growth and success in every project.
            </p>
            <a href="#contacts" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
              Get in touch <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FaStar className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
            <h2 className="text-3xl font-bold text-white">Key Skills</h2>
          </div>
          <div className="flex justify-center items-center space-x-8">
            {skills.map((skill, index) => (
              <div key={index} className="justify-items-center items-center bg-gray-700 rounded-lg p-6 shadow-xl w-[20%]">
                {skill.icon}
                <div className="mt-4 text-center text-white font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-emerald-400">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500">© 2025 Fernando Kendy Yahiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;