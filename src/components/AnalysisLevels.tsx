import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ZoomIn, ArrowRight, Microscope, Grid3X3, Camera } from "lucide-react";

const AnalysisLevels = () => {
  const [activeTab, setActiveTab] = useState("cellular");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const analysisTypes = [
    {
      id: "cellular",
      title: "Cellular Level Analysis",
      description:
        "Detailed examination of individual cells to detect abnormalities at the microscopic level.",
      icon: <Microscope className="h-8 w-8 text-primary" />,
      beforeImage:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
      features: [
        "Identifies cellular morphology changes",
        "Detects nuclear abnormalities",
        "Classifies cells according to Bethesda System",
        "Provides confidence scores for detected anomalies",
      ],
      accuracy: "93%",
    },
    {
      id: "tissue",
      title: "Whole Smear Imaging Analysis",
      description:
        "Comprehensive analysis of tissue samples to identify patterns and structural changes indicative of precancerous or cancerous conditions.",
      icon: <Grid3X3 className="h-8 w-8 text-primary" />,
      beforeImage:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80",
      features: [
        "Evaluates tissue architecture",
        "Identifies abnormal growth patterns",
        "Detects precancerous lesions",
        "Analyzes cell distribution and organization",
      ],
      accuracy: "91%",
    },
    {
      id: "colposcopy",
      title: "Colposcopy Analysis",
      description:
        "Visual examination of the cervix using a colposcope to identify suspicious areas that may require biopsy.",
      icon: <Camera className="h-8 w-8 text-primary" />,
      beforeImage:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&q=80",
      features: [
        "Identifies acetowhite changes",
        "Detects abnormal vascular patterns",
        "Maps suspicious regions for targeted biopsy",
        "Grades lesions according to severity",
      ],
      accuracy: "89%",
    },
  ];

  return (
    <section id="analysis-levels" className="py-2 px-0 md:px-30 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Three-Level Analysis Technology
          </h2>
          <p className="text-lg text-slate-600 max-w-6xl mx-auto">
            CerVix AI employs a stratified approach to cervical cancer detection,
            analyzing samples at three distinct levels for comprehensive and
            accurate results.
          </p>
        </motion.div>

        <Tabs
          defaultValue="cellular"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-8 w-full max-w-6xl mx-auto">
            {analysisTypes.map((type) => (
              <TabsTrigger
                key={type.id}
                value={type.id}
                className="flex flex-col items-center gap-2 py-1 px-4"
              >
                {type.icon}
                <span className="hidden md:block">{type.title}</span>
                <span className="block md:hidden">
                  {type.id.charAt(0).toUpperCase() + type.id.slice(1)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {analysisTypes.map((type) => (
            <TabsContent
              key={type.id}
              value={type.id}
              className="focus:outline-none mt-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="py-2 px-4 border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-t-lg">
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
                    <CardDescription className="text-white/90">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-slate-800">
                          Key Capabilities
                        </h3>
                        <ul className="space-y-3">
                          {type.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <ArrowRight className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-slate-600">
                            Detection Accuracy
                          </p>
                          <p className="text-3xl font-bold text-blue-600">
                            {type.accuracy}
                          </p>
                        </div>
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-slate-800">
                          AI Processing Visualization
                        </h3>
                        <div className="relative">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="aspect-square relative overflow-hidden rounded-lg border border-slate-200">
                                <img
                                  src={type.beforeImage}
                                  alt="Original sample"
                                  className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-slate-800/70 text-white text-xs p-2">
                                  Original Sample
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="aspect-square relative overflow-hidden rounded-lg border border-slate-200">
                                <img
                                  src={type.afterImage}
                                  alt="AI processed sample"
                                  className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-teal-500/20 border-2 border-teal-500 rounded-lg"></div>
                                <div className="absolute bottom-0 left-0 right-0 bg-teal-600/90 text-white text-xs p-2">
                                  AI Processed
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-slate-200"
                          >
                            <ZoomIn className="mr-1 h-4 w-4" /> Compare
                          </Button>
                        </div>
                        <div className="bg-slate-100 p-4 rounded-lg">
                          <h4 className="font-medium text-slate-800 mb-2">
                            How It Works
                          </h4>
                          <p className="text-sm text-slate-600">
                            The AI model analyzes{" "}
                            {type.id === "cellular"
                              ? "individual cells"
                              : type.id === "tissue"
                                ? "tissue patterns"
                                : "colposcopy images"}{" "}
                            using advanced convolutional neural networks trained
                            on thousands of samples to identify subtle
                            abnormalities that might indicate precancerous or
                            cancerous conditions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AnalysisLevels;
