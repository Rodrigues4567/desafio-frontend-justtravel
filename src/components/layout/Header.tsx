import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import Container from "./Container";

export default function Header() {
    return (
        <div className="bg-[#fff] border-b-2 border-gray-200">
            <Container>
                <div className="flex justify-between items-center py-[1.5rem]">

                    <div>
                        <img src="/images/Logo.png" alt="" />
                    </div>

                    <div className="flex justify-center items-center gap-[15px]">
                        <p className="text-[12px] text-[#424242]">Cotação dólar hoje: R$5,53</p>
                        <img src="/images/Brazil.png" alt="" />
                        <IoIosHelpCircleOutline className="text-[#4070F4] text-[1.5rem]" />

                        <div className="h-7 border-l border-gray-300 rounded-2xl"></div>

                        <div className="flex justify-center items-center gap-[3px]">
                            <CiUser className="text-[#4070F4] text-[1.6rem]" />
                            <p className="text-[#4070F4] font-bold">Entrar</p>
                        </div>
                        <button className="flex justify-center items-center gap-[10px] bg-[#0045F3] text-[#fff] p-[10px]">
                            <FaCartShopping className="text-[1.2rem]" />
                            <p>0</p>
                        </button>
                    </div>

                </div>
            </Container>
        </div>
    )
}
