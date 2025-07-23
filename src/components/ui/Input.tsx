import { SlLocationPin } from "react-icons/sl";
import Container from "../layout/Container";

export default function Input() {
    return (
        <div className="flex justify-center items-center py-[2.1rem] bg-[#fff]">
            
            <Container>
                <div className="flex items-center border border-gray-300 rounded px-4 py-2 w-full bg-white">
                    <SlLocationPin className="text-[#4070F4] text-[1.3rem] mr-3" />
                    <input
                        className="w-full outline-none text-[1rem] placeholder:text-gray-400"
                        type="text"
                        placeholder="Busque por atração"
                    />
                </div>
            </Container>

        </div>
    )
}
