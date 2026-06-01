import { QRCode } from "react-qr-code";
import { useState, useEffect, useContext } from "react";
import {TicketContext} from "../contexts/TicketContext";

import {getMovieDetails }from "../services/api";

function MyTickets() {

    const movieIds = useContext(TicketContext) || [];
    const [movies, setMovies] = useState({});
    const [isBookedTickets, setIsBookedTickets] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const promises = movieIds.map(id => getMovieDetails(id));
                const results = await Promise.all(promises);

                const moviesMap = {};
                movieIds.forEach((id, index) => {
                    moviesMap[id] = results[index];
                });
                
                setMovies(moviesMap);
            }
            catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };

        if (movieIds.length > 0) {
            fetchMovies();
        }
    }, [movieIds]);

    useEffect(() => {
        movieIds.forEach(id => {
            const qrData = JSON.parse(localStorage.getItem(`QrValue/${id}`));
            if (!qrData) return;
            setIsBookedTickets(true);
        });
    }, [movies, movieIds]);

    return (
        <div className="p-4 flex flex-col">
            <h1 className="text-4xl font-bold mb-6 mt-10 pl-4 self-center">My Tickets:</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movieIds.map(id => {
                        const qrData = JSON.parse(localStorage.getItem(`QrValue/${id}`));
                        // console.log(qrData);
                        if (!qrData) return null;

                        const qrValue = Array.isArray(qrData) ? qrData[0]?.value : qrData.value;
                        let ticketId = "N/A";
                        
                        if (qrData?.id) {
                            ticketId = qrData.id; 
                        } else if (Array.isArray(qrData) && typeof qrData[0]?.value === "string") {
                            ticketId = qrData[0].value.split("Id: ")[1]?.replace("}", "").trim() || "N/A";
                        } else if (typeof qrData.value === "string") {
                            ticketId = qrData.value.split("Id: ")[1]?.replace("}", "").trim() || "N/A";
                        }

                        return (
                            <div key={id} className="w-full p-4 border rounded-lg flex flex-col items-center shadow-md bg-white">
                                <h1 className="text-3xl text-black font-bold mb-4 text-center">
                                    Movie: { movies[id]?.original_title || 'Unknown Movie' }
                                </h1>
                                <QRCode value={qrValue} size={256} />
                                <div className="text-lg text-black font-bold mt-4">
                                    Ticket ID: {ticketId}
                                </div>
                            </div>
                        );
                    })} 
                </div>
                {!isBookedTickets && (
                    <p className="text-center text-gray-500 mt-10 text-2xl">You haven't booked any tickets yet.</p>
                )}
        </div>
    );
}

export default MyTickets;