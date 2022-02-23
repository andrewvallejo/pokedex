export const FakeController = () => {
	return (
		<aside className='flex flex-col fixed h-full w-3/4 lg:w-full scale-[0.85] py-10 rounded-tr-[10rem]  justify-around'>
			<div className='p-10 h-4/5 w-2/5 rounded-tr-[10rem] bg-clr-iiii border-4 rounded border-b-red-i b
	order-l-red-i border-t-red-iii border-r-red-iii border-red-i shadow-md absolute self-center '>
				<div className='flex flex-col rounded-3xl '>
					<header className='z-10 flex-row-reverse items-center justify-around hidden xl:flex rounded-3xl'>
						<div>
							<div className='w-16 h-16 mx-10 border-4 border-gray-100 rounded-full bg-clr-iiiiii' />
						</div>

						<h1 className='w-4/5 px-10 py-4 mx-2 text-5xl text-center border-2 bg-red-ii rounded-3xl border-clr-iiiii text-clr-iiiii'>
							Poke
							<span className='text-clr-'>dex</span>
						</h1>
						<div className='flex w-1/3 justify-evenly'>
							<div className='w-10 h-10 border-2 border-black rounded-full bg-clr-iiiiii ' />
							<div className='w-10 h-10 border-2 border-black rounded-full bg-clr-iiiii' />
							<div className='w-10 h-10 border-2 border-black rounded-full bg-red-i' />
						</div>
					</header>
					<div className='hidden w-full h-20 mt-10 overflow-hidden border-2 shadow-md xl:flex bg-clr-iiiiii rounded-xl border-clr-ii '>
						<div className='flex w-full divide-x animate-scroll divide-clr-ii '>
							<div className='w-full ' />
							<div className='w-full ' />
							<div className='w-full ' />
							<div className='w-full ' />
							<div className='w-full ' />
							<div className='w-full ' />
							<div className='w-full ' />
							<div className='w-full ' />
							<div className='w-full ' />
						</div>
					</div>
				</div>
				<article className='flex-col justify-around hidden w-full px-8 py-5 mt-12 bg-gray-100 rounded xl:flex drop-shadow-md h-3/5'>
					<div className='flex flex-col items-center w-full h-full mb-4 text-lg bg-white border-2 rounded shadow justify-evenly'>
						<h3 className='text-3xl'>How to use</h3>
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
					<div className='flex items-center justify-between w-full p-4 shadow-inner '>
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
