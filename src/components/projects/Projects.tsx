import github from "../../images/github-mark-white.png"
// TODO: add grid when adding more projects
function Projects() {
  return (
    <section id="projects" className="w-full h-[65%] bg-[#080808]">
      <div className="w-full h-[10%] flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Projects</h1>
      </div>
      <div className="w-full h-[90%] flex items-center justify-center">
        <div className=" w-[90%] h-[100%] flex items-center justify-center">
          <div className="w-[30%] h-full bg-white rounded-3xl flex-col justify-center items-center">
            <div className="w-full h-[40%] flex items-center justify-center">
              <div className="w-[80%] h-[95%]  rounded-3xl">
                <img src={github} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="w-full h-[50%] flex items-center justify-center">
              <div className="w-[80%] h-[95%]  flex items-center justify-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos neque voluptas aliquid hic magni maxime odit dignissimos similique, fugit alias voluptate atque unde qui corporis amet eligendi accusantium earum, delectus illo nostrum voluptatem laudantium ut.
              </div>
            </div>
              <div className="w-full h-[10%] flex justify-around items-center rounded-bl-3xl rounded-br-3xl">
              <div className="text-[#00ffff]">
                Live Link
              </div>
              <div>
                <img src={github} alt="" className="w-8 bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects