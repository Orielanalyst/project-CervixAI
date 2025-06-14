import React from "react";
import { X, Users, Target, Award } from "lucide-react";
import { Button } from "./ui/button";

interface AboutUsProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AboutUs = ({ isOpen = true, onClose = () => {} }: AboutUsProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-teal-800">About Us</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Organization Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-teal-600" />
              <h3 className="text-xl font-semibold text-teal-700">
                Our Organization
              </h3>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-teal-800 mb-3">ORIINE</h4>
              <p className="text-gray-700 mb-4">
                ORIINE is a tech startup founded on the principles of open-source collaboration
                and grassroots innovation, we seek to break down traditional barriers in problem-solving
                by empowering local innovators and creatives to tackle pressing societal issues. 
                The startup thrives on interdisciplinary thinking, merging technology, public health, 
                and community engagement to create scalable solutions.
              </p>
              <p className="text-gray-700 mb-4">
                At the heart of ORIINE’s mission is a public health project Cervix AI,
                an innovative AI-powered solution designed to transform cervical cancer detection
                through a Stratified Multilevel Predictive Model (SMPM), a groundbreaking project 
                designed to revolutionize cervical cancer detection and screening in Cameroon. 
                Cervical cancer remains a leading cause of death among Cameroonian women, 
                largely due to delayed diagnosis and limited access to specialized healthcare. 
                Cervix AI leverages Convolutional Neural Networks (CNNs) to find patterns of formation
                and deep features in captured cervical image samples using a concurrent three level analysis scheme,
                leveraging the power of deep learning to identify and classify cervical cancer cells.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-teal-700 mb-2">Mission</h5>
                  <p className="text-sm text-gray-600">
                    To democratize access to high-quality healthcare through
                    innovative AI-powered solutions.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-teal-700 mb-2">Vision</h5>
                  <p className="text-sm text-gray-600">
                    A world where geographic location doesn't determine
                    healthcare quality and outcomes.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-teal-700 mb-2">Values</h5>
                  <p className="text-sm text-gray-600">
                    Innovation, Accessibility, Excellence, and
                    Community-centered Healthcare.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-teal-600" />
              <h3 className="text-xl font-semibold text-teal-700">Our Team</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">DR</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Research Team
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our multidisciplinary research team includes AI specialists,
                  medical professionals, and public health experts working
                  together to develop CerVixAI.
                </p>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-teal-600" />
                  <span className="text-xs text-teal-600">
                    PhD & MD Researchers
                  </span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  AI Development Team
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Machine learning engineers and data scientists specializing in
                  medical image analysis and computer vision for healthcare
                  applications.
                </p>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-teal-600" />
                  <span className="text-xs text-teal-600">
                    ML & Computer Vision Experts
                  </span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">MED</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Medical Advisory Board
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Oncologists, pathologists, and gynecologists providing
                  clinical expertise and validation for our AI models and
                  diagnostic approaches.
                </p>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-teal-600" />
                  <span className="text-xs text-teal-600">
                    Clinical Specialists
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* CerVixAI Project */}
          <section>
            <h3 className="text-xl font-semibold text-teal-700 mb-4">
              About CerVixAI
            </h3>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                CerVixAI represents a breakthrough in cervical cancer screening
                and diagnosis, specifically designed for resource-constrained
                healthcare settings in Sub-Saharan Africa.
              </p>
              <p className="text-gray-700 mb-4">
                Our three-level analysis approach (cellular, tissue, and
                colposcopy) provides comprehensive diagnostic capabilities that
                can significantly improve early detection rates and reduce the
                burden on healthcare systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-teal-700 mb-2">
                    Key Innovation
                  </h5>
                  <p className="text-sm text-gray-600">
                    Multi-level AI analysis combining cellular morphology,
                    tissue architecture, and colposcopic imaging for
                    comprehensive screening.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-teal-700 mb-2">
                    Impact Goal
                  </h5>
                  <p className="text-sm text-gray-600">
                    Increase screening capacity by 270% and reduce diagnostic
                    time from 21 days to 48 hours in resource-limited settings.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
