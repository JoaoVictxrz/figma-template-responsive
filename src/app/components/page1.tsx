import Image from "next/image"

export default function InicialPage() {
    return (
        <div className='flex flex-col items-center w-full p-8 bg-greenLemon md:grid md:grid-cols-2 md:px-20 md:p-0'>
            <div className='flex items-center pt-20'>
                <Image
                    src='/Group.svg'
                    width={600}
                    height={197}
                    alt='Person'
                    className='imgMd'
                />
            </div>
            <div className='text-white p-10 mb-12 grid md:order-first md:gap-5'>
                <h2 className='font-bold uppercase text-xl my-3 md:text-2xl'>Welcome</h2>
                <h1 className='text-2xl font-semibold my-3 md:text-7xl'>Silem Mulambé Kaidros</h1>
                <span className='text-lg font-light md:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</span>
                <button className=' bg-white w-48 hover:bg-zinc-300 shadow-lg text-black text-xl px-12 py-3 my-10 rounded-md btnMd'>
                    Explore
                </button>
            </div>
        </div >
    )
}