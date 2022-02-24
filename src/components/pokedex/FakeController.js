export const FakeController = () => {
	return (
		<aside className='flex flex-col fixed h-full w-3/4 lg:w-full scale-[0.85] py-10 rounded-tr-[10rem]  justify-around'>
			<div className='p-4  h-4/5 w-2/5 rounded-tr-[10rem]  bg-clr-iiii border-4 rounded border-b-red-i b
	order-l-red-i border-t-red-iii border-r-red-iii border-red-i shadow-md absolute self-center overflow'>
				<div className='flex flex-col justify-around h-1/3 rounded-3xl'>
					<header className='z-10 flex-row-reverse items-center justify-around hidden md:flex rounded-3xl'>
						<div className='flex flex-col-reverse flex-wrap md:flex-row'>
							<h1 className='px-10 py-4 text-center border-2 md:block l:ml-10 md:text-4xl bg-red-ii rounded-3xl border-clr-iiiii text-clr-iiiii'>
								Poke
								<span className='text-clr-'>dex</span>
							</h1>
							<div className='flex flex-row-reverse items-center justify-around mx-3 mb-2 l:flex-row'>
								<div className='w-10 h-10 mr-1 border-2 border-black rounded-full bg-clr-iiiiii ' />
								<div className='w-10 h-10 mr-1 border-2 border-black rounded-full bg-clr-iiiii' />
								<div className='w-10 h-10 mr-1 border-2 border-black rounded-full bg-red-i' />
								<div>
									<div className='border-4 border-gray-100 rounded-full w-14 h-14 l:h-20 l:w-20 l:mx-10 bg-clr-iiiiii' />
								</div>
							</div>
						</div>
					</header>
					<div className='hidden w-full h-20 my-4 overflow-hidden border-2 shadow-md md:flex bg-clr-iiiiii rounded-xl border-clr-ii '>
						<div className='flex w-full divide-x animate-scroll divide-clr-ii '>
							<div className='w-full' />
							<div className='w-full' />
							<div className='w-full' />
							<div className='w-full' />
							<div className='w-full' />
							<div className='w-full' />
							<div className='w-full' />
							<div className='w-full' />
							<div className='w-full' />
						</div>
					</div>
				</div>
				<article className='flex-col justify-around hidden w-full px-8 py-5 bg-gray-100 rounded md:flex drop-shadow-md h-3/5 '>
					<div className='flex flex-col mb-4 overflow-auto text-lg bg-white border-2 rounded shadow w-fullpx-2 justify-evenly'>
						<h3 className='text-3xl text-center'>How to use</h3>
						<p>
							<span className='text-2xl font-bold text-red-i'>»</span> Scroll through the Pokedex to learn
							more about the Gen 1 Pokemon
						</p>
						<p>
							<span className='text-2xl font-bold text-red-i'>»</span> Each pokemon has details on their
							weight, type, and skills
						</p>
						<p>
							<span className='text-2xl font-bold text-red-i'>»</span> Click on the{' '}
							<span className='text-2xl font-bold text-red-i'>+</span> sign to reveal more information!
						</p>
						<p>
							<span className='text-2xl font-bold text-red-i'>»</span> Create your own team by adding tags
							to each Pokemon
						</p>
						<p>
							<span className='text-2xl font-bold text-red-i'>»</span> Filter pokemon either by name, team
							tags, or both!
						</p>
					</div>
					<div className='flex items-center justify-between w-full shadow-inner '>
						<div className='w-10 h-10 border border-black rounded-full shadow-inner bg-red-i' />
						<div className='opacity-75'>
							<div className='w-24 h-2 mb-2 bg-gray-200 rounded ' />
							<div className='w-24 h-2 mb-2 bg-gray-200 rounded ' />
							<div className='w-24 h-2 mb-2 bg-gray-200 rounded ' />
							<div className='w-24 h-2 mb-2 bg-gray-200 rounded ' />
						</div>
					</div>
				</article>
			</div>
		</aside>
	)
}
