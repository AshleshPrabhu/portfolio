import image from "../../images/Photo.jpg"
function About() {
    return (
    <section id="about" className="w-full h-[75%] bg-[#080808] flex-col items-centre justify-end">
        <div className="w-full h-[10%] flex items-center justify-center">
            <h1 className="text-4xl text-white font-bold">About <span className="text-[#00ffff]">Me</span></h1>
        </div>
        <div className="w-full h-[90%] flex items-center justify-center ">
            <div className="bg-gray-300 w-[90%] h-[90%] rounded-[30px] flex shadow-[0_0_25px_white]">
                <div className="w-[25%] h-full flex items-center justify-center">
                    <img src={image} alt="" className="w-36 h-36"/>
                </div>
                <div className="h-full w-2 flex justify-center items-center">
                    <div className="h-[98%] w-2 bg-black rounded-xl"/>
                </div>
                <div className="h-full w-[calc(100%-25%-8px)] flex items-center">
                    <p className="font-sans font-bold text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia aut maxime vel, commodi magni doloribus nihil eum facilis fugiat odit in quasi. Nemo veritatis quibusdam, quod molestiae provident alias.
                        Harum sequi inventore quaerat exercitationem, enim amet dicta cupiditate qui quidem nostrum corrupti ipsam nisi repudiandae distinctio expedita officiis aliquid explicabo sapiente tenetur ab. Nam eos quae atque rerum voluptates.
                        Officiis soluta enim veniam illum a consectetur earum omnis nostrum, modi incidunt, aperiam repellat, corrupti animi cupiditate ipsum excepturi reprehenderit eius similique minima ex? Reprehenderit quis temporibus asperiores quia laboriosam?
                        Nam sequi tempore nemo iste nihil eos velit dolorem, laborum incidunt ab reiciendis qui voluptatem suscipit ut dolor assumenda numquam, vero libero, et quasi magni commodi doloremque! Odio, assumenda minima.
                    </p>
                </div>
            </div>
        </div>
    </section>
)
}

export default About