"use client";
import Tilt from 'react-parallax-tilt';

export default function Membership() {
    return (
        <section id="contest" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative">

            {/* Background Glow Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-6">Join the Club</h2>

                <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">

                    {/* Card 1: Student */}
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="w-full md:w-1/3">
                        <div className="h-full border border-white/10 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] hover:border-blue-500/50 transition-colors">
                            <h3 className="text-2xl font-bold mb-2 text-gray-300">Student</h3>
                            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6">₹500</p>
                            <ul className="text-left text-gray-400 space-y-4 mb-8">
                                <li className="flex items-center">✓ Submit 5 Photos</li>
                                <li className="flex items-center">✓ Digital Certificate</li>
                                <li className="flex items-center">✓ Online Gallery Access</li>
                            </ul>
                            <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 rounded-xl font-semibold transition backdrop-blur-sm">
                                Get Started
                            </button>
                        </div>
                    </Tilt>

                    {/* Card 2: Pro (Emphasized) */}
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} className="w-full md:w-1/3">
                        <div className="h-full border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_60px_-15px_rgba(37,99,235,0.5)] relative overflow-hidden">
                            {/* Shine Effect */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>

                            <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
                            <p className="text-5xl font-bold text-white mb-6">₹1200</p>
                            <ul className="text-left text-gray-300 space-y-4 mb-8">
                                <li className="flex items-center text-blue-300">✦ Unlimited Submissions</li>
                                <li className="flex items-center text-blue-300">✦ Hardcopy Certificate</li>
                                <li className="flex items-center text-blue-300">✦ Feature in Magazine</li>
                                <li className="flex items-center text-blue-300">✦ ID Card Included</li>
                            </ul>
                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-1">
                                Join Now
                            </button>
                        </div>
                    </Tilt>

                </div>
            </div>
        </section>
    );
}