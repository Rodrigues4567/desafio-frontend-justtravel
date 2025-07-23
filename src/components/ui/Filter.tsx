import { FaStar } from "react-icons/fa";

export default function Filter() {
    return (
        <div>
            <div className="flex justify-center flex-col w-[380px] p-[1.5rem] bg-amber-300">

                <div className="flex justify-between items-center border-b border-gray-300 pb-[5px]">
                    <h3 className="text-[#0A2156] text-[1.4rem] font-bold">Filtro</h3>
                    <button className="text-[#4070F4] text-[13px]">Limpar todos os filtros</button>
                </div>

                <div>
                    <h4>Preço</h4>
                    <div>
                        <button>R$ 10,00 - R$ 390,00</button>
                        <button>R$ 10,00 - R$ 390,00</button>
                        <button>R$ 10,00 - R$ 390,00</button>
                        <button>R$ 10,00 - R$ 390,00</button>
                    </div>
                </div>

                <div>
                    <h4>Tipo de propriedade</h4>
                    <div>
                        <button>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span>(134)</span>
                        </button>
                        <button>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span>(134)</span>
                        </button>
                        <button>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span>(72)</span>
                        </button>
                        <button>
                            <FaStar />
                            <FaStar />
                            <span>(75)</span>
                        </button>
                        <button>
                            <FaStar />
                            <span>(07)</span>
                        </button>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
