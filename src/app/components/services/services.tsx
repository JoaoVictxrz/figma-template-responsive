import { BiCheck } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

interface plansProps {
    type: string
    price: number
    check1: boolean
    check2: boolean
    check3: boolean
    check4: boolean
    check5: boolean

}
export default function Plans(props: plansProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center text-black px-12 py-16 mx-2 my-10  border-2 border-r-black/20 border-b-black/20 rounded-md">
            <div>{props.type}</div>
            <div className="text-2xl font-bold my-2">${props.price} <span className="text-black/50 text-lg font-normal">/month</span></div>
            <div className="text-black/50 my-2">Lorem ipsum, dolor sit amet<br />consectetur adipisicing elit. Suscipit<br /> nemo hic quos, ab, dolor aperiam</div>
            <div className="flex flex-col gap-3 float-start">
                <div className="flex items-center mt-5 gap-2">
                    <div>{props.check1 ? <div className="text-green-500 text-lg"><BiCheck /></div> : <div className="text-lg text-red-500"><IoMdClose /></div>}</div>
                    <div>Lorem ipsum, dolor sit </div>
                </div>
                <div className="flex items-center gap-2">
                    <div>{props.check2 ? <div className="text-green-500 text-lg"><BiCheck /></div> : <div className="text-lg text-red-500"><IoMdClose /></div>}</div>
                    <div>Lorem ipsum, dolor sit </div>
                </div>
                <div className="flex items-center gap-2">
                    <div>{props.check3 ? <div className="text-green-500 text-lg"><BiCheck /></div> : <div className="text-lg text-red-500"><IoMdClose /></div>}</div>
                    <div>Lorem ipsum, dolor sit </div>
                </div>
                <div className="flex items-center gap-2">
                    <div>{props.check4 ? <div className="text-green-500 text-lg"><BiCheck /></div> : <div className="text-lg text-red-500"><IoMdClose /></div>}</div>
                    <div>Lorem ipsum, dolor sit </div>
                </div>
                <div className="flex items-center mb-8 gap-2">
                    <div>{props.check5 ? <div className="text-green-500 text-lg"><BiCheck /></div> : <div className="text-lg text-red-500"><IoMdClose /></div>}</div>
                    <div>Lorem ipsum, dolor sit </div>
                </div>
            </div>
            <button className="btnLearnMore">Learn More</button>
        </div>
    )
}
// {props.check ? <div className="text-green-500"><BiCheck /></div> : <div className="text-red-500"><IoMdClose /></div>}
