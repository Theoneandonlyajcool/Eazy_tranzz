import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import supporLogo from "@/assets/Images/Container.png";
import { UserAuth } from "@/app/store";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

interface Message {
  id: number;
  text: string;
  sender: "user" | "support";
  showQuickReplies?: boolean;
}

const ChatBox = () => {
  const user = UserAuth((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hello ${user?.fullName || "User"}! Welcome to EazyTranz support. I'm Sarah, your customer support agent. How can I help you today?`,
      sender: "support",
      showQuickReplies: true,
    },
  ]);

  const quickReplies = [
    "I need help with a transaction",
    "I have a question about rates",
    "I want to update my profile",
    "I'm having login issues",
  ];

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 40,
    maxHeight: 120,
  });

  const messagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), text: message, sender: "user" },
      ]);
      setMessage("");
      adjustHeight(true);
      // Simulate response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: "Thank you for your message. Our support team will get back to you soon.",
            sender: "support",
          },
        ]);
      }, 1000);
    }
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { id: Date.now(), text: reply, sender: "user" }]);
    // Simulate specific response based on reply
    setTimeout(() => {
      let response =
        "Thank you for your message. Our support team will get back to you soon.";
      if (reply.includes("transaction")) {
        response =
          "I'd be happy to help with your transaction. Can you please provide more details about the issue you're experiencing?";
      } else if (reply.includes("rates")) {
        response =
          "I can help you with information about our current exchange rates. What currency pair are you interested in?";
      } else if (reply.includes("profile")) {
        response =
          "To update your profile, please go to the Profile section in your dashboard. What specific information would you like to change?";
      } else if (reply.includes("login")) {
        response =
          "I'm sorry you're having login issues. Have you tried resetting your password? If that doesn't work, please provide more details.";
      }
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: response,
          sender: "support",
        },
      ]);
    }, 1000);
  };

  const navigate = useNavigate();

  const checkIfUserIsLoggedIn = () => {
    if (!user || !user.accessToken) {
      toast.error("Please log in to access the chat support.");
      setTimeout(() => {
        navigate("/sign_in");
      }, 3000);
    } else {
      setIsOpen(true);
    }
  };

  // const hasToken = !!user?.accessToken;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => checkIfUserIsLoggedIn()}
          className="fixed bottom-4 right-4 z-50 bg-[#953E79] hover:bg-[#440830] animate-pulse cursor-pointer text-white p-3 rounded-full shadow-lg transition-all duration-300 md:bottom-6 md:right-6"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-sm md:w-auto md:max-w-md lg:max-w-lg max-h-[70vh] mb-10 md:mb-16">
          <div className="bg-white rounded-lg shadow-2xl border border-[#953E79] overflow-hidden flex flex-col h-full">
            {/* Header */}
            <div className="bg-linear-to-l from-[#440830] to-[#953E79] text-white p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <img src={supporLogo} loading="lazy" alt="Support Logo" />
                <div>
                  <h3 className="font-semibold text-lg">EazyTranz support </h3>
                  <p>
                    <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-2"></span>
                    online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={messagesRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-black min-h-0 max-h-[300px]"
            >
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        msg.sender === "user"
                          ? "bg-[#440830] text-white"
                          : "bg-gray-800 text-gray-200 border border-gray-700"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies - Show only if no user messages sent */}
            {messages.filter((msg) => msg.sender === "user").length === 0 && (
              <div className="px-4 py-3 border-t border-gray-700 bg-gray-900 shrink-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 rounded-lg transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-[#1A1A2E] shrink-0">
              <div className="flex items-center gap-2 ">
                <Textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    adjustHeight();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 min-h-10 max-h-[120px] resize-none"
                  ref={textareaRef}
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  className="bg-[#440830] hover:bg-[#440830]/90 shrink-0 cursor-pointer flex items-center justify-center h-[50px]"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
