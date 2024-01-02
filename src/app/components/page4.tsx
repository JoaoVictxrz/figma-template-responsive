import Image from 'next/image';

export default function Page4() {
    return (
        <div className='bg-white flex flex-col items-center justify-center'>
            <div className='flex flex-col'>
                <div className='text-center md:p-7'>
                    <h1 className='text-greenLemon text-xl uppercase font-semibold md:pb-5'>Team</h1>
                    <h2 className='font-semibold text-2xl md:text-5xl md:pb-5'>Our Talents</h2>
                    <h3 className='text-black/50 text-xl '>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit.</h3>
                </div>
                <div className='flex flex-col items-center md:grid md:grid-cols-4 my-12'>
                    <div className='flex flex-col w-56 h-64 border-2 border-black/50 rounded-md px-10 py-6 m-4'>
                        <Image src="/team-imgs/team1.svg"
                            width={500}
                            height={500}
                            alt="team-icon"
                            className='pb-2' />
                        <span className='font-semibold text-xl'>Peg Legge</span>
                        <h3 className='text-black/50 pt-2'>CEO</h3>
                    </div>
                    <div className='flex flex-col w-56 h-64 border-2 border-black/50 rounded-md px-10 py-6 m-4'>
                        <Image src="/team-imgs/team2.svg"
                            width={500}
                            height={500}
                            alt="team-icon"
                            className='pb-2' />
                        <span className='font-semibold text-xl'>Richard Guerra</span>
                        <h3 className='text-black/50 pt-2'>CTO</h3>
                    </div>
                    <div className='flex flex-col w-56 h-64 border-2 border-black/50 rounded-md px-10 py-6 m-4'>
                        <Image src="/team-imgs/team3.svg"
                            width={500}
                            height={500}
                            alt="team-icon"
                            className='pb-2' />
                        <span className='font-semibold text-xl'>Alexandra</span>
                        <h3 className='text-black/50 pt-2'>DESIGNER</h3>
                    </div>
                    <div className='flex flex-col w-56 h-64 border-2 border-black/50 rounded-md px-10 py-6 m-4'>
                        <Image src="/team-imgs/team4.svg"
                            width={500}
                            height={500}
                            alt="team-icon"
                            className='pb-2' />
                        <span className='font-semibold text-xl'>Janet Bray</span>
                        <h3 className='text-black/50 pt-2'>DEVELOPER</h3>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='btnLearnMore mb-12'>View team</button>
                </div>
            </div>
        </div>
    )
}