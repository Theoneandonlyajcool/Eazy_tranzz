import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Transaction = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const rate = 1650;
  const receivedAmount = amount
    ? (parseFloat(amount) * rate).toFixed(2)
    : "0.00";
  const handleContinue = () => {
    console.log("Continue to payment:", {
      amount,
      paymentMethod,
      receivedAmount,
    });
  };

  return (
    <div className="bg-white dark:bg-[#0d1117] w-full rounded-2xl p-6 mx-auto border border-gray-200 dark:border-[#1f2937]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[linear-gradient(#953E79,#440830)] flex items-center justify-center">
          <Send className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-[#222] dark:text-white text-xl font-semibold">
            New Exchange
          </h2>
          <p className="text-gray-500 dark:text-[#99A1AF] text-sm">
            Complete your transaction in 3 easy steps
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Amount Input */}
        <div className="space-y-2">
          <Label className="text-gray-500 dark:text-[#99A1AF] text-sm">
            Amount (USD)
          </Label>
          <Input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-12 bg-gray-50 dark:bg-[#1a1f2e] border-gray-200 dark:border-[#2a3441] text-[#222] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#6b7280] rounded-lg focus:border-[#7B0E58] focus:ring-[#7B0E58]"
          />
        </div>

        {/* Payment Method */}
        <div className="space-y-2">
          <Label className="text-gray-500 dark:text-[#99A1AF] text-sm">
            Payment Method
          </Label>
          <Input
            type="text"
            placeholder="Select payment method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="h-12 bg-gray-50 dark:bg-[#1a1f2e] border-gray-200 dark:border-[#2a3441] text-[#222] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#6b7280] rounded-lg focus:border-[#7B0E58] focus:ring-[#7B0E58]"
          />
        </div>

        {/* Rate Display */}
        <div className="bg-gray-50 dark:bg-[#1a1f2e] rounded-lg p-4 space-y-2 border border-gray-200 dark:border-[#2a3441]">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-[#99A1AF] text-sm">
              Rate
            </span>
            <span className="text-[#222] dark:text-white font-medium">
              ₦1,650/$
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 dark:text-[#99A1AF] text-sm">
              You'll Receive
            </span>
            <span className="text-green-600 dark:text-green-500 font-medium">
              ₦{receivedAmount}
            </span>
          </div>
        </div>

        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          className="w-full h-12 rounded-xl text-white font-medium text-base bg-linear-to-r from-[#953E79] to-[#440830] hover:opacity-90 transition-opacity"
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default Transaction;
