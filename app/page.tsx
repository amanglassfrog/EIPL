"use client";

import { motion } from "framer-motion";
import { Factory, Leaf, Mail, MapPin, Phone, Tractor } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home as HomeIcon,
  Building2,
  Hammer,
  Wrench,
  Paintbrush,
  ClipboardList,
  LifeBuoy,
} from "lucide-react";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: HomeIcon,
    title: "Customized New Construction",
    desc: "From residential homes to large commercial facilities, our expert team delivers turnkey construction solutions with precision and attention to detail.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Revamp your space—from minor upgrades to full-scale transformations—with minimal disruption and maximum craftsmanship.",
  },
  {
    icon: Wrench,
    title: "MEP Solutions",
    desc: "We manage all mechanical, electrical, and plumbing systems to ensure safer, smarter, and energy-efficient buildings.",
  },
  {
    icon: ClipboardList,
    title: "Project Planning & Consultancy",
    desc: "Benefit from our extensive pre‑construction services: budgeting, permitting, site surveys, and design coordination for seamless project delivery.",
  },
  {
    icon: Paintbrush,
    title: "Interior Fit‑Out & Finishing",
    desc: "Our in‑house finishing specialists handle everything from flooring, painting, to bespoke joinery, ensuring spaces are both functional and beautiful.",
  },
  {
    icon: LifeBuoy,
    title: "Facility Maintenance & Support",
    desc: "Post-construction support you can count on—maintenance, defect reviews, repairs, and building handover management for long-term performance.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen mx-auto bg-background">
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://geniescareerhubbucket.lon1.cdn.digitaloceanspaces.com/eipl.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start"
        >
          <motion.div
            variants={fadeInUp}
            className="w-2 h-20 bg-primary mb-8"
          />
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight"
          >
            Building the Future of <br />
            <span className="font-normal text-white">
              Agribusiness Infrastructure
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light leading-relaxed"
          >
            EIPL Construction specializes in creating innovative infrastructure
            solutions for modern agriculture and farming operations.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-material-lg"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-light mb-6 text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-border/50 shadow-material hover:shadow-material-lg transition-all duration-300 bg-card">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-1 bg-primary mb-8" />
              <h2 className="text-5xl font-light mb-8 text-foreground">About EIPL</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                With over two decades of experience in agricultural
                infrastructure, EIPL Construction has been at the forefront of
                innovation in agribusiness construction.
              </p>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                We specialize in creating sustainable, efficient, and modern
                infrastructure solutions that help agricultural businesses
                thrive in the modern era.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Leaf, text: "Sustainable Solutions" },
                  { icon: Factory, text: "Modern Facilities" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border shadow-material"
                  >
                    <item.icon className="text-primary w-6 h-6" />
                    <span className="font-medium text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary rounded-2xl transform translate-x-4 translate-y-4" />
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
                alt="Agricultural Facility"
                className="relative z-10 rounded-2xl shadow-material-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-light mb-6 text-foreground">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: "/modern.avif", title: "Modern Grain Storage" },
              { image: "/smart.avif", title: "Smart Greenhouse" },
              { image: "/process.avif", title: "Processing Facility" },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-material hover:shadow-material-xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <h3 className="text-white text-2xl font-medium mb-2">
                      {project.title}
                    </h3>
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-primary"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Agricultural Facilities" },
              { number: "20+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2,
                  }}
                  className="text-6xl font-medium mb-4"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-1 bg-primary mb-8" />
              <h2 className="text-5xl font-light mb-8 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
                Ready to start your next agricultural infrastructure project?
                Contact us today for a consultation.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    text: "B402, Brindavan Apartments, Opposite American Hospital, Krishna Nagar, Maharanipeta, Visakhapatnam, Andhra Pradesh - 530 002 ",
                  },
                  { icon: Phone, text: "+91 8928422800" },
                  { icon: Mail, text: "ergoinfrabuilt@gmail.com" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 shadow-material"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-lg text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl shadow-material-lg border border-border p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-foreground-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-medium mb-6">EIPL Construction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building sustainable agricultural infrastructure for tomorrow.
              </p>
            </motion.div>
            {[
              {
                title: "Services",
                links: [
                  "Storage Facilities",
                  "Processing Plants",
                  "Smart Farms",
                  "Consultancy",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Projects", "Careers", "Contact"],
              },
              {
                title: "Connect",
                links: ["LinkedIn", "Twitter", "Instagram", "Facebook"],
              },
            ].map((column, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h4 className="text-xl font-medium mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-border mt-16 pt-8 text-center text-muted-foreground"
          >
            <p>&copy; 2024 EIPL Construction. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
