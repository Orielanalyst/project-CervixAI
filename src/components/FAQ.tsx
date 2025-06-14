import React from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

interface FAQProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = ({ isOpen = true, onClose = () => {} }: FAQProps) => {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "What is CerVixAI?",
      answer:
        "CerVixAI is an AI-powered cervical cancer analysis solution that performs three-level analysis (cellular, tissue, and colposcopy) to enhance early detection and diagnosis in resource-constrained settings. It's designed specifically for healthcare systems in Sub-Saharan Africa.",
    },
    {
      question: "How does the three-level analysis work?",
      answer:
        "Our system analyzes cervical samples at three different levels: 1) Cellular level - examining individual cell morphology and characteristics, 2) Tissue level - analyzing tissue architecture and patterns, and 3) Colposcopy level - processing colposcopic images for visual abnormalities. This comprehensive approach provides more accurate and reliable results.",
    },
    {
      question: "What are the main benefits of CerVixAI?",
      answer:
        "CerVixAI increases screening capacity by 270% (from 2,770 to 10,270 patients annually), reduces diagnostic time from 21 days to 48 hours, achieves >90% sensitivity and >85% specificity, and enables efficient resource allocation in areas with limited pathology expertise.",
    },
    {
      question: "Is CerVixAI suitable for resource-constrained settings?",
      answer:
        "Yes, CerVixAI is specifically designed for resource-constrained healthcare environments. It requires minimal infrastructure, can operate with basic computing equipment, and provides expert-level analysis where specialized pathologists may not be available.",
    },
    {
      question: "How accurate is the AI diagnosis?",
      answer:
        "Our AI system achieves over 90% sensitivity and over 85% specificity in detecting cervical abnormalities. The three-level analysis approach provides multiple validation points, significantly reducing false positives and false negatives compared to single-level screening methods.",
    },
    {
      question: "What types of samples can CerVixAI analyze?",
      answer:
        "CerVixAI can analyze various types of cervical samples including Pap smears (cytology), tissue biopsies (histopathology), and colposcopic images. The system is trained on diverse datasets to handle different sample preparation methods and imaging conditions.",
    },
    {
      question: "How long does it take to get results?",
      answer:
        "CerVixAI provides results within 48 hours, compared to the traditional 21-day turnaround time. In many cases, preliminary results can be available within hours of sample processing, enabling faster clinical decision-making.",
    },
    {
      question: "Is training required to use CerVixAI?",
      answer:
        "While CerVixAI is designed to be user-friendly, basic training is recommended for healthcare providers to understand the system's capabilities, interpret results correctly, and integrate the technology into existing workflows. We provide comprehensive training materials and support.",
    },
    {
      question: "Can CerVixAI replace human pathologists?",
      answer:
        "CerVixAI is designed to assist, not replace, healthcare professionals. It serves as a powerful diagnostic aid that can help prioritize cases, provide second opinions, and extend expert-level analysis to areas with limited specialist availability. Final clinical decisions should always involve qualified medical professionals.",
    },
    {
      question: "What is ORIINE's role in developing CerVixAI?",
      answer:
        "ORIINE (Organization for Research, Innovation, and Implementation in New Environments) is the research organization behind CerVixAI. Based in Yaoundé, Cameroon, ORIINE focuses on developing innovative healthcare solutions for resource-constrained settings using AI and machine learning technologies.",
    },
    {
      question: "How can healthcare facilities implement CerVixAI?",
      answer:
        "Healthcare facilities interested in implementing CerVixAI can contact ORIINE for consultation and deployment planning. We provide technical support, training, and ongoing maintenance to ensure successful integration into existing healthcare workflows.",
    },
    {
      question: "Is CerVixAI validated for clinical use?",
      answer:
        "CerVixAI is currently undergoing clinical validation studies in collaboration with healthcare institutions in Cameroon and other Sub-Saharan African countries. Our research team is working with medical advisory boards to ensure the system meets clinical standards and regulatory requirements.",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-teal-800">
            Frequently Asked Questions
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-teal-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-4">
              If you couldn't find the answer you're looking for, please don't
              hesitate to contact us. Our team is here to help and provide
              additional information about CerVixAI.
            </p>
            <div className="text-sm text-gray-600">
              <p>
                <strong>Email:</strong> info@oriine.org
              </p>
              <p>
                <strong>Location:</strong> Yaoundé, Cameroon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
