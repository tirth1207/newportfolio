"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-2xl rounded-3xl shadow-2xl ${
              darkMode 
                ? "bg-[#151515] border border-[#3B3A3A]" 
                : "bg-white border border-gray-200"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-[#3B3A3A]">
              <div>
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
                  Get in Touch
                </h2>
                <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Let's discuss your next project
                </p>
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#3B3A3A] transition-colors ${
                  darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-b border-gray-200 dark:border-[#3B3A3A]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${darkMode ? "bg-[#3B3A3A]" : "bg-gray-100"}`}>
                    <Mail size={20} className={darkMode ? "text-white" : "text-gray-600"} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Email</p>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>tirth@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${darkMode ? "bg-[#3B3A3A]" : "bg-gray-100"}`}>
                    <Phone size={20} className={darkMode ? "text-white" : "text-gray-600"} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Phone</p>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${darkMode ? "bg-[#3B3A3A]" : "bg-gray-100"}`}>
                    <MapPin size={20} className={darkMode ? "text-white" : "text-gray-600"} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>Location</p>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-white" : "text-black"}`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      darkMode 
                        ? "bg-[#1a1a1a] border-[#3B3A3A] text-white placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]" 
                        : "bg-gray-50 border-gray-200 text-black placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-white" : "text-black"}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      darkMode 
                        ? "bg-[#1a1a1a] border-[#3B3A3A] text-white placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]" 
                        : "bg-gray-50 border-gray-200 text-black placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-white" : "text-black"}`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    darkMode 
                      ? "bg-[#1a1a1a] border-[#3B3A3A] text-white placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]" 
                      : "bg-gray-50 border-gray-200 text-black placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]"
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-white" : "text-black"}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                    darkMode 
                      ? "bg-[#1a1a1a] border-[#3B3A3A] text-white placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]" 
                      : "bg-gray-50 border-gray-200 text-black placeholder-gray-500 focus:border-[#fe7500] focus:ring-1 focus:ring-[#fe7500]"
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div className="flex items-center justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className={`px-6 py-3 rounded-xl border transition-colors ${
                    darkMode 
                      ? "border-[#3B3A3A] text-gray-400 hover:bg-[#3B3A3A] hover:text-white" 
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#fe7500] text-white rounded-xl hover:bg-[#e66800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 