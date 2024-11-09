const projectBg = ["projectsBG.jpg", "projectCardImg1.jpg", "projectCardImg2.jpg", "projectCardImg3.jpg"];

export default function Projectss() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/${projectBg[0]})`
            }}
        >

            <div className="absolute inset-0 bg-gray-800 opacity-70"></div>


            <h1 className="relative text-white text-4xl font-bold text-center p-10 z-10">
                Projects
            </h1>
            <section className="relative flex flex-row justify-evenly w-full max-w-5xl z-10">

                {projectBg.slice(1).map((image, index) => (
                    <div key={index} className="group relative w-[300px] h-[400px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-lg mb-20 overflow-hidden cursor-pointer">
                        <img src={`${process.env.PUBLIC_URL}/img/${image}`} alt="" className="h-full w-full object-cover rounded-lg" />
                        
                        <div className="absolute bottom-4 left-4 z-10">
                            <h1 className="text-white text-xl font-bold">Project name: {index === 0 ? 'Portas' : index === 1 ? 'AI Power' : 'GirlsPort'}</h1>
                        </div>

                        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <button className="border-2 border-white py-2 px-4 rounded-lg bg-white text-black transition-all duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <button className="relative z-10 text-2xl mb-10 hover:text-white hover:bg-black cursor-pointer border-2 border-white bg-white py-2 px-6 rounded-lg transition-all">
                More
            </button>
        </div>
    );
}
