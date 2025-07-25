import { CiCalendar, CiUser } from "react-icons/ci";

export default function TicketPurchase() {
    return (
        <div>
            <div className="w-[360px] bg-white rounded-[4px] shadow-sm p-[25px] text-[#0A2156] border border-gray-200">

                {/* Data do Ingresso */}
                <div className="flex items-center justify-between mb-[15px] py-[10px]">
                    <div className="flex items-center gap-2 text-[15px] font-medium">
                        <CiCalendar className="text-[#4070F4] text-[1.4rem]" />
                        <span className="font-bold">Data do Ingresso</span>
                    </div>
                    <span className="text-[14px] text-gray-500">22/12/2022</span>
                </div>

                <hr className="border-gray-200 mb-[15px]" />

                {/* Quantidade de Ingressos */}
                <div className="flex items-center justify-between mb-[15px] py-[10px]">
                    <div className="flex items-center gap-2 text-[15px] font-medium">
                        <CiUser className="text-[#4070F4] text-[1.4rem]" />
                        <span className="font-bold">Ingressos</span>
                    </div>
                    <span className="text-[14px] text-gray-500">03 Ingressos</span>
                </div>

                <hr className="border-gray-200 mb-[15px]" />

                {/* Detalhes dos Ingressos */}
                <div className="space-y-[6px] text-[14px] text-gray-600 mb-[15px] py-[10px]">
                    <div className="flex justify-between">
                        <span>01 Ingresso infantil</span>
                        <span>R$245,99</span>
                    </div>
                    <div className="flex justify-between">
                        <span>02 Ingresso Adultos</span>
                        <span>R$245,99</span>
                    </div>
                </div>

                <hr className="border-gray-200 mb-[15px]" />

                {/* Valor total */}
                <div className="flex justify-between items-center mb-[15px]">
                    <span className="text-[15px] font-bold">Valor total</span>
                    <span className="text-[#4070F4] text-[20px] font-bold">R$ 1.391,28</span>
                </div>

                {/* Botão */}
                <button className="w-full bg-[#4070F4] hover:bg-blue-700 transition text-white text-[15px] font-medium py-[10px] rounded-[5px] cursor-pointer">
                    Comprar Ingresso
                </button>

            </div>
        </div>
    )
}