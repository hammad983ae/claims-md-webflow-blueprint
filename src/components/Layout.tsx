
import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MetaTags from './MetaTags';
import { Toaster } from '@/components/ui/sonner';
import PageCTA from './PageCTA';
import { motion } from '@/components/ui/motion';

interface LayoutProps {
  children: ReactNode;
  metaPage?: string;
}

const Layout = ({ children, metaPage = 'home' }: LayoutProps) => {
  // Add scroll restoration effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <MetaTags page={metaPage} />
      <Header />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
        <div className="container-custom">
          <PageCTA />
        </div>
      </motion.main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
