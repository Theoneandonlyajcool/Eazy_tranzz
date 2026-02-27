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

const CHAT_KNOWLEDGE_STORAGE_KEY = "eazytranz-chat-knowledge";

const SITE_KNOWLEDGE = [
  "EazyTranz is a payments and exchange platform where users can manage transactions, monitor rates, and handle account support.",
  "Main public pages include Home (/), About (/about), Contact (/contact), Blog (/blog), and All Rates (/allRates).",
  "Authentication pages include Sign In (/sign_in), Sign Up (/sign_up), Verify Email (/verify_email), and Forgot Password (/forgetPassowrd).",
  "KYC verification can be accessed from /kyc_verification or from Dashboard > KYC.",
  "The dashboard route is /dashboard, with sections for transaction, payments, activities, rates, profile, settings, kyc, and support.",
  "The rates page loads live rates data and allows search/filter across platforms.",
  "The blog page loads featured, latest, and popular articles and supports category filtering.",
  "This assistant can answer from built-in site knowledge and user-taught facts saved with: Remember: <site info>.",
  "If a user asks where to find a feature, this assistant should direct them to the exact page path and section name.",
];

const NAVIGATION_GUIDES = [
  {
    keywords: ["home", "landing", "start page"],
    response:
      "Go to Home at / . Use the logo in the header to quickly return there.",
  },
  {
    keywords: ["about", "company", "vision", "mission"],
    response:
      "Go to About at /about. It contains company vision, principles, timeline, and feature information.",
  },
  {
    keywords: ["contact", "support contact", "office", "reach"],
    response:
      "Go to Contact at /contact for contact sections, office/location info, and support questions.",
  },
  {
    keywords: ["blog", "article", "post", "news"],
    response:
      "Go to Blog at /blog to read featured/latest articles and browse categories.",
  },
  {
    keywords: ["rate", "rates", "exchange", "price", "platform rates"],
    response:
      "Go to All Rates at /allRates. You can search platforms, filter by popularity, and view buy/sell rate updates.",
  },
  {
    keywords: ["sign in", "login", "log in", "account access"],
    response:
      "Use Sign In at /sign_in. If login fails, check credentials or use Forgot Password at /forgetPassowrd.",
  },
  {
    keywords: ["sign up", "register", "create account"],
    response:
      "Use Sign Up at /sign_up, then complete email verification at /verify_email.",
  },
  {
    keywords: ["forgot password", "reset password", "password"],
    response:
      "Use Forgot Password at /forgetPassowrd to recover access if you cannot sign in.",
  },
  {
    keywords: ["kyc", "verify identity", "verification", "documents"],
    response:
      "Open KYC verification at /kyc_verification or inside Dashboard > KYC (/dashboard/kyc).",
  },
  {
    keywords: ["dashboard", "overview"],
    response:
      "Open Dashboard at /dashboard. From there you can access transaction, payments, activities, rates, profile, settings, kyc, and support.",
  },
  {
    keywords: ["transaction", "new exchange", "trade"],
    response:
      "Go to Dashboard Transaction at /dashboard/transaction to start a new exchange transaction.",
  },
  {
    keywords: ["payment", "payment options", "methods"],
    response:
      "Go to Dashboard Payments at /dashboard/payments to view and manage payment options.",
  },
  {
    keywords: ["activities", "history", "recent"],
    response:
      "Go to Dashboard Activities at /dashboard/activities to view transaction history and recent activity.",
  },
  {
    keywords: ["profile", "update profile", "account settings"],
    response:
      "Go to Dashboard Profile at /dashboard/profile to update your account/profile information.",
  },
  {
    keywords: ["settings", "preferences", "config"],
    response:
      "Go to Dashboard Settings at /dashboard/settings to configure account preferences.",
  },
  {
    keywords: ["support", "help center", "need help"],
    response:
      "Go to Dashboard Support at /dashboard/support for support-related help within your account area.",
  },
];

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "was",
  "what",
  "when",
  "where",
  "who",
  "why",
  "with",
]);

const tokenize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word && !STOP_WORDS.has(word));

const getNavigationHelp = (input: string) => {
  const lowerInput = input.toLowerCase();

  if (/(^|\s)(hi|hello|hey)(\s|$)/i.test(lowerInput)) {
    return "Hi 👋 I can guide you around EazyTranz. Ask things like: 'Where do I view rates?' or 'How do I update my profile?'";
  }

  if (/thank you|thanks/.test(lowerInput)) {
    return "You're welcome. I can also direct you to pages like /allRates, /dashboard/profile, or /dashboard/support.";
  }

  const askForDirections = /(where|how do i|navigate|find|go to|open)/i.test(
    lowerInput,
  );
  if (!askForDirections) return null;

  const matched = NAVIGATION_GUIDES.find((guide) =>
    guide.keywords.some((keyword) => lowerInput.includes(keyword)),
  );

  return matched
    ? matched.response
    : "I can help with navigation. Try asking: 'Where is rates?', 'How do I get to dashboard support?', or 'Where can I reset password?'";
};

