import Plans from "../components/services/services";

export default function services() {
    return (
        <div className="bg-white text-black">
            <div className="flex flex-col items-center justify-center pt-16
            ">
                <div className='text-center md:p-7'>
                    <h1 className='text-greenLemon text-xl uppercase font-semibold md:pb-5'>WORKS</h1>
                    <h2 className='font-semibold text-2xl text-black md:text-5xl md:pb-5'>Our Services</h2>
                    <h3 className='text-black/50 text-xl '>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit.</h3>
                </div>
            </div>
            <div className="flex items-center justify-center pb-8 ">
                <div className="grid gap-5 xl:grid-cols-3 xl:gap-32">
                    <Plans type="Basic" price={100} check1={true} check2={true} check3={true} check4={false} check5={false} />
                    <Plans type="Plus" price={250} check1={true} check2={true} check3={true} check4={true} check5={false} />
                    <Plans type="Pro" price={400} check1={true} check2={true} check3={true} check4={true} check5={true} />
                </div>
            </div>
        </div>

    )
}