import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import DemoInterface from "./DemoInterface"; // Your existing demo component

interface CervixAIDemoModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const CervixAIDemoModal = ({ isOpen = false, onClose = () => {} }: CervixAIDemoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Modal content */}
        <div className="relative w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
          
          {/* Scrollable content */}
          <div className="max-h-[90vh] overflow-y-auto">
            <DemoInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CervixAIDemoModal;