const formatKnowledgeReply = (question: string, facts: string[]) => {
  const normalized = question.toLowerCase();

  if (
    /what can you help me with|how can you help|what do you do/.test(normalized)
  ) {
    return "I can help you navigate the website, find the right page for any task, explain account and KYC flow, and answer questions using the information I already know about EazyTranz. You can also teach me new site details with: Remember: <your information>.";
  }

  if (
    /how do i feed|how can i feed|teach you|add information/.test(normalized)
  ) {
    return "To teach me, send messages in this format: Remember: <fact>. Example: Remember: Support is available from 8am to 8pm WAT. I will store it and use it in future answers.";
  }

  const conciseFacts = facts.slice(0, 2);
  if (conciseFacts.length === 1) return conciseFacts[0];
  return `${conciseFacts[0]} Also, ${conciseFacts[1]}`;
};

const ChatBox = () => {
  const user = UserAuth((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [userKnowledge, setUserKnowledge] = useState<string[]>(() => {
    const storedValue = localStorage.getItem(CHAT_KNOWLEDGE_STORAGE_KEY);
    if (!storedValue) return [];

    try {
      const parsed = JSON.parse(storedValue);
      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === "string")
        : [];
    } catch {
      return [];
    }
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hello ${user?.fullName || "User"}! Welcome to EazyTranz support. I'm Sarah, your customer support agent. How can I help you today?`,
      sender: "support",
      showQuickReplies: true,
    },
  ]);

  const quickReplies = [
    "What can you help me with on this site?",
    "Remember: Our support hours are 8am to 8pm WAT",
    "How do I get help with transaction issues?",
    "How can I update my profile?",
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

  useEffect(() => {
    localStorage.setItem(
      CHAT_KNOWLEDGE_STORAGE_KEY,
      JSON.stringify(userKnowledge),
    );
  }, [userKnowledge]);

  const getKnowledgeBasedAnswer = (question: string) => {
    const qTokens = tokenize(question);
    const allKnowledge = [...SITE_KNOWLEDGE, ...userKnowledge];

    if (!qTokens.length || !allKnowledge.length) {
      return "I can answer questions about the site based on what I know. Teach me using: Remember: <site information>.";
    }

    const ranked = allKnowledge
      .map((fact) => {
        const factTokens = tokenize(fact);
        const overlap = qTokens.filter((token) => factTokens.includes(token));
        return { fact, score: overlap.length };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    if (!ranked.length) {
      return "I don’t have that information yet. Please teach me with: Remember: <site information>, and I’ll use it in future answers.";
    }

    return formatKnowledgeReply(
      question,
      ranked.map((item) => item.fact),
    );
  };

  const generateSupportReply = (input: string) => {
    const trimmedInput = input.trim();
    const rememberMatch = trimmedInput.match(
      /^(remember|learn|note)\s*[:\-]\s*(.+)$/i,
    );

    if (rememberMatch?.[2]) {
      const learnedFact = rememberMatch[2].trim();
      if (!learnedFact) {
        return "Please provide the information you want me to remember after 'Remember:'.";
      }

      setUserKnowledge((prev) => {
        if (prev.includes(learnedFact)) return prev;
        return [...prev, learnedFact];
      });

      return "Noted. I’ve saved that and will use it to answer future questions about the site.";
    }

    if (
      /what\s+do\s+you\s+know|list\s+knowledge|show\s+knowledge/i.test(
        trimmedInput,
      )
    ) {
      const combinedKnowledge = [...SITE_KNOWLEDGE, ...userKnowledge];
      return combinedKnowledge.length
        ? `Here is what I currently know:\n${combinedKnowledge
            .map((fact) => `• ${fact}`)
            .join("\n")}`
        : "I don't have saved knowledge yet. Teach me with: Remember: <site info>.";
    }

    const navigationHelp = getNavigationHelp(trimmedInput);
    if (navigationHelp) return navigationHelp;

    return getKnowledgeBasedAnswer(trimmedInput);
  };

  const pushUserMessageAndReply = (input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, sender: "user" },
    ]);

    const response = generateSupportReply(trimmed);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: response,
          sender: "support",
        },
      ]);
    }, 700);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    pushUserMessageAndReply(message);
    setMessage("");
    adjustHeight(true);
  };

  const handleQuickReply = (reply: string) => {
    pushUserMessageAndReply(reply);
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
