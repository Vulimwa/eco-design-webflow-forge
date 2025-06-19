
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Urban Design",
      icon: "🏙️",
      description: "Creating vibrant, functional, and sustainable urban environments that enhance quality of life for all residents.",
      features: [
        "Mixed-use development planning",
        "Public space design",
        "Transit-oriented development",
        "Historic district revitalization",
        "Zoning and land use optimization"
      ],
      deliverables: [
        "Comprehensive design guidelines",
        "3D visualizations and renderings",
        "Master plan documentation",
        "Community engagement reports"
      ]
    },
    {
      title: "Urban Planning",
      icon: "📊",
      description: "Strategic planning solutions that balance economic growth with environmental sustainability and community needs.",
      features: [
        "Comprehensive planning",
        "Strategic development frameworks",
        "Economic impact analysis",
        "Transportation planning",
        "Environmental impact assessments"
      ],
      deliverables: [
        "Master plans and strategic frameworks",
        "Policy recommendations",
        "Implementation timelines",
        "Stakeholder engagement summaries"
      ]
    },
    {
      title: "3D Rendering",
      icon: "🎨",
      description: "Cutting-edge visualization services that bring your vision to life with photorealistic accuracy and detail.",
      features: [
        "Architectural visualization",
        "Urban landscape rendering",
        "Virtual reality experiences",
        "Animation and walkthroughs",
        "Interactive 3D models"
      ],
      deliverables: [
        "High-resolution renderings",
        "360-degree panoramic views",
        "Interactive presentations",
        "Virtual tour experiences"
      ]
    },
    {
      title: "Landscape Architecture",
      icon: "🌿",
      description: "Harmonizing natural environments with built spaces to create sustainable, beautiful, and functional landscapes.",
      features: [
        "Ecological restoration",
        "Green infrastructure design",
        "Park and recreation planning",
        "Sustainable water management",
        "Native plant integration"
      ],
      deliverables: [
        "Landscape master plans",
        "Plant selection guides",
        "Maintenance protocols",
        "Environmental impact reports"
      ]
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
            backgroundImage: `linear-gradient(rgba(45, 90, 39, 0.8), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Comprehensive Solutions
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            For Urban & Environmental Excellence
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
            Our Core Services
          </h2>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            At SLM, we offer an integrated suite of services that work together to create 
            holistic solutions for complex urban challenges. Our multidisciplinary approach 
            ensures that every project benefits from our full range of expertise.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-0 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-6">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <CardTitle className="font-playfair text-3xl text-slm-green-700 mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="font-inter text-gray-600 text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-playfair text-lg font-semibold text-slm-brown-600 mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="font-inter text-gray-600 flex items-start">
                              <span className="text-slm-green-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-playfair text-lg font-semibold text-slm-brown-600 mb-3">
                          Deliverables:
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="font-inter text-gray-600 flex items-start">
                              <span className="text-slm-green-500 mr-2">✓</span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <div 
                    className="h-96 bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-20 bg-slm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
            Our Integrated Approach
          </h2>
          <p className="font-inter text-lg text-gray-700 mb-12 leading-relaxed">
            What sets SLM apart is our holistic methodology that weaves together all four 
            service areas into a cohesive solution. Rather than treating each discipline 
            in isolation, we leverage the synergies between urban design, planning, 
            visualization, and landscape architecture to deliver more effective, 
            sustainable, and beautiful outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700 mb-3">
                Collaborative Planning
              </h3>
              <p className="font-inter text-gray-600">
                Our teams work together from day one, ensuring that design decisions 
                support planning goals and environmental objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700 mb-3">
                Real-time Visualization
              </h3>
              <p className="font-inter text-gray-600">
                3D rendering capabilities allow us to test and refine concepts 
                throughout the design process, not just at the end.
              </p>
            </div>
          </div>
          <Button 
            asChild 
            size="lg" 
            className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-8 py-3"
          >
            <Link to="/quote">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
