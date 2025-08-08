"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const formFields = [
  { name: "name", label: "Name", placeholder: "Suresh Kumar", type: "text" },
  { name: "email", label: "Email", placeholder: "suresh@example.com", type: "email" },
  { name: "phone", label: "Phone", placeholder: "+91 9876543210", type: "tel" },
  { name: "company", label: "Company", placeholder: "Your Company", type: "text" },
  { name: "message", label: "Message", placeholder: "Tell us about your project", type: "textarea" }
];

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {formFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <FormField
              control={form.control}
              name={field.name as keyof z.infer<typeof formSchema>}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">{field.label}</FormLabel>
                  <FormControl>
                    {field.type === "textarea" ? (
                      <Textarea
                        placeholder={field.placeholder}
                        className="min-h-[120px] resize-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        {...formField}
                      />
                    ) : (
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="focus:ring-2 focus:ring-primary transition-all duration-300"
                        {...formField}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-material"
          >
            Enquire/Message
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}