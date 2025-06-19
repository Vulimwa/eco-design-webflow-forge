
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      title: "Principal Urban Planner",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "15+ years of experience in sustainable urban development"
    },
    {
      name: "David Chen",
      title: "Lead Landscape Architect",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in ecological design and green infrastructure"
    },
    {
      name: "Maria Rodriguez",
      title: "Senior Urban Designer",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specializes in community-centered design solutions"
    },
    {
      name: "James Wilson",
      title: "3D Visualization Director",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Award-winning expertise in architectural visualization"
    }
  ];

  const values = [
    {
      title: "Sustainability First",
      description: "Every project prioritizes environmental stewardship and long-term ecological health.",
      icon: "🌱"
    },
    {
      title: "Community-Centered",
      description: "We design with people at the heart, creating spaces that serve diverse communities.",
      icon: "🤝"
    },
    {
      title: "Innovation-Driven",
      description: "Leveraging cutting-edge technology and methodologies to solve complex urban challenges.",
      icon: "💡"
    },
    {
      title: "Collaborative Approach",
      description: "Working closely with clients, communities, and stakeholders throughout every project.",
      icon: "🔄"
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
            backgroundImage: `linear-gradient(rgba(45, 90, 39, 0.8), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Our Vision for a Better Tomorrow
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            Meet the innovators behind SLM's sustainable design solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 font-inter leading-relaxed">
              <p>
                Founded in 2010, SLM Planning emerged from a shared vision among urban planning 
                professionals who recognized the urgent need for sustainable, community-focused 
                development solutions. Our founders came together with decades of combined experience 
                in urban design, landscape architecture, and environmental planning.
              </p>
              <p>
                What started as a small consulting practice has grown into a comprehensive planning 
                firm that serves NGOs, government bodies, and private sector clients across the globe. 
                Our integrated approach combines cutting-edge technology with time-tested planning 
                principles to create spaces that truly serve communities.
              </p>
              <p>
                Today, SLM stands at the forefront of sustainable urban development, having completed 
                over 200 projects that have positively impacted millions of lives. Our commitment to 
                environmental stewardship and social responsibility guides every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
              Our Core Values
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every project we undertake and every relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">
              Meet Our Team
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in 
              urban planning, design, and environmental stewardship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div 
                    className="w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-inter text-slm-brown-600 font-medium">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-inter text-gray-600 text-center text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SLM */}
      <section className="py-20 bg-slm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-12">
            Why Choose SLM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slm-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Years of Experience</h3>
              <p className="font-inter text-gray-600">
                Over a decade of delivering exceptional urban planning solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slm-brown-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">200+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Projects Completed</h3>
              <p className="font-inter text-gray-600">
                Successfully delivered projects across diverse sectors and geographies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slm-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">50+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Awards Won</h3>
              <p className="font-inter text-gray-600">
                Recognized for excellence in sustainable design and planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
