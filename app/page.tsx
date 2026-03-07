'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

import { GiCash } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const beneficiosRef = useRef(null);
  const planesRef = useRef(null);
  const galeriaRef = useRef(null);
  const testimonialesRef = useRef(null);
  const comoFuncionaRef = useRef(null);  
  const promocionesRef = useRef(null);
  const promocionesInView = useInView(promocionesRef, { once: true, amount: 0.2 });

  const beneficiosInView = useInView(beneficiosRef, { once: true, amount: 0.2 });
  const planesInView = useInView(planesRef, { once: true, amount: 0.1 });
  const galeriaInView = useInView(galeriaRef, { once: true, amount: 0.1 });
  const testimonialesInView = useInView(testimonialesRef, { once: true, amount: 0.1 });
  const comoFuncionaInView = useInView(comoFuncionaRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <motion.header
        className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo-navbar.png"
                alt="Saudavel Logo"
                width={50}
                height={50}
                className="w-30 h-20 object-contain"
                priority
              />
              {/* <span className="text-2xl font-bold text-green-600">Saudavel</span> */}
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a href="#planes" className="text-gray-700 hover:text-green-600 transition">Planes</a>
              <a href="#beneficios" className="text-gray-700 hover:text-green-600 transition">Beneficios</a>
              <a href="#galeria" className="text-gray-700 hover:text-green-600 transition">Galería</a>
              <a href="#testimoniales" className="text-gray-700 hover:text-green-600 transition">Testimoniales</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-green-600 transition">Cómo Funciona</a>
              <a href="#contacto" className="text-gray-700 hover:text-green-600 transition">Contacto</a>
            </motion.div>

            {/* Desktop CTA Button */}
            <motion.a
              href="#contacto"
              className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-700 hover:text-green-600 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 pb-4 space-y-2 bg-white border-t border-gray-100">
            {[
              { name: 'Planes', href: '#planes' },
              { name: 'Beneficios', href: '#beneficios' },
              { name: 'Galería', href: '#galeria' },
              { name: 'Testimoniales', href: '#testimoniales' },
              { name: 'Cómo Funciona', href: '#como-funciona' },
              { name: 'Contacto', href: '#contacto' },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={mobileMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-full hover:bg-green-700 transition mt-4"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ y: 20, opacity: 0 }}
              animate={mobileMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar
            </motion.a>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Tu Estilo de Vida
              <span className="block text-green-600">Saludable Comienza Aquí</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              Planes nutricionales personalizados entregados directamente a tu puerta.
              Comida deliciosa, balanceada y lista para disfrutar.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <motion.a
                href="#planes"
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Planes
              </motion.a>
              <motion.a
                href="https://www.instagram.com/saudavel.estilodevida/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition border-2 border-green-600"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Síguenos en Instagram
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" ref={beneficiosRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            animate={beneficiosInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Por Qué Elegir Saudavel?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={beneficiosInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Nutrición Balanceada</h3>
              <p className="text-gray-600">Cada comida está diseñada por nutricionistas profesionales para garantizar el balance perfecto de macronutrientes.</p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={beneficiosInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ahorra Tiempo</h3>
              <p className="text-gray-600">Olvídate de cocinar y planificar menús. Nosotros nos encargamos de todo para que disfrutes más tiempo libre.</p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={beneficiosInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Entrega a Domicilio</h3>
              <p className="text-gray-600">Recibe tus comidas al momento directamente en tu puerta de la casa y oficina.</p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={beneficiosInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaClipboardCheck className='text-orange-600 h-6 w-6' />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Consulta nutricional Gratis</h3>
              <p className="text-gray-600">Cumple tu objetivo con un monitoreo constante y personaliza tus alimentos según lo que estés buscando.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planes Nutricionales */}
      <section id="planes" ref={planesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            animate={planesInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Planes
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={planesInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elige el plan que mejor se adapte a tus objetivos y estilo de vida
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1: Comida */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={planesInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Comida</h3>
                <p className="text-gray-600 mb-2">Tu almuerzo del día cubierto</p>
                <p className="text-3xl font-bold text-green-600">$670.00<span className="text-base font-normal text-gray-500">/mes</span></p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Comida</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Colaciones</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Agua</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Servicio a domicilio</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Asesoría nutricional presencial</span>
                </li>
              </ul>
              <a href="https://wa.me/5216692684633?text=Hola%2C%20me%20interesa%20el%20Plan%20Comida%20(%24670.00).%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Solicitar Información
              </a>
            </motion.div>

            {/* Plan 2: Desayuno + Comida */}
            <motion.div
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-xl p-8 transform scale-105 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={planesInView ? { scale: 1.05, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.1, y: -10 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Plan Desayuno + Comida</h3>
                <p className="text-green-100 mb-2">Dos momentos del día cubiertos</p>
                <p className="text-3xl font-bold text-white">$985.00<span className="text-base font-normal text-green-200">/mes</span></p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Desayuno</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Comida</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Colaciones</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Agua</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Servicio a domicilio</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Asesoría nutricional presencial</span>
                </li>
              </ul>
              <a href="https://wa.me/5216692684633?text=Hola%2C%20me%20interesa%20el%20Plan%20Desayuno%20%2B%20Comida%20(%24985.00).%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-green-600 text-center px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Solicitar Información
              </a>
            </motion.div>

            {/* Plan 3: Desayuno + Comida + Cena */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={planesInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Completo</h3>
                <p className="text-gray-600 mb-2">Desayuno + Comida + Cena</p>
                <p className="text-3xl font-bold text-green-600">$1,385.00<span className="text-base font-normal text-gray-500">/mes</span></p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Desayuno</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Comida</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cena</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Colaciones</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Agua</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Servicio a domicilio</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Asesoría nutricional presencial</span>
                </li>
              </ul>
              <a href="https://wa.me/5216692684633?text=Hola%2C%20me%20interesa%20el%20Plan%20Completo%20-%20Desayuno%20%2B%20Comida%20%2B%20Cena%20(%241%2C385.00).%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Solicitar Información
              </a>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-gray-600 mt-12 max-w-3xl mx-auto text-base italic"
            initial={{ y: 20, opacity: 0 }}
            animate={planesInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Nuestros planes están para pérdida de peso, grasa y mantener una buena salud, y si estás buscando para masa muscular se pueden adaptar. Planes de lunes a viernes, con opción a incluir sábados con costo extra.
          </motion.p>
        </div>
      </section>

      {/* Sección de Promociones */}
      <section id="promociones" ref={promocionesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={promocionesInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Promociones Especiales</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pago en Efectivo",
                desc: "5% de descuento pagando la semana previa o lunes al recibir.",
                icon: <GiCash className='text-amber-300' />,
                color: "bg-green-50",
                border: "border-green-100"
              },
              {
                title: "Plan Mensual",
                desc: "10% de descuento pagando el equivalente a 4 semanas de servicio.",
                icon: <FaCalendarCheck className='text-green-500/60' />,
                color: "bg-orange-50",
                border: "border-orange-100"
              },
              {
                title: "Tercia Saludable",
                desc: "10% de descuento en grupos a partir de 3 personas.",
                icon: <FaPeopleGroup className='text-amber-300' />,
                color: "bg-green-50",
                border: "border-green-100"
              },
              {
                title: "Grupo Premium",
                desc: "15% de descuento en grupos de 4 personas o más.",
                icon: <MdOutlineWorkspacePremium className='text-green-500/60' />,
                color: "bg-orange-50",
                border: "border-orange-100"
              }
            ].map((promo, index) => (
              <motion.div
                key={index}
                className={`${promo.color} ${promo.border} border rounded-2xl p-6 flex flex-col items-center text-center`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={promocionesInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <span className="text-4xl mb-4">{promo.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{promo.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer de la sección */}
          <motion.div 
            className="mt-12 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center"
            initial={{ opacity: 0 }}
            animate={promocionesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-500 text-sm mb-4">* Aplican restricciones</p>
            <h4 className="text-lg font-semibold text-green-700 mb-4">
              🚨 ¿Te interesa alguna? ¡No te quedes con la duda!
            </h4>
            <motion.a
              href="https://wa.me/5216692684633?text=Hola%2C%20me%20interesa%20la%20promoción%20..."
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Preguntar por una Promo
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Galería de Platillos */}
      <section id="galeria" ref={galeriaRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            animate={galeriaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Algunos de nuestros platillos son los siguientes
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={galeriaInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comida deliciosa, saludable y preparada con ingredientes frescos de la más alta calidad
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ensalada Fresca', description: 'Rica en proteínas y fibra', image: '/platillos/ensalada.webp' },
              { name: 'Marlín a la Parrilla', description: 'Alto en Omega-3 y proteínas', image: '/platillos/marlin.webp' },
              { name: 'Pollo Saludable', description: 'Bajo en grasa, alto en sabor', image: '/platillos/pollo.webp' },
              { name: 'Carne Asada Premium', description: 'Proteína de alta calidad', image: '/platillos/carne-asada.webp' },
              { name: 'Carne con Verduras', description: 'Balance perfecto de nutrientes', image: '/platillos/carne-verduras.webp' },
              { name: 'Pescado Fresco', description: 'Omega-3 y sabor excepcional', image: '/platillos/pescado.webp' },
            ].map((platillo, index) => (
              <motion.div
                key={platillo.name}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={galeriaInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={platillo.image}
                    alt={platillo.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{platillo.name}</h3>
                  <p className="text-green-200 text-sm">{platillo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoniales */}
      <section id="testimoniales" ref={testimonialesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            animate={testimonialesInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Lo Que Dicen Nuestros Clientes
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={testimonialesInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Miles de personas han transformado su estilo de vida con Saudavel
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'María González',
                text: 'Saudavel cambió completamente mi rutina. Ahora como saludable sin tener que cocinar. ¡He perdido 10kg en 3 meses!',
                rating: 5,
              },
              {
                name: 'Carlos Ramírez',
                text: 'Como deportista, necesitaba una alimentación balanceada. El plan fitness es perfecto para mis entrenamientos.',
                rating: 5,
              },
              {
                name: 'Ana Martínez',
                text: 'La comida es deliciosa y llega siempre fresca. El servicio al cliente es excelente. Totalmente recomendado.',
                rating: 5,
              },
            ].map((testimonio, index) => (
              <motion.div
                key={testimonio.name}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
                initial={{ y: 50, opacity: 0 }}
                animate={testimonialesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={testimonialesInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonio.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonio.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonio.name}</h4>
                    <p className="text-sm text-gray-500">Cliente Saudavel</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" ref={comoFuncionaRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            animate={comoFuncionaInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cómo Funciona
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={comoFuncionaInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
              >
                1
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Contactanos</h3>
              <p className="text-gray-600">Para darte información personalizada acerca de los planes que manejamos</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={comoFuncionaInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
              >
                2
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Elige el plan</h3>
              <p className="text-gray-600">El que mejor se adapte a tus necesidades</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={comoFuncionaInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
              >
                3
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Agenda tu cita nutricional</h3>
              <p className="text-gray-600">Puedes iniciar sin consulta, sin embargo, nosotros te sugerimos una cita previa para mejor valoración</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={comoFuncionaInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
              >
                4
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Recibe tus alimentos</h3>
              <p className="text-gray-600">Recibe tus comidas en tu puerta y disfruta de una alimentación saludable</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto/CTA */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Únete a cientos de personas que ya han mejorado su estilo de vida con Saudavel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://www.instagram.com/saudavel.estilodevida/" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Contáctanos en Instagram
            </a>
            <a href="https://wa.me/5216692684633?text=Hola%2C%20me%20interesa%20un%20Plan" className="bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-900 transition shadow-lg inline-flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
          <p className="text-green-100 text-sm">
            También puedes escribirnos directamente a nuestras redes sociales
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-500">Saudavel</h3>
              <p className="text-gray-400">
                Transformando vidas a través de la nutrición saludable y conveniente.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#planes" className="text-gray-400 hover:text-green-500 transition">Planes</a></li>
                <li><a href="#beneficios" className="text-gray-400 hover:text-green-500 transition">Beneficios</a></li>
                <li><a href="#galeria" className="text-gray-400 hover:text-green-500 transition">Galería</a></li>
                <li><a href="#testimoniales" className="text-gray-400 hover:text-green-500 transition">Testimoniales</a></li>
                <li><a href="#como-funciona" className="text-gray-400 hover:text-green-500 transition">Cómo Funciona</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-green-500 transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/saudavel.estilodevida/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Saudavel. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
