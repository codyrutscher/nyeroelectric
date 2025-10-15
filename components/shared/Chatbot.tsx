"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaComments,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaRobot,
} from "react-icons/fa";
import { siteConfig } from "@/config/site.config";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setMessages([
        {
          id: "1",
          text: `Hi! I'm the ${siteConfig.name} assistant. How can I help you today?`,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }, 500);
  };

  const getBotResponse = (input: string): string => {
    if (
      input.includes("service") ||
      input.includes("what do you do") ||
      input.includes("help")
    ) {
      return `We offer a wide range of electrical services including:\n\n${siteConfig.services
        .slice(0, 3)
        .map((s) => `• ${s.name}`)
        .join("\n")}\n\nWould you like to know more about any specific service?`;
    } else if (
      input.includes("emergency") ||
      input.includes("urgent") ||
      input.includes("24/7")
    ) {
      return `Yes! We offer 24/7 emergency services. You can call us right now at ${siteConfig.contact.phone} for immediate assistance.`;
    } else if (
      input.includes("hours") ||
      input.includes("open") ||
      input.includes("available")
    ) {
      return `Our regular business hours are ${siteConfig.contact.hours}. However, we're available 24/7 for emergencies!`;
    } else if (
      input.includes("price") ||
      input.includes("cost") ||
      input.includes("quote")
    ) {
      return "I'd be happy to help you get a quote! For accurate pricing, I recommend scheduling a consultation. Would you like me to direct you to our booking page?";
    } else if (
      input.includes("location") ||
      input.includes("where") ||
      input.includes("address")
    ) {
      return `We're located at ${siteConfig.contact.address}. We serve the entire area and surrounding regions!`;
    } else if (input.includes("book") || input.includes("schedule")) {
      return "Great! You can book an appointment through our Contact page. Would you like me to provide the link?";
    } else if (
      input.includes("contact") ||
      input.includes("call") ||
      input.includes("phone")
    ) {
      return `You can reach us at ${siteConfig.contact.phone} or email us at ${siteConfig.contact.email}. We're here to help!`;
    } else {
      return "I'd be happy to help! You can ask me about our services, hours, emergency services, or contact information. Or you can call us directly at " + siteConfig.contact.phone;
    }
  };

  const quickActions = [
    { label: "Our Services", action: "What services do you offer?" },
    { label: "Book Appointment", action: "I'd like to schedule a service" },
    { label: "Emergency Help", action: "I need emergency service" },
    { label: "Get Quote", action: "How much does it cost?" },
  ];

  if (!siteConfig.features.chatbot) return null;

  // WhatsApp Integration
  if (siteConfig.features.whatsappChatbot) {
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
      siteConfig.whatsapp.defaultMessage
    )}`;

    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group"
        >
          <FaWhatsapp className="text-2xl group-hover:animate-pulse" />
        </a>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  }

  // Regular Chatbot
  return (
    <>
      {/* Chatbot Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaComments className="text-2xl group-hover:animate-pulse" />
            )}
          </motion.div>
        </button>

        {/* Pulse Effect */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-blue-500 rounded-full -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 left-6 z-40 bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <FaRobot className="text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">Chat Assistant</h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? "bg-white text-gray-800 shadow-sm"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isBot ? "text-gray-400" : "text-blue-100"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-gray-200 bg-white">
                <p className="text-xs text-gray-500 mb-2 font-medium">
                  Quick Actions:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(action.action);
                        handleSend();
                      }}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
