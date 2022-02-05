export const Loader = () => {
	return (
		<li className='flex flex-col  px-4 h-3/5 md:h-1/2 w-full overscroll-auto snap-bottom overflow-hidden  -mb-2'>
			<div className='animate-pulse  flex w-full justify-center flex-wrap relative'>
				<div className='rounded-full mt-4 bg-gray-100 w-40 h-40 md:w-32 md:h-32 border' />
				<div>
					<div className='px-5 flex-col  w-full  mt-6'>
						<div className='h-8 w-full   bg-gray-100 rounded ' />
						<div className='py-4 ml-4  pr-5 grid grid-cols-1 gap-2   '>
							<div className=' h-2 w-full mt-2 bg-gray-100 rounded ' />
							<div className='h-2 w-full bg-gray-100 rounded' />
							<div className='h-2 w-full bg-gray-100 rounded' />
							<div className='h-2 w-full bg-gray-100 rounded' />
							<div className='py-4'>
								<input
									className='h-2 bg-gray-100  p-1 text-md border-b-2 border-b-gray-100'
									type='text'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex  flex-1 flex-row-reverse '>
					<button className='absolute -top-5 md:top-4 text-[10rem] md:text-8xl text-gray-200 hover:text-black'>
						+
					</button>
				</div>
			</div>
		</li>
	)
}
