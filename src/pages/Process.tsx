
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive discussion to understand your vision, goals, constraints, and project requirements.",
      details: [
        "Stakeholder meetings and interviews",
        "Site visits and analysis",
        "Project scope definition",
        "Timeline and budget establishment"
      ],
      icon: "🤝",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Research & Analysis",
      description: "Deep dive into site conditions, regulatory requirements, community needs, and environmental factors.",
      details: [
        "Site surveys and data collection",
        "Regulatory and zoning analysis",
        "Community engagement sessions",
        "Environmental impact assessment"
      ],
      icon: "🔍",
      duration: "2-4 weeks"
    },
    {
      step: "03",
      title: "Conceptual Design",
      description: "Development of initial design concepts and planning frameworks based on research findings.",
      details: [
        "Concept sketches and diagrams",
        "Preliminary 3D visualizations",
        "Alternative scenario development",
        "Client feedback integration"
      ],
      icon: "💡",
      duration: "3-5 weeks"
    },
    {
      step: "04",
      title: "Detailed Planning",
      description: "Refinement of concepts into detailed plans, specifications, and comprehensive documentation.",
      details: [
        "Technical drawings and specifications",
        "Detailed 3D renderings",
        "Implementation strategies",
        "Cost estimation and phasing"
      ],
      icon: "📐",
      duration: "4-8 weeks"
    },
    {
      step: "05",
      title: "Implementation Oversight",
      description: "Ongoing support during project implementation to ensure design intent is maintained.",
      details: [
        "Construction administration",
        "Quality control monitoring",
        "Stakeholder coordination",
        "Issue resolution and modifications"
      ],
      icon: "🏗️",
      duration: "Project dependent"
    },
    {
      step: "06",
      title: "Post-Completion Review",
      description: "Evaluation of project outcomes and long-term monitoring to ensure success and sustainability.",
      details: [
        "Performance evaluation",
        "Community impact assessment",
        "Lessons learned documentation",
        "Ongoing maintenance planning"
      ],
      icon: "✅",
      duration: "Ongoing"
    }
  ];

  const principles = [
    {
      title: "Transparency",
      description: "Open communication and clear documentation throughout every phase of the project.",
      icon: "👁️"
    },
    {
      title: "Collaboration",
      description: "Active involvement of all stakeholders in the planning and design process.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge tools and methodologies to solve complex challenges.",
      icon: "🚀"
    },
    {
      title: "Sustainability",
      description: "Environmental stewardship and long-term thinking in every decision.",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(45, 90, 39, 0.8), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Our Proven Approach
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            From Concept to Completion: A Systematic Journey
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
            How We Work
          </h2>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            Our proven methodology ensures that every project benefits from systematic planning, 
            collaborative design, and expert implementation. We believe that great outcomes come 
            from great processes, and we've refined our approach over more than a decade of 
            successful project delivery.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-0 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-slm-green-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{step.step}</span>
                        </div>
                        <div className="text-4xl">{step.icon}</div>
                      </div>
                      <CardTitle className="font-playfair text-2xl text-slm-green-700 mb-2">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="font-inter text-gray-600 text-lg">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-inter font-semibold text-slm-brown-600 mb-3">
                          Key Activities:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="font-inter text-gray-600 flex items-start">
                              <span className="text-slm-green-500 mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <span className="inline-block bg-slm-green-100 text-slm-green-700 px-3 py-1 rounded-full font-inter text-sm font-medium">
                          Duration: {step.duration}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <div 
                    className="h-80 bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        index % 3 === 0 
                          ? '1501854140801-50d01698950b' 
                          : index % 3 === 1 
                          ? '1506744038136-46273834b3fb'
                          : '1615729947596-a598e5de0ab3'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-slm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
              Our Core Principles
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental values guide our approach and ensure consistent, 
              high-quality outcomes for every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter text-gray-600">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-slm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
            Typical Project Timeline
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-inter font-semibold text-slm-green-700">Small Projects</span>
                <span className="font-inter text-gray-600">3-6 months</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-inter font-semibold text-slm-green-700">Medium Projects</span>
                <span className="font-inter text-gray-600">6-12 months</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-inter font-semibold text-slm-green-700">Large Projects</span>
                <span className="font-inter text-gray-600">12-24 months</span>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-inter font-semibold text-slm-green-700">Master Plans</span>
                <span className="font-inter text-gray-600">18-36 months</span>
              </div>
            </div>
            <p className="font-inter text-gray-500 text-sm mt-6">
              *Timelines vary based on project complexity, scope, and regulatory requirements
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
