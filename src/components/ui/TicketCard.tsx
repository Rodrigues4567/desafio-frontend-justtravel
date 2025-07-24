import { Ticket } from "@/types/Ticket";
import { SlLocationPin } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  ticket: Ticket;
}

export default function TicketCard({ ticket }: Props) {
    return (
        <div className="flex bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition">

            <div className="w-[200px] h-[180px] sm:w-[250px] sm:h-[200px] relative">
                <img className="w-full h-full object-cover" src={ticket.image} alt={ticket.name}/>
                <span className="absolute top-2 left-2 bg-white text-xs font-medium px-2 py-[2px] rounded">Ingresso</span>
            </div>

            <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                    <h3 className="text-[#0A2156] text-[1.2rem] font-bold mb-1">{ticket.name}</h3>

                    <div className="flex items-center text-sm text-[#474747] mb-[2rem]">
                        <SlLocationPin className="text-[#4070F4] text-[1rem] mr-[5px]" />
                        {ticket.location}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#3a3a3a]">
                        <span className="bg-[#4070F4] text-white text-sm p-[8px] rounded font-semibold">{ticket.rating.value}</span>
                        <span className="font-semibold">Excellent</span>
                        <span className="text-gray-400">({ticket.rating.reviewsCount} Reviews)</span>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex flex-col items-end justify-center p-4 border-l border-gray-200">
                <div className="text-sm text-gray-500">
                    de R$ {ticket.price.full.toFixed(2)} por
                </div>

                <div className="text-[#4070F4] text-[21px] font-bold">
                    R$ {ticket.price.discount.toFixed(2)}
                </div>

                <button className="flex items-center gap-[9px] mt-4 bg-[#4070F4] text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition text-sm">
                    Saber mais <FaArrowRight />
                </button>
            </div>

        </div>
    );
}
