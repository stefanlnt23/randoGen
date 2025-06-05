import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 48 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
          Contact Us
        </h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Have questions, feedback, or need support? We'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 animate-slide-up">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-envelope text-blue-400 mr-3"></i>
              Email Support
            </h3>
            <p className="text-purple-200 mb-2">support@randogen.com</p>
            <p className="text-purple-300 text-sm">Response time: Within 48 hours</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-bug text-red-400 mr-3"></i>
              Bug Reports
            </h3>
            <p className="text-purple-200 mb-2">bugs@randogen.com</p>
            <p className="text-purple-300 text-sm">Help us improve by reporting issues</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-lightbulb text-yellow-400 mr-3"></i>
              Feature Requests
            </h3>
            <p className="text-purple-200 mb-2">features@randogen.com</p>
            <p className="text-purple-300 text-sm">Suggest new features and improvements</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-clock text-green-400 mr-3"></i>
              Response Times
            </h3>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li>• General inquiries: 24-48 hours</li>
              <li>• Bug reports: 12-24 hours</li>
              <li>• Feature requests: 48-72 hours</li>
              <li>• Privacy concerns: Within 24 hours</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <i className="fas fa-paper-plane text-purple-400 mr-3"></i>
              Send us a Message
            </h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-200">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="bg-white/10 border-white/20 text-white placeholder-purple-300 focus:ring-purple-500 focus:border-purple-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-200">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            type="email"
                            className="bg-white/10 border-white/20 text-white placeholder-purple-300 focus:ring-purple-500 focus:border-purple-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-purple-200">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          className="bg-white/10 border-white/20 text-white placeholder-purple-300 focus:ring-purple-500 focus:border-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-purple-200">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="bg-white/10 border-white/20 text-white placeholder-purple-300 focus:ring-purple-500 focus:border-purple-500 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-button text-lg py-6"
                >
                  <div className="flex items-center space-x-3">
                    <i className={`fas ${isSubmitting ? 'fa-spinner animate-spin' : 'fa-paper-plane'}`}></i>
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </div>
                </Button>
              </form>
            </Form>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 glass-card p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <i className="fas fa-question-circle text-teal-400 mr-3"></i>
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-purple-300 mb-2">
                  How quickly do you respond to support requests?
                </h4>
                <p className="text-purple-200 text-sm">
                  We aim to respond to all inquiries within 48 hours. Bug reports and urgent 
                  issues typically receive responses within 24 hours.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-purple-300 mb-2">
                  Can I suggest new features for RandoGen?
                </h4>
                <p className="text-purple-200 text-sm">
                  Absolutely! We love hearing from our users. Send your feature requests to 
                  features@randogen.com or use the contact form above.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-purple-300 mb-2">
                  Do you offer API access for developers?
                </h4>
                <p className="text-purple-200 text-sm">
                  API access is coming soon! Contact us to be notified when it becomes available 
                  and to discuss your specific use case.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-purple-300 mb-2">
                  Is RandoGen really free to use?
                </h4>
                <p className="text-purple-200 text-sm">
                  Yes! RandoGen is completely free to use with no registration required. We're 
                  supported by non-intrusive advertisements to keep the service free for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
