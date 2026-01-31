"use client";
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function ThreeDPhoto({ src, title }) {
    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.05} // Zooms in slightly on hover
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={1000}
        >
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-2xl group border-4 border-white/10">
                <Image
                    src={src}
                    alt={title || "Gallery Image"}
                    fill
                    className="object-cover"
                />

                {/* 3D Floating Text Layer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-z-20 transform transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {title || "Untitled Shot"}
                    </h3>
                    <p className="text-blue-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                    </p>
                </div>
            </div>
        </Tilt>
    );
}