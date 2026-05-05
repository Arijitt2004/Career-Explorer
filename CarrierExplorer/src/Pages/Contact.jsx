// import React, { useState } from "react";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     const [success, setSuccess] = useState(false);

//     // Handle input change
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Submitted:", formData);
//         setSuccess(true);
//         setFormData({ name: "", email: "", message: "" }); // Clear form after submit
//     };

//     return (
//         <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 min-h-screen flex items-center justify-center p-6">
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//                 <h2 className="text-3xl font-bold text-purple-600 text-center">
//                     Contact Us 📩
//                 </h2>
//                 <p className="text-gray-700 text-center mt-2">
//                     Have questions? We'd love to hear from you.
//                 </p>

//                 {success && (
//                     <p className="mt-4 text-green-600 text-center font-semibold">
//                         ✅ Your message has been sent successfully!
//                     </p>
//                 )}

//                 <form className="mt-6" onSubmit={handleSubmit}>
//                     {/* Name Field */}
//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-semibold">Your Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-purple-300"
//                             placeholder="Enter your name"
//                         />
//                     </div>

//                     {/* Email Field */}
//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-semibold">Your Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-purple-300"
//                             placeholder="Enter your email"
//                         />
//                     </div>

//                     {/* Message Field */}
//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-semibold">Your Message</label>
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-purple-300"
//                             rows="4"
//                             placeholder="Write your message..."
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
//                     >
//                         Send Message 🚀
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Contact;


// more modern


// import React, { useState } from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import Header from "../Component/Header";

// const ContactPage = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     const [success, setSuccess] = useState(false);

//     // Handle input change
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSuccess(true);
//         setTimeout(() => setSuccess(false), 3000);
//         setFormData({ name: "", email: "", message: "" });
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center p-6">
//             <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row">


//                 {/* Contact Info Section */}
//                 <div className="md:w-1/2 p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg md:rounded-l-xl md:rounded-r-none flex flex-col justify-center">
//                     <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//                     <p className="text-lg mb-6">We’d love to hear from you! Reach out to us through the form or contact details below.</p>

//                     <div className="space-y-4">
//                         <p className="flex items-center">
//                             <FaPhone className="mr-3 text-xl" /> +1 234 567 890
//                         </p>
//                         <p className="flex items-center">
//                             <FaEnvelope className="mr-3 text-xl" /> support@example.com
//                         </p>
//                         <p className="flex items-center">
//                             <FaMapMarkerAlt className="mr-3 text-xl" /> 123 Street, City, Country
//                         </p>
//                     </div>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="md:w-1/2 p-6">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>

//                     {success && (
//                         <p className="text-green-500 font-medium text-center mb-4">✅ Message sent successfully!</p>
//                     )}

//                     <form className="space-y-4" onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
//                             placeholder="Your Name"
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
//                             placeholder="Your Email"
//                         />
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
//                             rows="4"
//                             placeholder="Your Message"
//                         ></textarea>

//                         <button
//                             type="submit"
//                             className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-all"
//                         >
//                             Send Message 🚀
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactPage;



import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Header from "../Component/Header";
import { motion } from "framer-motion";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-700 via-black to-gray-700 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row gap-8"
            >
                {/* Contact Info Section */}
                <div className="md:w-1/2 p-8 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-10"></div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                            Let's Connect
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Have a question or want to collaborate? We're here to help and excited to hear from you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                <div className="p-3 bg-white/20 rounded-lg">
                                    <FaPhone className="text-2xl" />
                                </div>
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p className="opacity-90">7704986795</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                <div className="p-3 bg-white/20 rounded-lg">
                                    <FaEnvelope className="text-2xl" />
                                </div>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="opacity-90">sojha3022@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                <div className="p-3 bg-white/20 rounded-lg">
                                    <FaMapMarkerAlt className="text-2xl" />
                                </div>
                                <div>
                                    <p className="font-semibold">Office</p>
                                    <p className="opacity-90">Lovely Professional University</p>
                                    <p className="opacity-90">BH-4</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Send Your Message
                            <span className="block w-12 h-1.5 bg-purple-600 mt-2 rounded-full"></span>
                        </h2>

                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaPaperPlane className="text-green-600" />
                                </div>
                                <p className="text-green-700 font-medium">Message sent successfully!</p>
                            </motion.div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 peer"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 top-3 px-1 bg-white transition-all duration-200 
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-sm
                                    text-gray-600 text-sm -top-2">
                                    Your Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 peer"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 top-3 px-1 bg-white transition-all duration-200 
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-sm
                                    text-gray-600 text-sm -top-2">
                                    Email Address
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 peer resize-none"
                                    rows="4"
                                    placeholder=" "
                                ></textarea>
                                <label className="absolute left-4 top-3 px-1 bg-white transition-all duration-200 
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-sm
                                    text-gray-600 text-sm -top-2">
                                    Your Message
                                </label>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
                                    py-4 rounded-xl font-bold flex items-center justify-center gap-2
                                    hover:shadow-lg transition-all"
                            >
                                <FaPaperPlane className="text-lg" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;