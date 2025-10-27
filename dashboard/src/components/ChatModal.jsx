import React, { useState } from "react";
import Swal from "sweetalert2";

const ChatModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // Dummy send function (replace with EmailJS or backend API)
  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSending(true);
    try {
      // Simulate sending delay
      await new Promise((res) => setTimeout(res, 1200));
      // Show SweetAlert success
      Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Your message was sent to qaisarbangash47@gmail.com.",
        confirmButtonColor: "#14b8a6",
        timer: 1800,
        showConfirmButton: false,
      });
      setMessage("");
      onClose();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Send failed",
        text: "Could not send your message.",
        confirmButtonColor: "#14b8a6",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-50 transition-transform duration-500 ease-in-out flex flex-col ${
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
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 rounded transition-colors duration-300"
          disabled={sending || !message.trim()}
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ChatModal;
