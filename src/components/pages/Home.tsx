"use client";

import Filter from "../ui/Filter";
import Input from "../ui/Input";
import TicketCard from "../ui/TicketCard";
import { useEffect, useState } from "react";
import { Ticket } from "@/types/Ticket";
import axios from "axios";
import Container from "../layout/Container";
import Pagination from "../ui/Pagination";

export default function Home() {

    // Estado para armazenar todos os ingressos vindos da API
    const [tickets, setTickets] = useState<Ticket[]>([]);

    // Estado para armazenar o termo de busca digitado pelo usuário
    const [search, setSearch] = useState("");

    // Estado com os ingressos filtrados com base na busca
    const [filtered, setFiltered] = useState<Ticket[]>([]);

    // Estado para controlar a página atual da paginação
    const [page, setPage] = useState(1);

    // Quantidade de itens por página
    const perPage = 6;

    // Requisição à API
    useEffect(() => {
        async function fetchTickets() {
            try {
                const res = await axios.get("https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets");
                setTickets(res.data)
                setFiltered(res.data)
            }
            catch(err) {
                console.error("Erro ao buscar tickets:", err);
            }
        }

        fetchTickets();
    }, []);

    // Filtra os ingressos sempre que o termo de busca ou a lista de ingressos mudar
    useEffect(() => {
        const term = search.toLowerCase();
        const result = tickets.filter(
        (ticket) =>
            ticket.name.toLowerCase().includes(term) ||
            ticket.location.toLowerCase().includes(term)
        );
        setFiltered(result);
        setPage(1);
    }, [search, tickets]);

    // Calcula os ingressos da página atual com base na paginação
    const start = (page - 1) * perPage;
    const currentTickets = filtered.slice(start, start + perPage);

    return (
        <div>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} />

            <Container>
                <div className="flex gap-[1.5rem]">
                    <Filter />

                    <div className="flex-1 space-y-5">
                        {currentTickets.map((ticket) => (
                            <TicketCard key={ticket.id} ticket={ticket} />
                        ))}

                        <Pagination totalItems={filtered.length} perPage={perPage} currentPage={page} onPageChange={setPage} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
