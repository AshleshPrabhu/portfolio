import Logo from "../logo/Logo"
function Header() {
  const navItems=[
    {
        label:"Home",
        href:"#home",
        class:"active"
    },
    {
        label:"About",
        href:"#about",
        class:""
    },
    {
        label:"Skills",
        href:"#skills",
        class:""
    },
    {
        label:"Projects",
        href:"#projects",
        class:""
    },
    {
        label:"Contact",
        href:"#contact",
        class:""
    },
  ]
    return (
        // <div className="h-screen w-full">
            <header className="bg-[rgba(0,0,0,0.3)] h-16 fixed w-full backdrop-blur-[10px] z-[5]">
            {/* <div className="w-full max-w-7xl ml-28 flex bg-blue-50"> */}
                <nav className="w-full flex justify-between">
                    <div className="ml-5">
                        <Logo/>
                    </div>
                    <div className=" flex h-16 items-center gap-11 mr-4">
                        {
                          navItems.map((ele)=>(
                            <a key={ele.label} href={ele.href} className={`${ele.class==="active"?"border-b-[3px] border-b-[#00FFFF] text-[#00FFFF]":""} hover:text-[#00FFFF] hover:border-b-[3px] hover:border-b-[#00FFFF] active:border-b-[3px] active:border-b-[#00FFFF] text-white`}>{ele.label}</a>
                          ))
                        }
                    </div>
                </nav>
                
            </header>
        //     {/* </div> */}
        //     {/* <Home/>
        //     <About/>
        //     <Skills/>
        //     <Projects/>
        //     <Contact/>
        //      */}
        // {/* </div> */}
)

    
}

// const Home = () => {
//     return (
//       <section id="home" style={{ height: '100vh', padding: '50px', background: '#f0f0f0' }}>
//         <br />
//         <h1>Home Section</h1>
//         <p>Welcome to our website!</p>
//       </section>
//     );
//   };
  
//   const About = () => {
//     return (
//       <section id="about" style={{ height: '200px', padding: '50px', background: '#e0e0e0' }}>
//         <br />
//         <h1>About Section</h1>
//         <p>Learn more about us.</p>
//       </section>
//     );
//   };
//   const Skills = () => {
//     return (
//       <section id="skills" style={{ height: '100vh', padding: '50px', background: '#e0e0e0' }}>
//         <br />
//         <h1>About Section</h1>
//         <p>Learn more about us.</p>
//       </section>
//     );
//   };
//   const Projects = () => {
//     return (
//       <section id="projects" style={{ height: '100vh', padding: '50px', background: '#e0e0e0' }}>
//         <br />
//         <h1>About Section</h1>
//         <p>Learn more about us.</p>
//       </section>
//     );
//   };
  
//   const Contact = () => {
//     return (
//       <section id="contact" style={{ height: '100vh', padding: '50px', background: '#d0d0d0' }}>
//         <br />
//         <h1>Contact Section</h1>
//         <p>Contact us for more information.</p>
//       </section>
//     );
//   };

export default Header