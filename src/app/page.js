export default function Home() {
  return (
    <>
      <div className='bg-[url("/backgrounds/bg.png")] bg-cover bg-center bg-no-repeat h-full '>
        <nav className="flex flex-row h-[200px] items-center inset-0 shadow-lg">
          <div className="">
          <Image src={logo} alt="Logo" className="h-32  w-auto ml-[2cm]" />
          <p className="text-gray-500 ml-[1.5cm] w-[11cm] text-[11px]">Bond Bind helps you to browse and download images and designs</p>
          </div>
          <div className="flex flex-row relative ml-auto mt-[2cm]">
            <Image src={p1} alt="Logo" className="h-auto w-20 rounded-full shadow-gray-500 shadow-lg  "/>
            <Image src={p2} alt="L2" className="h-auto  w-20 rounded-full shadow-gray-500 shadow-lg "/>
            <Image src={p3} alt="L3" className="h-auto  w-20 rounded-full shadow-gray-500 shadow-lg "/>
            <Image src={p4} alt="L4" className="h-auto  w-20 rounded-full shadow-gray-500 shadow-lg "/>
          </div>

        </nav>
        {/* Box and inputs */}
        <section>
          {/* search */}
          <div className="flex items-center ml-[1cm] mt-[1cm] hover:scale-[105%] duration-300 hover:bg-yellow-200">
          <Image src={search} alt="L4" className="h-auto absolute invert opacity-80  bg-black rounded-full w-16"/>
          <input type="text" className="h-11 rounded-3xl  shadow-md w-[400px] text-center bg-blue-100" placeholder="Search" />
          </div>
          <div className="grid grid-cols-4 gap-4 p-4">
  <a href={grid1} download>
    <Image src={grid1} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
  <a href={grid3} download>
    <Image src={grid3} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
  <a href={grid4} download>
    <Image src={grid4} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
  <a href={grid6} download>
    <Image src={grid6} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
  <a href={grid1} download>
    <Image src={grid1} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
  <a href={grid3} download>
    <Image src={grid3} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
  <a href={grid4} download>
    <Image src={grid4} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
  <a href={grid6} download>
    <Image src={grid6} className="w-auto scale-75 hover:scale-90 border-[3px] rounded-[40px] border-gray-300 duration-300 ease-in-out"></Image>
  </a>
</div>

          
        </section>
      </div>
    </>
  );
}
