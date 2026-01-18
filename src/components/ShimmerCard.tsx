const ShimmerCard = function () {
  return (
    <div className='w-84 h-155 inline-block bg-green-300 border rounded-lg overflow-hidden relative'>
      <div className='h-1/2 bg-slate-400'></div>
      <div className='w-full pl-4 border-t pt-6 flex flex-col gap-4'>
        <h2 className='w-5/6 h-10 bg-slate-600 rounded-lg'></h2>
        <p className='w-3/4 h-8 rounded-lg bg-slate-600'></p>
        <p className='w-3/4 h-8 rounded-lg bg-slate-600'></p>
        <p className='w-3/4 h-8 rounded-lg bg-slate-600'></p>
      </div>
    </div>
  )
}

export default ShimmerCard
