// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Twitch,
//   Twitter,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

// export const ContactSection = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };
//   return (
//     <section id="contact" className="py-12 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary"> Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               {" "}
//               Contact Information
//             </h3>

//             {/* <div className="space-y-6 justify-center">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Email</h4>
//                   <a
//                     href="mailto:manthukalyan321@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     manthukalyan321@gmail.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Phone</h4>
//                   <a
//                     href="tel:+917396118343"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +9173961 18343
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Location</h4>
//                   <a className="text-muted-foreground hover:text-primary transition-colors">
//                   Bangalore, Electronic City (Phase-2 ), India
//                   </a>
//                 </div>
//               </div>
//             </div> */}

// <div className="space-y-6 justify-start">
//   <div className="flex items-start space-x-4">  {/* Changed from items-center to items-start */}
//     <div className="p-3 rounded-full bg-primary/10">
//       <Mail className="h-6 w-6 text-primary" />
//     </div>
//     <div className="flex flex-col">
//       <h4 className="font-medium text-left">Email</h4>  {/* Added text-left */}
//       <a
//         href="mailto:manthukalyan321@gmail.com"
//         className="text-muted-foreground hover:text-primary transition-colors"
//       >
//         manthukalyan321@gmail.com
//       </a>
//     </div>
//   </div>
  
//   <div className="flex items-start space-x-4"> 
//     <div className="p-3 rounded-full bg-primary/10">
//       <Phone className="h-6 w-6 text-primary" />
//     </div>
//     <div className="flex flex-col">
//       <h4 className="font-medium text-left">Phone</h4> 
//       <a
//         href="tel:+917396118343"
//         className="text-muted-foreground hover:text-primary transition-colors"
//       >
//         +9173961 18343
//       </a>
//     </div>
//   </div>
  
//   <div className="flex items-start space-x-4"> 
//     <div className="p-3 rounded-full bg-primary/10">
//       <MapPin className="h-6 w-6 text-primary" />
//     </div>
//     <div className="flex flex-col">
//       <h4 className="font-medium text-left">Location</h4>
//       <a className="text-muted-foreground hover:text-primary transition-colors">
//         Bangalore, Electronic City (Phase-2 ), India
//       </a>
//     </div>
//   </div>
// </div>




//             <div className="pt-8">
//               <h4 className="font-medium mb-4"> Connect With Me</h4>
//               <div className="flex space-x-4 justify-center">
//                 <a href="http://www.linkedin.com/in/kalyani-hanumanthu-558583199" target="_blank">
//                   <Linkedin />
//                 </a>
//                 <a href="https://www.instagram.com/manthu_8343_?igsh=MWZ1a3U0Z2g4bXk4YQ==&utm_source=ig_contact_invite" target="_blank">
//                   <Instagram />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div
//             className="bg-card p-8 rounded-lg shadow-xs"
//             onSubmit={handleSubmit}
//           >
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="Hanumanthu..."
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="kalyan@gmail.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData from the form
      const formData = new FormData(e.target);
      
      // Add your Web3Forms access key
      formData.append("access_key", "8a0484d6-d2d7-4c7a-bcb2-533e4746a6c5");

      // Convert FormData to object and then to JSON
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      // Submit to Web3Forms API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        // Success - show success toast
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset the form
        e.target.reset();
      } else {
        // Error from Web3Forms
        throw new Error(res.message || "Failed to send message");
      }
    } catch (error) {
      // Handle any errors
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-start">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:manthukalyan321@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    manthukalyan321@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4"> 
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-left">Phone</h4> 
                  <a
                    href="tel:+917396118343"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +9173961 18343
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4"> 
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-left">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bangalore, Electronic City (Phase-2 ), India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="http://www.linkedin.com/in/kalyani-hanumanthu-558583199" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/manthu_8343_?igsh=MWZ1a3U0Z2g4bXk4YQ==&utm_source=ig_contact_invite" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Hanumanthu..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="kalyan@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
