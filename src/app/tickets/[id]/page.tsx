import { Ticket } from "@/types/Ticket"
import axios from "axios"
import { notFound } from "next/navigation"
import { SlLocationPin } from "react-icons/sl";
import { FiCornerUpLeft, FiCoffee } from "react-icons/fi";
import { MdOutlineAirplaneTicket, MdOutlineHouse } from "react-icons/md";
import { CiWifiOn } from "react-icons/ci";
import Container from "@/components/layout/Container";
import Link from "next/link";
import TicketPurchase from "@/components/ui/TicketPurchase";

interface Props {
    params: { id: string };
}

export default async function TicketDetails({ params }: Props) {

    const { id } = params;

    try {
        const res = await axios.get(`https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets/${id}`);
        const ticket: Ticket = res.data;

        return (
            <div>
                <Container>
                    <div className="flex flex-col lg:flex-row gap-[1rem] mt-[2.1rem] pb-[2rem]">
                        <div>
                            <div className="flex flex-col gap-[14px] mb-[2rem]">
                                <Link href="/" className="text-[1.4rem] cursor-pointer w-[40px]">
                                    <FiCornerUpLeft />
                                </Link>

                                <div className="flex flex-col">
                                    <h1 className="text-[#0A2156] text-[1.5rem] font-bold mb-[2px]">{ticket.name}</h1>

                                    <div className="flex items-center gap-[8px]">
                                        <SlLocationPin className="text-[1.1rem] text-[#4070F4]" />
                                        {ticket.location}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-[2.5rem]">
                                <img className="w-full h-[540px] object-cover rounded-[4px]" src={ticket.image} alt={ticket.name} />
                            </div>

                            <div className="flex justify-center flex-row-reverse gap-[2.5rem]">
                                <div>
                                    <TicketPurchase />
                                </div>

                                <div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-[10px] mb-[1.6rem]">
                                            <span className="bg-[#4070F4] text-[#fff] p-[10px] font-bold rounded-[4px]">{ticket.rating.value}</span>
                                            <span>Exellent</span>
                                            <span className="text-gray-500">({ticket.rating.reviewsCount} Reviews)</span>
                                        </div>

                                        <div className="flex items-center gap-[20px] text-gray-500">
                                            <div className="flex items-center gap-[7px]">
                                                <MdOutlineAirplaneTicket className="text-[1.3rem]" />
                                                <span className="text-[15px]">Passagem Aérea</span>
                                            </div>

                                            <div className="flex items-center gap-[7px]">
                                                <CiWifiOn className="text-[1.3rem]" />
                                                <span className="text-[15px]">Wi-fi</span>
                                            </div>

                                            <div className="flex items-center gap-[7px]">
                                                <FiCoffee className="text-[1.3rem]" />
                                                <span className="text-[15px]">Café da manhã</span>
                                            </div>

                                            <div className="flex items-center gap-[7px]">
                                                <MdOutlineHouse className="text-[1.3rem]" />
                                                <span className="text-[15px]">Quarto</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-[2.4rem] pb-[2rem]">
                                        <h2 className="text-[#0A2156] text-[1.3rem] font-bold pb-[15px]">Sobre o ingresso selecionado:</h2>

                                        <p className="pb-[15px] text-gray-500">{ticket.description}</p>
                                        <p className="pb-[15px] text-gray-500">Maecenas suspendisse ipsum purus bibendum maecenas faucibus risus, semper. Aliquet potenti neque semper dui aliquet. Imperdiet lectus id sed pharetra nunc, proin. Ultrices varius rhoncus facilisi condimentum habitant rhoncus ac.</p>
                                        <p className="text-gray-500">Vivamus varius gravida urna viverra in. Aliquet amet dictum malesuada sapien morbi est interdum. Tincidunt nunc convallis nullam lorem eu elementum interdum. Ut ultrices suscipit dolor lorem consequat ac nibh justo. Viverra quam nunc risus urna. Pharetra vestibulum diam praesent consequat consequat fermentum nunc.</p>
                                    </div>

                                    <div>
                                        <h2 className="text-[#0A2156] text-[1.3rem] font-bold pb-[15px]">Localização</h2>

                                        <div className="w-full h-[400px] rounded-[4px] overflow-hidden">
                                            <iframe
                                                title="Mapa do Google"
                                                width="100%"
                                                height="100%"
                                                loading="lazy"
                                                allowFullScreen
                                                src={`https://www.google.com/maps?q=${encodeURIComponent(ticket.location)}&output=embed`}
                                                className="w-full h-full border-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        )
    }
    catch(err) {
        return notFound();
    }
}
