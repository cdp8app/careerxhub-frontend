"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Search, Users, ArrowRight, Building, GraduationCap } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { LoadingSpinner } from "@/app/components/ui/loading-spinner"
import { cn } from "@/app/lib/utils"
import CountUp from "@/app/components/count-up"
import Logo from "@/app/components/Logo"

export default function Home() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [loadingButton, setLoadingButton] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-primary-dark font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-700 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-700 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                className="text-primary font-medium"
                disabled={loadingButton === 'header-login'}
                onClick={() => {
                  setLoadingButton('header-login')
                  router.push('/auth/login')
                }}
              >
                {loadingButton === 'header-login' ? (
                  <LoadingSpinner size="sm" className="mr-2" />
                ) : null}
                Login
              </Button>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                disabled={loadingButton === 'header-register'}
                onClick={() => {
                  setLoadingButton('header-register')
                  router.push('/onboarding/role-selection')
                }}
              >
                {loadingButton === 'header-register' ? (
                  <LoadingSpinner size="sm" className="mr-2" />
                ) : null}
                Register
              </Button>
            </div>
          </div>

          <button className="lg:hidden text-primary-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-28">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-lightest rounded-bl-[100px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-lightest rounded-tr-[100px] opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-xl">
                <motion.div variants={fadeIn}>
                  <span className="inline-block px-4 py-1 rounded-full bg-primary-lightest text-primary font-medium text-sm mb-6">
                    Connecting talent with opportunity
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-6"
                >
                  Launch your career with the right internships
                </motion.h1>

                <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-8">
                  Find top internships that match your skills and aspirations. Connect with companies that value your
                  talent.
                </motion.p>

                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto"
                    disabled={loadingButton === 'find-internships'}
                    onClick={() => {
                      setLoadingButton('find-internships')
                      router.push('/auth/register')
                    }}
                  >
                    {loadingButton === 'find-internships' ? (
                      <LoadingSpinner size="sm" className="mr-2" />
                    ) : (
                      <Search className="mr-2 h-5 w-5" />
                    )}
                    Find internships
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary-lightest rounded-full px-8 py-6 h-auto"
                    disabled={loadingButton === 'hire-interns'}
                    onClick={() => {
                      setLoadingButton('hire-interns')
                      router.push('/auth/register')
                    }}
                  >
                    {loadingButton === 'hire-interns' ? (
                      <LoadingSpinner size="sm" className="mr-2" />
                    ) : (
                      <Users className="mr-2 h-5 w-5" />
                    )}
                    Hire interns
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/diverse-students-collaboration.png"
                    alt="Students collaborating"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-2xl z-0"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-lightest rounded-full z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="bg-gradient-to-r from-primary-lightest to-cream py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-primary-dark font-medium">In partnership with:</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-sm font-bold">UC</span>
                </div>
                <span className="text-primary-dark font-medium">University of Calabar, Calabar.</span>
              </div>
            </div>
          </div>
        </section>

        {/* What is CareerXHub Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 relative inline-block">
                  What is CareerXHub?
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  CareerXHub is a platform that connects students with internship opportunities that match their skills and career aspirations. We help students launch their careers by providing access to quality internships, while helping companies find talented interns.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-gradient-to-br from-primary-lightest via-cream to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">How it works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A quick guide to how our platform works for both interns and companies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              {/* Center line with icon for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* For Students */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary-lightest flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark">For Students:</h3>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary-lightest flex items-center justify-center mt-1 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-primary group-hover:text-white transition-colors duration-300 font-bold">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Create your account</h4>
                      <p className="text-gray-600">Create and setup a new account or login to your existing account</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary-lightest flex items-center justify-center mt-1 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-primary group-hover:text-white transition-colors duration-300 font-bold">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Search and apply</h4>
                      <p className="text-gray-600">
                        Search and apply for your dream internship opportunity from a wide range of options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary-lightest flex items-center justify-center mt-1 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-primary group-hover:text-white transition-colors duration-300 font-bold">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Begin your journey</h4>
                      <p className="text-gray-600">Ace your interview and begin your internship journey!</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* For Companies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary-lightest flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark">For Companies:</h3>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary-lightest flex items-center justify-center mt-1 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-primary group-hover:text-white transition-colors duration-300 font-bold">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Create your account</h4>
                      <p className="text-gray-600">Create and setup a new account or login to your existing account</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary-lightest flex items-center justify-center mt-1 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-primary group-hover:text-white transition-colors duration-300 font-bold">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Post opportunities</h4>
                      <p className="text-gray-600">Post internship opportunities for talented students</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary-lightest flex items-center justify-center mt-1 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-primary group-hover:text-white transition-colors duration-300 font-bold">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Find the perfect match</h4>
                      <p className="text-gray-600">Interview and hire the best fit for your organization!</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
                  <h3 className="text-5xl font-bold mb-2">
                    <CountUp end={1500} suffix="+" />
                  </h3>
                  <p className="text-lg text-white/80">active students on our platform</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
                  <h3 className="text-5xl font-bold mb-2">
                    <CountUp end={1000} suffix="+" />
                  </h3>
                  <p className="text-lg text-white/80">Job postings and internship opportunities</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
                  <h3 className="text-5xl font-bold mb-2">
                    <CountUp end={500} suffix="+" />
                  </h3>
                  <p className="text-lg text-white/80">Verified companies & organisations</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-12 text-center text-white shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of students and companies already using CareerXHub to connect talent with opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-dark hover:bg-white/90 rounded-full px-8"
                  disabled={loadingButton === 'join-student'}
                  onClick={() => {
                    setLoadingButton('join-student')
                    router.push('/auth/register?role=student')
                  }}
                >
                  {loadingButton === 'join-student' ? (
                    <LoadingSpinner size="sm" className="mr-2" />
                  ) : (
                    <GraduationCap className="mr-2 h-5 w-5" />
                  )}
                  Join as Student
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                  disabled={loadingButton === 'join-company'}
                  onClick={() => {
                    setLoadingButton('join-company')
                    router.push('/auth/register?role=organization')
                  }}
                >
                  {loadingButton === 'join-company' ? (
                    <LoadingSpinner size="sm" className="mr-2" />
                  ) : (
                    <Building className="mr-2 h-5 w-5" />
                  )}
                  Join as Company
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Logo />
              <p className="text-white/80 mb-6">
                CareerXHub bridges the gap between students searching for internship opportunities and companies looking
                for talent, creating a platform where they can find the right match.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Legal & Policies
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Contact
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <p className="text-white/80 mb-2">Support Email:</p>
              <p className="text-white mb-6">contact@careerxhub.com</p>

              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Community
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <p className="text-white/80 mb-4">Join the Conversation</p>
              <div className="flex space-x-3">
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/80 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>Copyright © {new Date().getFullYear()} CareerXHub | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}