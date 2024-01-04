export default function contact() {
    return (
        <div className="bg-white text-black pt-10 md:p-20 lg:pt-0">
            <div className="flex flex-col items-center justify-center text-center gap-5 h-screen">
                <div className="">
                    <h1 className="text-xl font-bold pb-4 xl:text-4xl"> Contact Us</h1>
                    <span className="xl:text-xl">Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit.</span>
                </div>
                <div className="grid lg:grid-cols-2 xl:gap-8">
                    <div className="px-10 lg:p-0 order-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5998.657295606789!2d-95.95842930605339!3d41.25817965484794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938e4e2c6896b5%3A0x15fa722bfb1338fc!2sPark%20East%20Inc.%2C%20Omaha%2C%20NE%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1704309265971!5m2!1spt-BR!2sbr" width="200" height="200" loading="lazy" className=" rounded-md md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] lg:p-10 xl:w-[600px]  "></iframe>
                    </div>
                    <form action="" className="flex flex-col text-left gap-2 p-10">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="" className="border-2 border-black/50 rounded-md pl-1" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="" className="border-2 border-black/50 rounded-md pl-1" />
                        <label htmlFor="message">Message:</label>
                        <textarea cols={30} rows={6} className="border-2 border-black/50 rounded-md pl-1"></textarea>
                        <input type="submit" value="Submit" className="bg-black rounded-md text-white h-8" />
                    </form>
                </div>
            </div>
        </div>
    )
}