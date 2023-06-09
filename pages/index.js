import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillCar, AiFillSafetyCertificate } from "react-icons/ai";
import Navbar from '@/Components/Navbar'
import L1 from '../img/L1.png'
import {BsFillBuildingsFill} from "react-icons/bs"
import R1 from '../img/R1.png'
import R2 from "../img/R2.png";
import R3 from "../img/R3.png";
import Footer from '../Components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bgimage  sm:h-[100vh] lg:h-[70vh]">
				<Navbar />
				<section class="text-white body-font">
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
							<h1 class="text-[50px] mb-4 font-medium text-white">
								Welcome To RideShare
							</h1>
							<p class="mb-8 leading-relaxed text-[25px]">
								Everywhere and for everyone. Ride or drive, shop or deliver,
								send or receive with RideShare — offer-your-price mobility app
								for fair deals
							</p>
							<div class="flex justify-center">
								<button class=" drop-shadow-2xl inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ">
									Download App
								</button>
								<button class=" drop-shadow-2xl ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded ">
									Contact us
								</button>
							</div>
						</div>
						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<div class="object-cover object-center rounded drop-shadow-2xl"></div>
							<Image className="drop-shadow-2xl" alt="hero" src={L1} />
						</div>
					</div>
				</section>
			</div>
			<section className="bgimage2 sm:h-[100vh] lg:h-[70vh]">
				<div className="container-fluid">
					<h1 className="text-center text-white text-[50px] mb-10 py-10 ">
						Our Services
					</h1>
					<div className="row ml-[10%]">
						<div className="col-md-4 mb-3">
							<div class="card drop-shadow-2xl" style={{ width: "12rem" }}>
								<AiFillCar
									size={40}
									style={{ marginTop: "5%", marginLeft: "40%" }}
									color="00639A"
								/>
								<div class="card-body">
									<h5 class="card-title text-center font-bold">City Rides</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4  mb-3">
							<div class="card drop-shadow-2xl" style={{ width: "12rem" }}>
								<BsFillBuildingsFill
									size={40}
									style={{ marginTop: "5%", marginLeft: "40%" }}
									color="00639A"
								/>
								<div class="card-body">
									<h5 class="card-title text-center font-bold">
										Inter City Rides
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4  mb-3">
							<div class="card drop-shadow-2xl" style={{ width: "12rem" }}>
								<AiFillSafetyCertificate
									size={40}
									style={{ marginTop: "5%", marginLeft: "40%" }}
									color="00639A"
								/>
								<div class="card-body">
									<h5 class="card-title text-center font-bold">
										Safety First{" "}
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="row  mt-20 py-10 pl-[10%] bgcolor">
						<div className="col-md-3  mb-3">
							<h1 className="text-[#00639A] font-bold">Human Prosperity</h1>
						</div>
						<div className="col-md-3  mb-3">
							<h1 className="text-[#00639A] font-bold">
								Community Development
							</h1>
						</div>
						<div className="col-md-3  mb-3">
							<h1 className="text-[#00639A] font-bold">Planet Care</h1>
						</div>
						<div className="col-md-3">
							<h1 className="text-[#00639A] font-bold">Quality of life</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="bgimage3 container-fluid pb-20">
				<h2 className="py-10 ml-10 font-bold text-white text-[50px]">
					BECAUSE A FAIR PRICE IS
					<br /> SOMETHING YOU CAN AGREE ON —<br /> NOT HOPE FOR
				</h2>
				<div className="row m-auto mt-5">
					<div className="col-md-4">
						<Image src={R1} className="sm:ml-0 lg:ml-[25%] " />
						<h3 className="text-white text-center text-[20px] font-bold">
							Fair fares
						</h3>
						<p className="text-white text-center mt-3">
							RideShare exists to prove that people can always come to an
							agreement. Despite traffic or bad weather, the win-win price stays
						</p>
					</div>
					<div className="col-md-4">
						<Image src={R2} className="sm:ml-0 lg:ml-[25%]" />
						<h3 className="text-white text-center text-[20px] font-bold">
							Ride control
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
							Safety first and for everyone
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
			<section class="text-white body-font bgimage2">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
						<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							Master Cleanse Reliac Heirloom
						</h1>
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							havent heard of them man bun deep jianbing selfies heirloom prism
							food truck ugh squid celiac humblebrag.
						</p>
					</div>
					<div class="flex flex-wrap -m-4 text-center">
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-2xl">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-white w-12 h-12 mb-3 inline-block "
									viewBox="0 0 24 24"
								>
									<path d="M8 17l4 4 4-4m-4-5v9"></path>
									<path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
								<p class="leading-relaxed">Downloads</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-2xl">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-white w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-white">1.3K</h2>
								<p class="leading-relaxed">Users</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-2xl">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-white w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M3 18v-6a9 9 0 0118 0v6"></path>
									<path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-white">74</h2>
								<p class="leading-relaxed">Files</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-2xl">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-white w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-white">46</h2>
								<p class="leading-relaxed">Places</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer/>
		</>
	);
}
