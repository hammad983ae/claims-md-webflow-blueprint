
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import QuoteFormModal from './QuoteFormModal';

const HeroBanner = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-claimsBlue via-blue-700 to-blue-900 text-white pt-24 pb-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-blue-200">Trusted by 500+ Healthcare Providers</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading">
                Excellence in
                <span className="block text-claimsOrange">Revenue Recovery</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Accelerate your revenue cycle with our expert solutions in eligibility, AR management, denial handling & more. Focus on patient care while we maximize your reimbursements.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Increase Revenue by 25%',
                'Reduce Denials by 40%',
                '99.5% Claim Accuracy',
                '24/7 Expert Support'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-claimsOrange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                onClick={() => setQuoteModalOpen(true)}
              >
                Get Free Revenue Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-claimsBlue font-semibold px-8 py-4 rounded-full transition-all duration-300"
                onClick={() => setQuoteModalOpen(true)}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional female healthcare provider"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto"
              />
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white text-claimsBlue rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">98.7%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-claimsOrange text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">$2M+</div>
                <div className="text-sm">Recovered</div>
              </div>
            </div>
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-claimsOrange/20 to-blue-500/20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal 
        open={quoteModalOpen} 
        onOpenChange={setQuoteModalOpen} 
      />
    </section>
  );
};

export default HeroBanner;
