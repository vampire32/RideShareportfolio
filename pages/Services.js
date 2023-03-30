import Navbar from '@/Components/Navbar'
import Image from 'next/image';
import React from 'react'
import L1 from '../img/r4.png'
import R1 from "../img/R1.png";
import R2 from "../img/r5.png";
import R3 from "../img/R3.png";
import R4 from "../img/R2.png";
import R5 from "../img/image6.png";
import R6 from "../img/r6.png";
import R7 from "../img/r7.png";
import mobile from '../img/mobile.png'
import Footer from "../Components/Footer";

const Services = () => {
  return (
		<>
			<div className="bgimage4  sm:h-[100vh] lg:h-[70vh]">
				<Navbar />
				<section class="text-white body-font">
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
							<h1 class="text-[50px] mb-4 font-medium text-white">
								Take
								<br /> freedom into
								<br /> your own hands
							</h1>
							<p class="mb-8 leading-relaxed text-[25px]">
								We give people one of the most important things in life -
								freedom. Every day, our users make their own choices and close
								deals on transparent and honest terms, without middlemen.
							</p>
						</div>
						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<div class="object-cover object-center rounded drop-shadow-2xl"></div>
							<Image className="drop-shadow-2xl" alt="hero" src={L1} />
						</div>
					</div>
				</section>
			</div>
			<section className="bgimage2 container-fluid pb-20">
				<h1 className="text-center text-white py-5 font-bold text-[36px]">
					So why Choose Us?
				</h1>
				<div className="row m-auto ">
					<div className="col-md-4">
						<Image src={R1} className="sm:ml-0 lg:ml-[25%] " />
						<h3 className="text-white text-center text-[20px] font-bold">
							Offer your fare
						</h3>
						<p className="text-white text-center mt-3">
							RideShare exists to prove that people can always come to an
							agreement. Despite traffic or bad weather, the win-win price stays
						</p>
					</div>
					<div className="col-md-4">
						<Image src={R2} className="sm:ml-0 lg:ml-[25%]" />
						<h3 className="text-white text-center text-[20px] font-bold">
							Freedom of choice
						</h3>
						<p className="text-white text-center mt-3">
							Total transparency brings back the feeling of control. passengers
							are free to choose any driver: by rating, car, pick-up time, and
							price offers drivers can see the exact route before accepting
						</p>
					</div>
					<div className="col-md-4">
						<Image src={R3} className="sm:ml-0 lg:ml-[25%]" />
						<h3 className="text-white text-center text-[20px] font-bold">
							Know who your driver will be
						</h3>
						<p className="text-white text-center mt-3">
							route details are open info real-time location sharing for
							passengers and drivers 24/7 chat support emergency button is
							always at hand Day by day, many more safety features become
							available
						</p>
					</div>
				</div>
			</section>
			<section class="text-white bgimage5 body-font">
				<h1 className="text-center text-[36px] font-bold pt-5">
					How does it work?
				</h1>
				<div class="container px-5 py-24 mx-auto flex flex-wrap">
					<div class="flex flex-wrap w-full justify-center">
						<div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
							<div class="flex relative pb-12">
								<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									</svg>
								</div>
								<div class="flex-grow pl-4">
									<h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
										STEP 1
									</h2>
									<p class="leading-relaxed">
										VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
										Kinfolk bespoke try-hard cliche palo santo offal.
									</p>
								</div>
							</div>
							<div class="flex relative pb-12">
								<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<div class="flex-grow pl-4">
									<h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
										STEP 2
									</h2>
									<p class="leading-relaxed">
										Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
										slow-carb health goth, vape typewriter.
									</p>
								</div>
							</div>
							<div class="flex relative pb-12">
								<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="5" r="3"></circle>
										<path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
									</svg>
								</div>
								<div class="flex-grow pl-4">
									<h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
										STEP 3
									</h2>
									<p class="leading-relaxed">
										Coloring book nar whal glossier master cleanse umami. Salvia
										+1 master cleanse blog taiyaki.
									</p>
								</div>
							</div>
							<div class="flex relative pb-12">
								<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<div class="flex-grow pl-4">
									<h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
										STEP 4
									</h2>
									<p class="leading-relaxed">
										VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
										Kinfolk bespoke try-hard cliche palo santo offal.
									</p>
								</div>
							</div>
							<div class="flex relative">
								<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
								</div>
								<div class="flex-grow pl-4">
									<h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
										FINISH
									</h2>
									<p class="leading-relaxed">
										Pitchfork ugh tattooed scenester echo park gastropub
										whatever cold-pressed retro.
									</p>
								</div>
							</div>
						</div>
						<Image
							class="object-cover object-center rounded-lg md:mt-0 mt-12"
							src={mobile}
							alt="step"
						/>
					</div>
				</div>
			</section>
			<section className="bgimage2 container-fluid pb-20">
				<h1 className="text-center text-white py-5 font-bold text-[36px]">
					Why drivers choose RideShare
				</h1>
				<div className="row m-auto ">
					<div className="col-md-3">
						<Image src={R6} className="sm:ml-0 lg:ml-[25%] " />
						<h3 className="text-white text-center text-[20px] font-bold">
							Offer take a lift
						</h3>
						<p className="text-white text-center mt-3">
							RideShare exists to prove that people can always come to an
							agreement. Despite traffic or bad weather, the win-win price stays
						</p>
					</div>
					<div className="col-md-3">
						<Image src={R4} className="sm:ml-0 lg:ml-[25%]" />
						<h3 className="text-white text-center text-[20px] font-bold">
							Only accept requests that make money
						</h3>
						<p className="text-white text-center mt-3">
							Total transparency brings back the feeling of control. passengers
							are free to choose any driver: by rating, car, pick-up time, and
							price offers drivers can see the exact route before accepting
						</p>
					</div>
					<div className="col-md-3">
						<Image src={R5} className="sm:ml-0 lg:ml-[25%]" />
						<h3 className="text-white text-center text-[20px] font-bold">
							No middlemen
						</h3>
						<p className="text-white text-center mt-3">
							route details are open info real-time location sharing for
							passengers and drivers 24/7 chat support emergency button is
							always at hand Day by day, many more safety features become
							available
						</p>
					</div>
					<div className="col-md-3">
						<Image src={R7} className="sm:ml-0 lg:ml-[25%]" />
						<h3 className="text-white text-center text-[20px] font-bold">
							Easy registration
						</h3>
						<p className="text-white text-center mt-3">
							route details are open info real-time location sharing for
							passengers and drivers 24/7 chat support emergency button is
							always at hand Day by day, many more safety features become
							available
						</p>
					</div>
				</div>
			</section>
      <Footer/>
		</>
	);
}

export default Services
