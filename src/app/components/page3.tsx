import Image from "next/image";

export default function Page3() {
    return (
        <div className='bg-white p-12'>
            <div className='flex items-center flex-col justify-center'>
                <div className='flex flex-col justify-center items-center p-5 md:gap-24 xl:gap-48 xl:grid xl:grid-cols-2'>
                    <Image
                        src='/Group3.svg'
                        width={800}
                        height={500}
                        alt='group3'
                        className='pt-14 xl:order-last' />
                    <div className='flex flex-col float-left gap-12 xl:order-first'>
                        <h1 className='font-semibold text-3xl mt-12 md:text-5xl'>Lorem ipsum dolor sit amet consectetur </h1>
                        <h2 className='text-black/50 text-xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</h2>
                        <button className='btnLearnMore  '>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}