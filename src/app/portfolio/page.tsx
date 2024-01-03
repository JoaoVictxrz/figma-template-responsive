import Image from "next/image"

export default function Portfolio() {
    return (
        <div className="bg-white w-full text-black">
            <div className="flex flex-col items-center justify-center pt-20
            ">
                <div className='text-center md:p-7'>
                    <h1 className='text-greenLemon text-xl uppercase font-semibold md:pb-5'>WORKS</h1>
                    <h2 className='font-semibold text-2xl md:text-5xl md:pb-5'>Portfolio</h2>
                    <h3 className='text-black/50 text-xl '>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit.</h3>
                </div>
                <div className="grid grid-cols-1 px-5 gap-9 my-12 lg:grid-cols-[390px_400px] xl:grid-cols-[490px_500px]">
                    <Image
                        src='/portfolio/portfolio1.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                    <Image
                        src='/portfolio/portfolio2.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                    <Image
                        src='/portfolio/portfolio3.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                    <Image
                        src='/portfolio/portfolio4.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                    <Image
                        src='/portfolio/portfolio5.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                    <Image
                        src='/portfolio/portfolio6.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                    <Image
                        src='/portfolio/portfolio7.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                    <Image
                        src='/portfolio/portfolio8.svg'
                        width={570}
                        height={335}
                        alt="portfolios"
                        className='rounded-md' />
                </div>
                <div className="mb-12">
                    <button className="btnLearnMore">Learn More</button>
                </div>
            </div>

        </div>
    )
}