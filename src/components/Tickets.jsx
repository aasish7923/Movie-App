import { useState, useEffect, createContext } from "react";
import { Navigate } from "react-router-dom";
import { QRCode } from "react-qr-code";
import MyTickets from "./MyTickets";

function TicketSection({ movie }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const TOTAL_SEATS = 50;

  // Load bookings from localStorage
  useEffect(() => {
    const storageKey = `tickets_${movie.id}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) setBookedSeats(JSON.parse(stored));
    setSelectedSeats([]);
  }, [movie.id]);

  // Toggle seat selection
  const toggleSeat = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;
    setSelectedSeats(
      (
        s, // s -> current selected seats
      ) =>
        s.includes(seatNumber)
          ? s.filter((s) => s !== seatNumber)
          : [...s, seatNumber],
    );
  };

  // Book selected seats
  const bookTickets = () => {
    if (selectedSeats.length === 0) {
      alert("Please select seats");
      return;
    }
    const updated = [...bookedSeats, ...selectedSeats];
    localStorage.setItem(`tickets_${movie.id}`, JSON.stringify(updated));
    setBookedSeats(updated);
    setSelectedSeats([]);
    alert(
      `✓ Booked ${selectedSeats.length} ticket(s) for Rs. ${selectedSeats.length * 300}`,
    );
  };

  const [qrValue, setQrValue] = useState("");
  const [ticketId, setTicketId] = useState("");

  console.log(typeof ticketId);

  useEffect(() => {
    const ticketId = Math.random().toString(36).substr(2, 9);
    setTicketId(ticketId);
    const value = `Movie: ${movie.title}, Seats: ${bookedSeats.join(", ")}, Total: Rs. ${bookedSeats.length * 300}, Id: ${ticketId}`;

    localStorage.setItem(
      `QrValue/${movie.id}`,
      JSON.stringify({
        value,
        movie: movie.title,
        seats: bookedSeats,
        total: bookedSeats.length * 300,
        id: ticketId,
      }),
    );
  }, [bookedSeats, movie.title]);

  return (
    <div className="bg-[#222] p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Book Tickets - Rs. 300 each</h3>

      {/* Seat Grid */}
      <div className="bg-[#111] p-6 rounded-lg mb-6 ">
        <p className="text-center text-[#666] mb-6 text-sm font-bold">SCREEN</p>
        <div className="grid grid-cols-10 gap-2 justify-items-center">
          {Array.from({ length: TOTAL_SEATS }, (_, i) => i + 1).map(
            (seatNumber) => (
              <button
                key={seatNumber}
                onClick={() => toggleSeat(seatNumber)}
                disabled={bookedSeats.includes(seatNumber)}
                className={`w-10 h-10 rounded text-sm font-bold transition ${
                  bookedSeats.includes(seatNumber)
                    ? "bg-[#a0a0a0] cursor-not-allowed opacity-50"
                    : selectedSeats.includes(seatNumber)
                      ? "bg-[#e50914] text-white scale-110"
                      : "bg-[#333] text-white hover:bg-[#555]"
                }`}
              >
                {seatNumber}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm justify-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#333] rounded"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#e50914] rounded"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#a0a0a0] rounded opacity-50"></div>
          <span>Booked</span>
        </div>
      </div>

      {/* Summary */}
      {selectedSeats.length > 0 && (
        <div className="mb-6 p-4 bg-[#333] rounded">
          <p className="text-white">
            Seats: <strong>{selectedSeats.join(", ")}</strong>
          </p>

          <p className="text-white">
            Total: <strong>Rs. {selectedSeats.length * 300}</strong>
          </p>
        </div>
      )}

      {/* Book Button */}
      <button
        onClick={bookTickets}
        className={`w-full py-3 rounded font-bold text-white transition mb-6 ${
          selectedSeats.length > 0
            ? "bg-[#e50914] hover:bg-[#f40612]"
            : "bg-[#2a2323] opacity-50 cursor-not-allowed"
        }`}
      >
        {/* Book {selectedSeats.length > 0 ? `(${selectedSeats.length})` : ''} Tickets */}
        Book Ticket
      </button>

      {/* My Bookings */}
      {bookedSeats.length > 0 && (
        <div className="pt-6 border-t border-[#444] flex justify-center ">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-white font-bold mb-3">
              My Bookings ({bookedSeats.length}):
            </p>
            <div className="flex gap-2 flex-row ">
              {bookedSeats.map((seatNumber) => (
                <div
                  key={seatNumber}
                  className="flex items-center gap-2 bg-[#e50914] text-white px-3 py-2 rounded"
                >
                  <button
                    key={seatNumber}
                    className="p-1 bg-[#e50914] text-white rounded hover:bg-red-600 transition text-sm"
                  >
                    {seatNumber}
                  </button>
                </div>
              ))}
            </div>

            <p className="text-gray-400 font-semibold mt-3 mb-10">
              Ticket Booked! Check your QR code from
              <a
                href="/tickets"
                className="text-[#e50914] ml-1 hover:underline"
              >
                My Tickets
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketSection;
