"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
	{
		id: "instalatii",
		title: "Execuție & Cablaj",
		number: "01",
		description:
			"Instalații electrice complete pentru case și apartamente în Iași, de la zero până la predarea cheii.",
		colSpan: "col-span-12 md:col-span-8",
		image: "/knx.webp", // Placeholders
	},
	{
		id: "tablouri",
		title: "Tablouri Electrice",
		number: "02",
		description: "Asamblare profesională, siguranțe premium și management termic pentru tablouri de forță și automatizare.",
		colSpan: "col-span-12 md:col-span-4",
		image: "/light.avif",
	},
	{
		id: "comercial",
		title: "Spații Comerciale",
		number: "03",
		description:
			"Echipare electrică pentru birouri, magazine și showroom-uri, respectând toate normele de securitate în vigoare.",
		colSpan: "col-span-12 md:col-span-4",
		image: "/panel.jpeg",
	},
	{
		id: "smart",
		title: "Automatizări Smart",
		number: "04",
		description: "Soluții inteligente pentru controlul iluminatului, climatizării și accesului, integrate într-un ecosistem unitar.",
		colSpan: "col-span-12 md:col-span-8",
		image: "./security.webp",
	},
];

export default function ExpertiseBento() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

	return (
		<section
			ref={containerRef}
			id="expertise"
			className="relative w-full bg-prime-bg-main py-24 lg:py-56 px-4 lg:px-12 z-50"
		>
			<div className="max-w-7xl mx-auto w-full">
				{/* Antetul Secțiunii (Text Reveal Mask) */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
					<div className="overflow-hidden">
						<motion.h2
							initial={{ y: "100%", opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
							className="text-5xl md:text-7xl font-serif font-light uppercase tracking-tight max-w-xl pb-2 leading-[0.9]"
						>
							Arii de expertiză
						</motion.h2>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xs uppercase tracking-[0.2em] font-mono text-prime-text-mut flex items-center gap-4"
					>
						<span className="w-12 h-px bg-zinc-300"></span>
						Standarde Premium
					</motion.div>
				</div>

				{/* Grila Asimetrică (Bento) cu borduri fine */}
				<div className="grid grid-cols-12 gap-px bg-prime-border border-prime-border">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.7,
								delay: index * 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
							className={`${service.colSpan} group relative bg-prime-bg-main min-h-100 sm:min-h-112 md:min-h-112 p-6 sm:p-8 md:p-12 overflow-hidden flex flex-col justify-between`}
						>
							{/* Imaginea de fundal cu efect de Parallax (Scroll-based) + Scale (Hover) */}
							{service.image && (
								<div className="absolute inset-0 z-0 overflow-hidden">
									<motion.img
										style={{ y: imageY }}
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transition-transform duration-1000 origin-center scale-[1.2] group-hover:scale-[1.25]"
									/>
									{/* Gradient rafinat adaptat pt mobile */}
									<div className="absolute inset-0 bg-linear-to-t from-prime-bg-main via-prime-bg-main/60 to-transparent z-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-95" />
								</div>
							)}

							{/* Overlay la hover - fallback pentru cand e fără imagine */}
							<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
							<div className="relative z-10 flex justify-between items-start w-full">
								<span className="text-prime-text-mut font-serif italic text-3xl sm:text-4xl transition-colors duration-500 group-hover:text-prime-text-main">
									{service.number}
								</span>
								{/* Arrow care apare subtil sus */}
								<div className="w-8 h-8 rounded-full border border-prime-border flex items-center justify-center opacity-100 sm:opacity-0 translate-y-0 sm:-translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-prime-bg-main">
									<span className="text-xs">↗</span>
								</div>
							</div>

							<div className="relative z-10 mt-auto">
								<h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-wide mb-3 sm:mb-4 transition-transform duration-500 group-hover:-translate-y-2">
									{service.title}
								</h3>
								<p className="text-xs sm:text-sm font-light text-prime-text-mut max-w-sm max-h-none sm:max-h-0 opacity-100 sm:opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 group-hover:-translate-y-2 leading-relaxed">
									{service.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}