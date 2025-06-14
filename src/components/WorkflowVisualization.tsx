import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Brain, FileText, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  duration?: string;
}

const WorkflowVisualization = () => {
  const steps: WorkflowStep[] = [
    {
      title: "Sample Collection",
      description:
        "Healthcare providers collect cervical samples using VIA-compatible brushes, preparing slides with anonymized patient IDs.",
      icon: <Microscope size={32} />,
      color: "bg-blue-100",
      duration: "5-10 minutes",
    },
    {
      title: "Image Capture",
      description:
        "Digital microscopes capture cellular and whole-smear images at 40x magnification, while colposcopy images document macroscopic abnormalities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v4" />
          <path d="M13 21h-4a2 2 0 0 1 -2 -2v-4" />
          <path d="M11 3h-4a2 2 0 0 0 -2 2v4" />
          <path d="M9 21h4a2 2 0 0 0 2 -2v-4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      color: "bg-teal-100",
      duration: "10-15 minutes",
    },
    {
      title: "AI Analysis",
      description:
        "The SMCM processes batches of 20–50 images locally on the edge device, generating preliminary reports using our stratified multi-level classification model.",
      icon: <Brain size={32} />,
      color: "bg-indigo-100",
      duration: "90 minutes",
    },
    {
      title: "Results Delivery",
      description:
        'Results are categorized by risk: "Negative" cases receive automated follow-up notifications, while "Positive" or "Indeterminate" cases trigger immediate alerts to both patient and regional pathologist.',
      icon: <FileText size={32} />,
      color: "bg-purple-100",
      duration: "Within 48 hours",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-white" id="workflow">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How CerVixAI Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined workflow reduces diagnostic turnaround time from 21
            days to under 48 hours, enabling rapid intervention and improved
            patient outcomes.
          </p>
        </div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          {/* Mobile timeline line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 md:hidden" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-16 relative"
              variants={itemVariants}
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 z-10" />

                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-16 md:pl-0`}
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className={`${step.color} p-6`}>
                        <div className="flex items-center mb-4">
                          <div className="mr-4 text-blue-700">{step.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                            {step.duration && (
                              <div className="flex items-center text-sm text-gray-600 mt-1">
                                <Clock size={14} className="mr-1" />
                                <span>{step.duration}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block w-1/2" />
              </div>

              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 mt-8 text-blue-600">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full text-blue-700 font-medium">
            <Clock size={20} className="mr-2" />
            <span>Reducing diagnostic time from 21 days to under 48 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualization;
