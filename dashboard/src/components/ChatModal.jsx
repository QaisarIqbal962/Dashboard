import React, { useState } from "react";
import Swal from "sweetalert2";

const ChatModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const userEmail = userData.email || "your email";

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSending(true);
    try {
      await new Promise((res) => setTimeout(res, 1200));

      // show a professional toast-style confirmation and replace textarea with inline confirmation
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "success",
        title: "Message sent",
        html: `We received your message and will reply to <strong>${userEmail}</strong> shortly.`,
        showConfirmButton: false,
        timer: 1800,
        background: "#ffffff",
        color: "#0f172a",
        customClass: {
          popup: "shadow-lg border",
        },
      });

      setMessage("");
      setSent(true);
      // close modal shortly after showing confirmation
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 1800);
    } catch (err) {
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "error",
        title: "Send failed",
        html: "Could not send your message. Please try again.",
        showConfirmButton: false,
        timer: 2200,
        background: "#ffffff",
        color: "#0f172a",
        customClass: {
          popup: "shadow-lg border",
        },
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 rounded-3xl w-full md:w-[400px] bg-white shadow-2xl z-50 transition-transform duration-500 ease-in-out flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ maxWidth: "100vw" }}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-teal-600">Chat with Admin</h2>
        <button
          className="text-gray-500 hover:text-teal-600 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
      <form className="flex flex-col flex-1 p-4 gap-4" onSubmit={handleSend}>
        {!sent ? (
          <>
            <textarea
              className="border border-teal-300 rounded p-2 resize-none focus:ring-2 focus:ring-teal-500"
              rows={5}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={sending}
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer font-bold py-2 rounded transition-colors duration-300"
              disabled={sending || !message.trim()}
            >
              {sending ? "Sending..." : "send"}
            </button>
          </>
        ) : (
          <div className="p-3 bg-teal-50 border border-teal-200 rounded text-teal-700 text-center">
            Message sent
          </div>
        )}
      </form>
    </div>
  );
};

export default ChatModal;
