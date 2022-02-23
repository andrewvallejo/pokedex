export const FakeController = () => {
	return (
		<aside className='flex flex-col fixed h-full w-3/4 lg:w-full scale-[0.85] py-10 rounded-tr-[10rem]  justify-around   '>
			<header className='z-10 flex items-center justify-center w-full h-full rounded-3xl'>
				<h1 className='px-10 py-4 text-5xl border-2 bg-red-ii rounded-3xl border-clr-iiiii text-clr-iiiii'>
					Poke
					<span className='text-clr-'>dex</span>
				</h1>
			</header>

			<div className='p-10  h-4/5 w-2/5 rounded-tr-[10rem] bg-clr-iiii border-4 rounded border-b-red-i border-l-red-i border-t-red-iii border-r-red-iii border-red-i absolute self-center '>
				<div className='flex flex-col items-center justify-between w-full h-full py-2 rounded-3xl'>
					<div className='flex w-full h-20 mt-20 border-2 bg-clr-iiiiii rounded-xl border-clr-ii '>
						<div className='flex w-full overflow-hidden divide-x  divide-clr-ii'>
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
							<div className='w-10 ' />
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}
