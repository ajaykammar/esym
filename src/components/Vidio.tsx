import React from 'react'

const Vidio = () => {
    return (
        <>
            <div>
                <section className="py-24 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-16 text-black">Featured Virtual Simulation</h2>
                            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Featured Virtual Simulation"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-12 text-center">
                                <h3 className="text-3xl font-bold mb-6 text-gray-800">Quantum Mechanics Simulation</h3>
                                <p className="text-gray-800 text-lg max-w-3xl mx-auto">
                                    Experience quantum phenomena through our advanced 3D visualization engine.
                                    Understand complex concepts through interactive experiments and real-time simulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Vidio