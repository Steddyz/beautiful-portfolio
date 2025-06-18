import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {}, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Do you have a project idea or would like to partner up? Don’t hesitate
          to get in touch. I'm always eager to explore new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded bg-primary/10">
                  <Mail className="text-primary h-6 w-6 " />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:qwesteddyoff@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    qwesteddyoff@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded bg-primary/10">
                  <Phone className="text-primary h-6 w-6 " />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded bg-primary/10">
                  <MapPin className="text-primary h-6 w-6 " />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Russian Federation
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <Linkedin />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <X />
                </a>
                <a href="#">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ivan Ivanov..."
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
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
                  id="email"
                  type="email"
                  name="email"
                  placeholder="qwerty@gmail.com"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
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
                  placeholder="Hello, I'd like to talk about..."
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
