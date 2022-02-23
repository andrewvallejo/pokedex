export const Loader = () => {
	return (
		<li className='flex flex-col px-4 h-3/5 md:h-1/2 w-full overscroll-auto snap-bottom  mb-[-2.1rem]'>
			<div className='relative flex flex-wrap justify-center w-full animate-pulse'>
				<div className='w-40 h-40 mt-4 bg-gray-100 border rounded-full md:w-32 md:h-32' />
				<div>
					<div className='flex-col w-full px-5 mt-6'>
						<div className='w-full h-8 bg-gray-100 rounded ' />
						<div className='grid grid-cols-1 gap-2 py-4 pr-5 ml-4 '>
							<div className='w-full h-2 mt-2 bg-gray-100 rounded ' />
							<div className='w-full h-2 bg-gray-100 rounded' />
							<div className='w-full h-2 bg-gray-100 rounded' />
							<div className='w-full h-2 bg-gray-100 rounded' />
							<div className='py-4'>
								<input
									className='h-2 p-1 bg-gray-100 border-b-2 text-md border-b-gray-100'
									type='text'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row-reverse flex-1 '>
					<button className='absolute -top-5 md:top-4 text-[10rem] md:text-8xl text-gray-200 sm:hover:text-black'>
						+
					</button>
				</div>
			</div>
		</li>
	)
}
