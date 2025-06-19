
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Urban Design",
      description: "Creating vibrant, livable spaces that bring communities together through thoughtful design.",
      icon: "🏙️"
    },
    {
      title: "Urban Planning",
      description: "Strategic planning solutions that balance growth with sustainability and community needs.",
      icon: "📊"
    },
    {
      title: "3D Rendering",
      description: "Stunning visualizations that bring your vision to life before construction begins.",
      icon: "🎨"
    },
    {
      title: "Landscape Architecture",
      description: "Harmonizing natural environments with urban development for sustainable futures.",
      icon: "🌿"
    }
  ];

  const clients = [
    "Global NGO Alliance",
    "Metropolitan Planning Board",
    "EcoVision Corporation",
    "Urban Futures Initiative",
    "Green Development Partners"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(45, 90, 39, 0.7), rgba(139, 69, 19, 0.7)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Shaping Sustainable Futures
          </h1>
          <p className="font-inter text-xl md:text-2xl mb-8 animate-fade-in">
            Innovative urban design, planning, and landscape architecture solutions 
            for NGOs, government bodies, and private sector clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-8 py-3"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-slm-green-600 font-semibold px-8 py-3"
            >
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-slm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
            Welcome to SLM Planning
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At SLM, we believe in creating spaces that not only serve today's needs but 
            anticipate tomorrow's challenges. Our integrated approach to urban design, 
            planning, and landscape architecture ensures sustainable, innovative solutions 
            that enhance communities and protect our environment.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
              Our Core Services
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions that integrate design, planning, and sustainability 
              to create exceptional urban environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter text-gray-600 text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full text-slm-green-600 hover:text-slm-green-700 hover:bg-slm-green-50"
                  >
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-slm-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="font-inter text-lg text-gray-600">
              We're proud to partner with forward-thinking organizations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center text-center"
              >
                <span className="font-inter font-semibold text-slm-green-700 text-sm">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slm-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="font-inter text-xl text-slm-green-100 mb-8">
            Let's discuss how we can help you create sustainable, innovative solutions 
            for your next urban development project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-8 py-3"
            >
              <Link to="/quote">Get Started</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-slm-green-600 font-semibold px-8 py-3"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
