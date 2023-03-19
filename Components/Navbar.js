import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-dark "
				style={{ backgroundColor: "rgba(0,99,154,0.6)" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand">
						{/* <Image src={Logo} alt="" width={40} height={40} /> */}
						<a style={{ marginLeft: "2rem" }}>
							<Link href="/">RideShare</Link>
						</a>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className=" navbar-collapse navbar-design justify-content-center"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav  ">
							<li className="nav-item">
								<a className="nav-link active">
									<Link aria-current="page" href="/">
										Home
									</Link>
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link active">
									<Link href="/Services">Services</Link>
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link active">
									<Link href="/About">About</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active">
									<Link href="/Contact">Contact</Link>
								</a>
							</li>
						</ul>
					</div>
					<form class=" hide d-flex" role="search">
						<button class=" drop-shadow-2xl ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded ">
							Download App
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
}

export default Navbar
