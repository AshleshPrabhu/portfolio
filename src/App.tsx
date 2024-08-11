import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Line from "./Line"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
function App() {

  return (
    <div className="bg-[#080808] h-screen">
      <Header/> 
      <div className="w-full h-16"/>
      <Home/>
      <Line/>
      <About/>
      <Line/>
      <Skills/>
      <Line/>
      <Projects/>
    </div>
  )
}

export default App
// App.js
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Home />
//       <About />
//       <Contact />
//     </div>
//   );
// }

// const Nav = () => {
//   return (
//     <nav>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// const Home = () => {
//   return (
//     <section id="home" style={{ height: '100vh', padding: '50px', background: '#f0f0f0' }}>
//       <h1>Home Section</h1>
//       <p>Welcome to our website!</p>
//     </section>
//   );
// };

// const About = () => {
//   return (
//     <section id="about" style={{ height: '100vh', padding: '50px', background: '#e0e0e0' }}>
//       <h1>About Section</h1>
//       <p>Learn more about us.</p>
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" style={{ height: '100vh', padding: '50px', background: '#d0d0d0' }}>
//       <h1>Contact Section</h1>
//       <p>Contact us for more information.</p>
//     </section>
//   );
// };

// export default App;

// App.js
// App.tsx
// import React, { useRef } from 'react';
// import './App.css';

// function App() {
//   // Define the type for the refs
//   const homeRef = useRef<HTMLElement | null>(null);
//   const aboutRef = useRef<HTMLElement | null>(null);
//   const contactRef = useRef<HTMLElement | null>(null);

//   // Define a function to scroll to a section
//   const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
//     // Use optional chaining to ensure ref is not null
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           <li>
//             <button onClick={() => scrollToSection(homeRef)}>Home</button>
//           </li>
//           <li>
//             <button onClick={() => scrollToSection(aboutRef)}>About</button>
//           </li>
//           <li>
//             <button onClick={() => scrollToSection(contactRef)}>Contact</button>
//           </li>
//         </ul>
//       </nav>
//       <section
//         ref={homeRef}
//         id="home"
//         style={{ height: '100vh', padding: '50px', background: '#f0f0f0' }}
//       >
//         <h1>Home Section</h1>
//         <p>Welcome to our website!</p>
//       </section>
//       <section
//         ref={aboutRef}
//         id="about"
//         style={{ height: '100vh', padding: '50px', background: '#e0e0e0' }}
//       >
//         <h1>About Section</h1>
//         <p>Learn more about us.</p>
//       </section>
//       <section
//         ref={contactRef}
//         id="contact"
//         style={{ height: '100vh', padding: '50px', background: '#d0d0d0' }}
//       >
//         <h1>Contact Section</h1>
//         <p>Contact us for more information.</p>
//       </section>
//     </div>
//   );
// }

// export default App;
