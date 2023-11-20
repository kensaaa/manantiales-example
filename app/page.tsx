export default function Home() {
	return (
		<main className="container md:my-5">
			<div className="h-44 md:h-auto">
				<img src="https://res.cloudinary.com/dt5vyjvid/image/upload/f_auto,q_auto/v1/front-temporal/to323flc51kiualzktbd" className="object-cover h-full rounded" />
			</div>

			<div className="py-10 flex flex-col">
				<h3 className="text-xl ml-8 mb-3 md:ml-0">Eventos Iglesia</h3>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="card w-full  bg-base-200 shadow rounded-none md:rounded-lg">
						<figure><img src="https://copartners.cl/icm-mobile/assets/events/culto-familia.jpeg" alt="Shoes" /></figure>
						<div className="card-body">
							<h2 className="card-title">Culto de familia</h2>
							<p>todos los sabados a las 11:00</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">ver mas</button>
							</div>
						</div>
					</div>


					<div className="card w-full  bg-base-200 shadow rounded-none md:rounded-lg">
						<figure><img src="https://copartners.cl/icm-mobile/assets/events/culto-familia.jpeg" alt="Shoes" /></figure>
						<div className="card-body">
							<h2 className="card-title">Culto de familia</h2>
							<p>todos los sabados a las 11:00</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">ver mas</button>
							</div>
						</div>
					</div>
					<div className="card w-full  bg-base-200 shadow rounded-none md:rounded-lg">
						<figure><img src="https://copartners.cl/icm-mobile/assets/events/culto-familia.jpeg" alt="Shoes" /></figure>
						<div className="card-body">
							<h2 className="card-title">Culto de familia</h2>
							<p>todos los sabados a las 11:00</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">ver mas</button>
							</div>
						</div>
					</div>

				</div>
			</div>


		</main>
	)
}
