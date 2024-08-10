import github from "../../images/github-mark-white.png"
function Skills() {
    return (
    <section id='skills' className="w-full h-[75%]  flex flex-col items-center justify-center bg-[#080808]">
        <div className="w-full h-[10%] flex items-center justify-center">
            <h1 className="text-4xl text-white font-bold">Skills</h1>
        </div>
        <div className="w-full h-[70%] flex items-center justify-center ">
            <div className="w-[70%] h-[90%] grid shadow-[0_0_25px_white] rounded-3xl text-white grid-cols-7 gap-1">
                <div className="cursor-pointer w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" />
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css5"/>
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/> 
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" />
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/>
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript"/>
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg" alt="appwrite" />
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c"/>
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="c++"/>
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"/>
                </div>
                <div className="cursor-pointer  w-[95px] h-full flex items-center justify-center">
                    <img className="hover:scale-[1.1] transition duration-[500ms]" src={github} alt="github"/>
                </div>
            </div>
        </div>
    </section>
)
}

export default Skills