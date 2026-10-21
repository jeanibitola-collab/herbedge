import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Imagine from "@/components/Imagine";
import Testimonials from "@/components/Testimonials";
import Urgency from "@/components/Urgency";
import PriceStory from "@/components/PriceStory";
import Pricing from "@/components/Pricing";
import OrderForm from "@/components/OrderForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Header />
      <Hero />
      <Problem />
      <Benefits />
      <Imagine />
      <Testimonials />
      <Urgency />
      <PriceStory />
      <Pricing />
      <OrderForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}