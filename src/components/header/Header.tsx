import Logo from "../logo/Logo"
function Header() {
    
    return (
        <div className="h-screen w-full">
            <header className=" bg-red-500 h-16 fixed w-full">
            {/* <div className="w-full max-w-7xl ml-28 flex bg-blue-50"> */}
                <nav className="w-full flex justify-between">
                    <div className="ml-5">
                        <Logo/>
                    </div>
                    <ul className=" flex h-16 items-center gap-11 mr-4">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            {/* </div> */}
            </header>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            
        </div>
)

    
}

const Home = () => {
    return (
      <section id="home" style={{ height: '100vh', padding: '50px', background: '#f0f0f0' }}>
        <br />
        <h1>Home Section</h1>
        <p>Welcome to our website!</p>
      </section>
    );
  };
  
  const About = () => {
    return (
      <section id="about" style={{ height: '200px', padding: '50px', background: '#e0e0e0' }}>
        <br />
        <h1>About Section</h1>
        <p>Learn more about us.</p>
      </section>
    );
  };
  const Skills = () => {
    return (
      <section id="skills" style={{ height: '100vh', padding: '50px', background: '#e0e0e0' }}>
        <br />
        <h1>About Section</h1>
        <p>Learn more about us.</p>
      </section>
    );
  };
  const Projects = () => {
    return (
      <section id="projects" style={{ height: '100vh', padding: '50px', background: '#e0e0e0' }}>
        <br />
        <h1>About Section</h1>
        <p>Learn more about us.</p>
      </section>
    );
  };
  
  const Contact = () => {
    return (
      <section id="contact" style={{ height: '100vh', padding: '50px', background: '#d0d0d0' }}>
        <br />
        <h1>Contact Section</h1>
        <p>Contact us for more information.</p>
      </section>
    );
  };

export default Header