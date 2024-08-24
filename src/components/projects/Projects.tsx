import github from "../../images/github-mark-white.png"
import Project1 from "../../images/Project1.png"
// TODO: add grid when adding more projects
function Projects() {
  return (
    <section id="projects" className="w-full h-[75%] bg-[#080808]">
      <div className="w-full h-[10%] flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Projects</h1>
      </div>
      <div className="w-full h-[80%] flex items-center justify-center mb-4">
        <div className=" w-[90%] h-[100%] flex items-center justify-center">
          <div className="w-[29%] h-full bg-gray-200 rounded-3xl flex-col justify-center items-center">
            <div className="w-full h-[50%] flex items-center justify-center">
              <div className="w-[80%] h-[95%]  rounded-3xl">
                <img src={Project1} alt="Project 1" className="w-full h-[100%] rounded-3xl" />
              </div>
            </div>
            <div className="w-full h-[40%] flex items-center justify-center">
              <div className="w-[80%] h-[95%]  flex-col  items-center justify-center">
                <div className=" flex justify-center">
                  <h3 className=" font-bold text-3xl">MyBlog</h3>
                </div>
                <div>
                  <p className="text-lg text-gray-500">This project is a feature-rich blog application using ReactJS on the frontend and Appwrite on the backend.</p>
                  <div className="text-lg mt-2 flex">
                    <p>Tech Stack: </p>
                    <img className="w-8" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                    <img className="w-8" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                    <img className="w-8" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"/>
                    <img className="w-8" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                    <img className="w-8" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"/>
                    <img className="w-8" src="https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg"/>
                  </div>
                </div>
              </div>
            </div>
              <div className="w-full h-[10%] flex justify-around items-center rounded-bl-3xl rounded-br-3xl">
              <div className="text-black">
                <a href="https://my-blog-ashlesh.vercel.app" target="_blank">Live Link</a>
              </div>
              <div className=" cursor-pointer">
                <a href="https://github.com/AshleshPrabhu/MyBlog" target="_blank"><img src={github} alt="" className="w-8 bg-black" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects