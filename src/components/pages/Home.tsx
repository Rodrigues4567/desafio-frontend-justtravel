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

    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState<Ticket[]>([]);
    const [page, setPage] = useState(1);
    const perPage = 6;

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
