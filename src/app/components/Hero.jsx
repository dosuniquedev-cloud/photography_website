"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Your custom CSS for the dots (optional, keeps it clean)
import "./Hero.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const slides = [
    {
        id: 1,
        image: `${basePath}/images/1.jpg`,
        title: "Mountain Mist",
        subtitle: "Capture the serene beauty of the highlands."
    },
    {
        id: 2,
        image: `${basePath}/images/2.jpg`,
        title: "Wild Spirits",
        subtitle: "Nature in its rawest, most beautiful form."
    },
    {
        id: 3,
        image: `${basePath}/images/3.jpg`,
        title: "Urban Life",
        subtitle: "The hustle and bustle of city lights."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1920&auto=format&fit=crop",
        title: "Starry Nights",
        subtitle: "Long exposure shots of the infinite universe."
    }
];

export default function Hero() {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center">

            {/* Background Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-0 pointer-events-none" />

            <div className="z-10 w-full h-[80vh]">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 35, // Angle of the 3D rotation
                        stretch: 0,
                        depth: 250, // How "deep" the 3D effect is
                        modifier: 1,
                        slideShadows: true, // Cool shadow on side images
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-full pt-10"
                >
                    {slides.map((slide) => (
                        // SwiperSlide must have a fixed width for "slidesPerView: auto" to work nicely
                        <SwiperSlide key={slide.id} className="w-[85vw] md:w-[600px] lg:w-[800px] relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                            <div className="relative w-full h-full group">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Text Overlay (Visible on Active Slide) */}
                                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
                                    <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg translate-y-10 group-[.swiper-slide-active]:translate-y-0 transition-transform duration-700">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-200 text-lg md:text-xl mt-4 max-w-lg opacity-0 group-[.swiper-slide-active]:opacity-100 transition-opacity duration-700 delay-200">
                                        {slide.subtitle}
                                    </p>
                                    <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold opacity-0 group-[.swiper-slide-active]:opacity-100 transition-all duration-700 delay-300 transform hover:scale-105">
                                        View Gallery
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}