import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ChevronRight,
  Eye,
  EyeOff,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Info,
  Upload,
  Activity,
  AlertCircle,
  Clock,
  Database,
  Shield,
  BarChart2,
  RefreshCw,
  CloudOff,
  Cloud,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const DemoInterface = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [showOverlay, setShowOverlay] = useState(true);
  const [zoomLevel, setZoomLevel] = useState([50]);
  const [selectedSample, setSelectedSample] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  // Simulate bulk processing
  const handleBulkUpload = () => {
    setProcessing(true);
    setProcessingProgress(0);
    
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setProcessing(false);
          setActiveTab("results");
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // Sample data for each analysis type
  const samples = {
    cellular: [
      {
        id: 1,
        title: "Normal Cellular Sample",
        description: "Healthy cervical cells with normal nuclei and cytoplasm",
        originalImage: "/normal-cells.jpg",
        overlayImage: "/normal-cells-ai.jpg",
        confidence: 98,
        classification: "Normal",
        features: [
          "Regular cell borders",
          "Normal nucleus-to-cytoplasm ratio",
          "Uniform chromatin pattern",
        ],
        bethesdaClass: "Negative for intraepithelial lesion or malignancy",
        confidenceIntervals: [96, 99],
        needsReview: false,
      },
      {
        id: 2,
        title: "LSIL Sample",
        description: "Low-grade squamous intraepithelial lesion showing mild dysplasia",
        originalImage: "/lsil-cells.jpg",
        overlayImage: "/lsil-cells-ai.jpg",
        confidence: 92,
        classification: "LSIL",
        features: [
          "Enlarged nuclei",
          "Irregular chromatin",
          "Mild nuclear atypia",
        ],
        bethesdaClass: "Low-grade squamous intraepithelial lesion (LSIL)",
        confidenceIntervals: [89, 94],
        needsReview: false,
      },
      {
        id: 3,
        title: "HSIL Sample",
        description: "High-grade squamous intraepithelial lesion with severe dysplasia",
        originalImage: "/hsil-cells.jpg",
        overlayImage: "/hsil-cells-ai.jpg",
        confidence: 95,
        classification: "HSIL",
        features: [
          "Markedly enlarged nuclei",
          "High nucleus-to-cytoplasm ratio",
          "Coarse chromatin",
        ],
        bethesdaClass: "High-grade squamous intraepithelial lesion (HSIL)",
        confidenceIntervals: [92, 97],
        needsReview: false,
      },
      {
        id: 4,
        title: "Borderline Sample",
        description: "Atypical squamous cells of undetermined significance",
        originalImage: "/ascus-cells.jpg",
        overlayImage: "/ascus-cells-ai.jpg",
        confidence: 82,
        classification: "ASC-US",
        features: [
          "Slight nuclear enlargement",
          "Minimal hyperchromasia",
          "Mild irregularity in nuclear contours",
        ],
        bethesdaClass: "Atypical squamous cells of undetermined significance (ASC-US)",
        confidenceIntervals: [78, 85],
        needsReview: true,
      },
    ],
    tissue: [
      {
        id: 1,
        title: "Normal Tissue Sample",
        description: "Healthy cervical tissue with normal epithelial layers",
        originalImage: "/normal-tissue.jpg",
        overlayImage: "/normal-tissue-ai.jpg",
        confidence: 97,
        classification: "Normal",
        features: [
          "Intact epithelial layers",
          "Normal maturation pattern",
          "No abnormal cells",
        ],
        bethesdaClass: "Negative for intraepithelial lesion or malignancy",
        confidenceIntervals: [95, 98],
        needsReview: false,
      },
      {
        id: 2,
        title: "CIN1 Tissue Sample",
        description: "Cervical intraepithelial neoplasia grade 1 showing mild dysplasia",
        originalImage: "/cin1-tissue.jpg",
        overlayImage: "/cin1-tissue-ai.jpg",
        confidence: 89,
        classification: "CIN1",
        features: [
          "Dysplasia in lower third of epithelium",
          "Mild nuclear atypia",
          "Some koilocytes present",
        ],
        bethesdaClass: "Low-grade squamous intraepithelial lesion (LSIL)",
        confidenceIntervals: [86, 91],
        needsReview: false,
      },
      {
        id: 3,
        title: "CIN3 Tissue Sample",
        description: "Cervical intraepithelial neoplasia grade 3 showing severe dysplasia",
        originalImage: "/cin3-tissue.jpg",
        overlayImage: "/cin3-tissue-ai.jpg",
        confidence: 94,
        classification: "CIN3",
        features: [
          "Full-thickness dysplasia",
          "Loss of polarity",
          "Marked nuclear atypia",
        ],
        bethesdaClass: "High-grade squamous intraepithelial lesion (HSIL)",
        confidenceIntervals: [91, 96],
        needsReview: false,
      },
    ],
    colposcopy: [
      {
        id: 1,
        title: "Normal Colposcopy",
        description: "Normal cervix with no acetowhite changes after acetic acid application",
        originalImage: "/normal-colpo.jpg",
        overlayImage: "/normal-colpo-ai.jpg",
        confidence: 96,
        classification: "Normal",
        features: [
          "No acetowhite lesions",
          "Normal vascular pattern",
          "Smooth surface",
        ],
        bethesdaClass: "Negative for intraepithelial lesion or malignancy",
        confidenceIntervals: [94, 97],
        needsReview: false,
      },
      {
        id: 2,
        title: "Low-Grade Lesion",
        description: "Colposcopy showing thin acetowhite epithelium with fine mosaic pattern",
        originalImage: "/lowgrade-colpo.jpg",
        overlayImage: "/lowgrade-colpo-ai.jpg",
        confidence: 91,
        classification: "Low-grade",
        features: [
          "Thin acetowhite epithelium",
          "Fine mosaic pattern",
          "Regular margins",
        ],
        bethesdaClass: "Low-grade squamous intraepithelial lesion (LSIL)",
        confidenceIntervals: [88, 93],
        needsReview: false,
      },
      {
        id: 3,
        title: "High-Grade Lesion",
        description: "Colposcopy showing dense acetowhite epithelium with coarse punctation",
        originalImage: "/highgrade-colpo.jpg",
        overlayImage: "/highgrade-colpo-ai.jpg",
        confidence: 93,
        classification: "High-grade",
        features: [
          "Dense acetowhite change",
          "Coarse punctation",
          "Sharp borders",
        ],
        bethesdaClass: "High-grade squamous intraepithelial lesion (HSIL)",
        confidenceIntervals: [90, 95],
        needsReview: false,
      },
    ],
  };

  // Metrics data
  const metrics = {
    clinical: [
      { metric: "Sensitivity (CIN2+)", value: "92.4%", target: "≥90%", status: "meets" },
      { metric: "Specificity", value: "86.7%", target: "≥85%", status: "meets" },
      { metric: "Early detection rate (CIN1+)", value: "94.2%", target: "≥90%", status: "meets" },
      { metric: "False negative rate", value: "3.1%", target: "≤5%", status: "meets" },
    ],
    operational: [
      { metric: "Average turnaround time", value: "36.2h", target: "≤48h", status: "meets" },
      { metric: "Screening volume (daily)", value: "127", target: "≥100", status: "meets" },
      { metric: "Loss-to-follow-up rate", value: "8.3%", target: "≤10%", status: "meets" },
      { metric: "Pathologist review rate", value: "14.7%", target: "≤20%", status: "meets" },
    ],
    technical: [
      { metric: "Image processing success", value: "99.1%", target: "≥98%", status: "meets" },
      { metric: "Hardware failure rate", value: "0.8%", target: "≤2%", status: "meets" },
      { metric: "Software stability (uptime)", value: "99.9%", target: "≥99.5%", status: "meets" },
      { metric: "Data sync completion", value: "97.5%", target: "≥95%", status: "meets" },
    ],
    alerts: [
      { 
        date: "2023-11-15", 
        type: "Operational", 
        message: "Turnaround time exceeded 50h in Region B", 
        resolved: true 
      },
      { 
        date: "2023-11-10", 
        type: "Clinical", 
        message: "Sensitivity dropped to 88.2% in Region C", 
        resolved: true 
      },
      { 
        date: "2023-11-08", 
        type: "Technical", 
        message: "Image processing errors increased to 3.2%", 
        resolved: false 
      },
    ]
  };

  const currentSamples = samples[activeTab as keyof typeof samples] || [];
  const currentSample = currentSamples[selectedSample] || {};

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return "bg-green-500";
    if (confidence >= 85) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getClassificationBadge = (classification: string) => {
    switch (classification) {
      case "Normal":
        return <Badge className="bg-green-500">Normal</Badge>;
      case "LSIL":
      case "CIN1":
      case "Low-grade":
        return <Badge className="bg-yellow-500">{classification}</Badge>;
      case "HSIL":
      case "CIN3":
      case "High-grade":
        return <Badge className="bg-red-500">{classification}</Badge>;
      case "ASC-US":
        return <Badge className="bg-orange-500">{classification}</Badge>;
      default:
        return <Badge>{classification}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "meets":
        return <Badge className="bg-green-500">Within target</Badge>;
      case "below":
        return <Badge className="bg-yellow-500">Needs attention</Badge>;
      case "alert":
        return <Badge className="bg-red-500">Action required</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="w-full p-0">
      <div className="mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="upload">
              <Upload className="h-4 w-4 mr-2" />
              Bulk Upload
            </TabsTrigger>
            <TabsTrigger value="cellular">Cellular Analysis</TabsTrigger>
            <TabsTrigger value="tissue">Tissue Analysis</TabsTrigger>
            <TabsTrigger value="colposcopy">Colposcopy Analysis</TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === "upload" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload panel */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col items-center justify-center py-12">
                {processing ? (
                  <>
                    <div className="relative w-full max-w-2xl mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Processing images...</span>
                        <span className="text-sm font-medium">{processingProgress}%</span>
                      </div>
                      <Progress value={processingProgress} className="h-3" />
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full max-w-2xl">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-slate-100 rounded-lg aspect-square animate-pulse">
                          <div className="h-full flex items-center justify-center">
                            {processingProgress >= item * 25 && (
                              <div className="bg-green-100 text-green-800 p-2 rounded-full">
                                <Check className="h-5 w-5" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center mb-8 w-full max-w-2xl">
                      <Upload className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Drag and drop cervical images</h3>
                      <p className="text-slate-500 mb-4">Supports JPG, PNG, and DICOM formats</p>
                      <Button>Select Files</Button>
                      <p className="text-sm text-slate-500 mt-4">Or upload up to 100 images at once</p>
                    </div>
                    <Button size="lg" onClick={handleBulkUpload}>
                      <Activity className="h-5 w-5 mr-2" />
                      Start AI Analysis
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {(activeTab === "cellular" || activeTab === "tissue" || activeTab === "colposcopy") && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left panel - Sample selection */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeTab === "cellular" && "Cellular Samples"}
                  {activeTab === "tissue" && "Tissue Samples"}
                  {activeTab === "colposcopy" && "Colposcopy Images"}
                </h3>
                <div className="flex items-center space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setOfflineMode(!offlineMode)}
                        >
                          {offlineMode ? (
                            <CloudOff className="h-4 w-4 mr-1" />
                          ) : (
                            <Cloud className="h-4 w-4 mr-1" />
                          )}
                          {offlineMode ? "Offline" : "Online"}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{offlineMode ? "Working offline - data will sync when connection is restored" : "Connected to central server"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <ScrollArea className="h-[500px]">
                <div className="space-y-3">
                  {currentSamples.map((sample, index) => (
                    <Card
                      key={sample.id}
                      className={`cursor-pointer transition-all ${selectedSample === index ? "ring-2 ring-primary" : ""}`}
                      onClick={() => setSelectedSample(index)}
                    >
                      <CardHeader className="py-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-sm">{sample.title}</CardTitle>
                          {getClassificationBadge(sample.classification)}
                        </div>
                        <CardDescription className="text-xs line-clamp-2">
                          {sample.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="py-0 pb-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">Confidence:</span>
                          <div className="flex items-center space-x-2">
                            <Progress
                              value={sample.confidence}
                              className={`h-2 w-20 ${getConfidenceColor(sample.confidence)}`}
                            />
                            <span className="text-xs font-medium">{sample.confidence}%</span>
                          </div>
                        </div>
                        {sample.needsReview && (
                          <div className="mt-2 flex items-center text-xs text-yellow-600">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Pathologist review required
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Center panel - Image viewer */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {currentSample.title || "Image Viewer"}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowOverlay(!showOverlay)}
                  >
                    {showOverlay ? (
                      <EyeOff className="h-4 w-4 mr-1" />
                    ) : (
                      <Eye className="h-4 w-4 mr-1" />
                    )}
                    {showOverlay ? "Hide AI" : "Show AI"}
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Toggle AI overlay to see detection highlights</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="relative aspect-video bg-slate-100 rounded-md overflow-hidden mb-4">
                {currentSample.originalImage ? (
                  <>
                    <img
                      src={showOverlay ? currentSample.overlayImage : currentSample.originalImage}
                      alt={currentSample.title}
                      className="w-full h-full object-contain"
                      style={{ transform: `scale(${zoomLevel[0] / 50 + 0.5})` }}
                    />
                    {showOverlay && (
                      <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                        AI Detection Active
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    Select a sample to view
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={() => setZoomLevel([Math.max(0, zoomLevel[0] - 10)])}>
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Slider
                    value={zoomLevel}
                    onValueChange={setZoomLevel}
                    max={100}
                    step={1}
                    className="w-32"
                  />
                  <Button variant="outline" size="icon" onClick={() => setZoomLevel([Math.min(100, zoomLevel[0] + 10)])}>
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="icon">
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>

              {/* Bethesda classification */}
              {currentSample.bethesdaClass && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Bethesda System Classification
                  </h4>
                  <p className="text-sm text-blue-700">{currentSample.bethesdaClass}</p>
                </div>
              )}
            </div>

            {/* Right panel - Analysis results */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  AI Analysis Results
                </h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowMetrics(!showMetrics)}
                >
                  <BarChart2 className="h-4 w-4 mr-1" />
                  {showMetrics ? "Hide Metrics" : "Show Metrics"}
                </Button>
              </div>

              {showMetrics ? (
                <div className="space-y-6">
                  <Tabs defaultValue="clinical">
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="clinical">Clinical</TabsTrigger>
                      <TabsTrigger value="operational">Operational</TabsTrigger>
                      <TabsTrigger value="technical">Technical</TabsTrigger>
                    </TabsList>
                    <TabsContent value="clinical">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Target</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {metrics.clinical.map((metric, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{metric.metric}</TableCell>
                              <TableCell>{metric.value}</TableCell>
                              <TableCell>{metric.target}</TableCell>
                              <TableCell>
                                {getStatusBadge(metric.status)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                    <TabsContent value="operational">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Target</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {metrics.operational.map((metric, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{metric.metric}</TableCell>
                              <TableCell>{metric.value}</TableCell>
                              <TableCell>{metric.target}</TableCell>
                              <TableCell>
                                {getStatusBadge(metric.status)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                    <TabsContent value="technical">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Target</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {metrics.technical.map((metric, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{metric.metric}</TableCell>
                              <TableCell>{metric.value}</TableCell>
                              <TableCell>{metric.target}</TableCell>
                              <TableCell>
                                {getStatusBadge(metric.status)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                  </Tabs>

                  <div>
                    <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2 text-yellow-500" />
                      System Alerts
                    </h4>
                    <div className="space-y-3">
                      {metrics.alerts.map((alert, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{alert.message}</p>
                              <p className="text-xs text-slate-500">{alert.date} • {alert.type}</p>
                            </div>
                            <Badge variant={alert.resolved ? "outline" : "destructive"}>
                              {alert.resolved ? "Resolved" : "Pending"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-slate-700">
                        Sample Information
                      </h4>
                      {currentSample.classification && getClassificationBadge(currentSample.classification)}
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      {currentSample.description || "Select a sample to view details"}
                    </p>
                  </div>

                  {currentSample.confidence && (
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">
                        Confidence Score
                      </h4>
                      <div className="flex items-center space-x-2 mb-1">
                        <Progress
                          value={currentSample.confidence}
                          className={`h-2 ${getConfidenceColor(currentSample.confidence)}`}
                        />
                        <span className="text-sm font-medium">
                          {currentSample.confidence}%
                        </span>
                      </div>
                      {currentSample.confidenceIntervals && (
                        <p className="text-xs text-slate-500">
                          95% confidence interval: {currentSample.confidenceIntervals[0]}% to {currentSample.confidenceIntervals[1]}%
                        </p>
                      )}
                    </div>
                  )}

                  {currentSample.features && (
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">
                        Key Features Detected
                      </h4>
                      <ul className="space-y-1">
                        {currentSample.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Separator />

                  {currentSample.classification && (
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">
                        Recommended Action
                      </h4>
                      <p className="text-sm text-slate-600">
                        {currentSample.classification === "Normal"
                          ? "Routine screening as per guidelines"
                          : currentSample.needsReview
                            ? "Pathologist review required (confidence <85%)"
                            : "Further evaluation and possible biopsy recommended"}
                      </p>
                      {currentSample.needsReview && (
                        <Button className="mt-3 w-full" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Send for Pathologist Review
                        </Button>
                      )}
                    </div>
                  )}

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-700 mb-2 flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Hybrid Diagnosis Protocol
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Samples with confidence {'<'}85% are automatically flagged for pathologist review as part of our validated quality control protocol.
                    </p>
                    <div className="flex items-center text-sm">
                      <div className="flex-1">
                        <div className="h-2 bg-green-500 rounded-full mb-1"></div>
                        <p className="text-xs">≥85% - AI diagnosis</p>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-yellow-500 rounded-full mb-1"></div>
                        <p className="text-xs">75-85% - Review suggested</p>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-red-500 rounded-full mb-1"></div>
                        <p className="text-xs">{'<'}75% - Mandatory review</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoInterface;