import CheckboxItem from "./CheckboxItem";
import StarButton from "./StarButton";
import { PiHouseLine } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import PriceButton from "./PriceButton";
import ReviewBar from "./ReviewBar";

export default function Filter() {
    return (
        <div>
            <div className="flex justify-center flex-col w-[370px] p-[1.5rem] bg-[#fff] rounded-[4px] shadow-sm">

                <div className="flex justify-between items-center border-b border-gray-300 pb-[5px]">
                    <h3 className="text-[#0A2156] text-[1.4rem] font-bold">Filtro</h3>
                    <button className="text-[#4070F4] text-[13px] cursor-pointer">Limpar todos os filtros</button>
                </div>

                <div className="pt-[1.1rem] border-b border-gray-300 pb-[1.4rem]">
                    <h4 className="text-[#0A2156] text-[15px] font-bold pb-[9px]">Preço</h4>

                    <div className="grid grid-cols-2 gap-[9px]">
                        <PriceButton label="R$ 10,00 - R$ 390,00" />
                        <PriceButton label="R$ 10,00 - R$ 390,00" />
                        <PriceButton label="R$ 10,00 - R$ 390,00" />
                        <PriceButton label="R$ 10,00 - R$ 390,00" />
                    </div>
                </div>

                <div className="pt-[1.1rem] border-b border-gray-300 pb-[1.4rem]">
                    <h4 className="text-[#0A2156] text-[15px] font-bold pb-[9px]">Tipo de propriedade</h4>

                    <div className="grid grid-cols-2 gap-[9px]">
                        <StarButton stars={5} countText="(134)" />
                        <StarButton stars={4} countText="(134)" />
                        <StarButton stars={3} countText="(72)" />
                        <StarButton stars={2} countText="(75)" />
                        <StarButton stars={1} countText="(07)" />
                    </div>
                </div>

                <div className="pt-[1.1rem] border-b border-gray-300 pb-[1.4rem]">
                    <h4 className="text-[#0A2156] text-[15px] font-bold pb-[9px]">Comodidades</h4>

                    <div className="flex flex-col gap-[11px]">
                        <CheckboxItem id="wi-fi" label="Wi-Fi" />
                        <CheckboxItem id="cozinha" label="Cozinha" />
                        <CheckboxItem id="maquina" label="Máquina de lavar" />
                        <CheckboxItem id="ar" label="Ar-condicionado" />
                        <CheckboxItem id="secadora" label="Secadora" />
                    </div>
                </div>

                <div className="pt-[1.1rem] border-b border-gray-300 pb-[1.4rem]">
                    <h4 className="text-[#0A2156] text-[15px] font-bold pb-[9px]">Tipo de propriedade</h4>

                    <div className="flex flex-col gap-[8px]">
                        <button className="flex items-center gap-[10px] border-[1px] text-[#cacaca] p-[5px] rounded-[3px] cursor-pointer transition-colors hover:text-[#4070F4]">
                            <PiHouseLine />
                            <span className="text-[14px]">Casa (346)</span>
                        </button>

                        <button className="flex items-center gap-[10px] border-[1px] text-[#cacaca] p-[5px] rounded-[3px] cursor-pointer transition-colors hover:text-[#4070F4]">
                            <FaRegBuilding />
                            <span className="text-[14px]">Apartamento (234)</span>
                        </button>

                        <button className="flex items-center gap-[10px] border-[1px] text-[#cacaca] p-[5px] rounded-[3px] cursor-pointer transition-colors hover:text-[#4070F4]">
                            <RiHotelLine />
                            <span className="text-[14px]">Hotel (23)</span>
                        </button>
                    </div>
                </div>

                <div className="pt-[1.1rem]">
                    <h4 className="text-[#0A2156] text-[15px] font-bold pb-[9px]">Review Score</h4>

                    <div className="flex flex-col gap-[8px]">
                        <ReviewBar label="Excelente" count={543} percentage={90} />
                        <ReviewBar label="Muito bom" count={543} percentage={75} />
                        <ReviewBar label="Bom" count={543} percentage={55} />
                        <ReviewBar label="Ruim" count={543} percentage={35} />
                        <ReviewBar label="Péssimo" count={14} percentage={15} />
                    </div>
                </div>

            </div>
        </div>
    )
}
