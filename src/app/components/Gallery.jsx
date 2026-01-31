"use client";
import ThreeDPhoto from './ThreeDPhoto';
import { motion } from 'framer-motion';

const images = [
    { id: 1, title: "Mountain Mist", src: "/images/1.jpg" },
    { id: 2, title: "Urban Life", src: "/images/2.jpg" },
    { id: 3, title: "Wild Fox", src: "/images/3.jpg" },
    { id: 4, title: "Ocean Blue", src: "/images/4.jpg" },
    { id: 5, title: "Starry Night", src: "/images/5.jpg" },
    { id: 6, title: "Desert Sands", src: "/images/6.jpg" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                >
                    3D Showcase
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ThreeDPhoto src={img.src} title={img.title} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}