"use client";

import { motion } from "motion/react";
import { toast } from "sonner";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { db } from "@/lib/firebase";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be less than 100 characters."),

  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message must be less than 2000 characters."),

  copyMe: z.boolean(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
      copyMe: true,
    },

    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await addDoc(collection(db, "messages"), {
        name: data.name,
        email: data.email,
        message: data.message,
        copyMe: data.copyMe,
        read: false,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent — we'll be in touch soon.");

      reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        staggerChildren: 0.1,
      }}
      noValidate
    >
      {/* Heading */}
      <motion.h3
        variants={fieldVariants}
        className="font-heading text-[22px] font-bold text-secondary-900"
      >
        Send us a message
      </motion.h3>

      <motion.p
        variants={fieldVariants}
        className="mt-1.5 font-body text-[13.5px] text-muted-foreground"
      >
        We usually respond within one business day.
      </motion.p>

      {/* Name */}
      <motion.div variants={fieldVariants} className="relative mt-7">
        <input
          id="contact-name"
          type="text"
          placeholder=" "
          {...register("name")}
          className={`peer block w-full rounded-lg border-2 bg-transparent px-3.5 py-3 font-body text-[14.5px] text-secondary-900 outline-none transition-colors duration-150 ${
            errors.name
              ? "border-primary-500"
              : "border-border focus:border-secondary-600"
          }`}
        />

        <label
          htmlFor="contact-name"
          className="pointer-events-none absolute left-3.5 top-3 origin-[0_0] font-body text-[14.5px] text-muted-foreground transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:scale-[0.82] peer-focus:bg-white peer-focus:px-1 peer-focus:text-secondary-600 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:scale-[0.82] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
        >
          Name
        </label>

        {errors.name && (
          <p className="mt-1.5 font-body text-[12px] font-medium text-primary-600">
            {errors.name.message}
          </p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div variants={fieldVariants} className="relative mt-6">
        <input
          id="contact-email"
          type="email"
          placeholder=" "
          {...register("email")}
          className={`peer block w-full rounded-lg border-2 bg-transparent px-3.5 py-3 font-body text-[14.5px] text-secondary-900 outline-none transition-colors duration-150 ${
            errors.email
              ? "border-primary-500"
              : "border-border focus:border-secondary-600"
          }`}
        />

        <label
          htmlFor="contact-email"
          className="pointer-events-none absolute left-3.5 top-3 origin-[0_0] font-body text-[14.5px] text-muted-foreground transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:scale-[0.82] peer-focus:bg-white peer-focus:px-1 peer-focus:text-secondary-600 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:scale-[0.82] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
        >
          Email address
        </label>

        {errors.email && (
          <p className="mt-1.5 font-body text-[12px] font-medium text-primary-600">
            {errors.email.message}
          </p>
        )}
      </motion.div>

      {/* Message */}
      <motion.div variants={fieldVariants} className="relative mt-6">
        <textarea
          id="contact-message"
          rows={4}
          placeholder=" "
          {...register("message")}
          className={`peer block w-full resize-none rounded-lg border-2 bg-transparent px-3.5 py-3 font-body text-[14.5px] text-secondary-900 outline-none transition-colors duration-150 ${
            errors.message
              ? "border-primary-500"
              : "border-border focus:border-secondary-600"
          }`}
        />

        <label
          htmlFor="contact-message"
          className="pointer-events-none absolute left-3.5 top-3 origin-[0_0] font-body text-[14.5px] text-muted-foreground transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:scale-[0.82] peer-focus:bg-white peer-focus:px-1 peer-focus:text-secondary-600 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:scale-[0.82] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
        >
          Message
        </label>

        {errors.message && (
          <p className="mt-1.5 font-body text-[12px] font-medium text-primary-600">
            {errors.message.message}
          </p>
        )}
      </motion.div>

      {/* Copy Me */}
      <motion.label
        variants={fieldVariants}
        className="mt-5 flex cursor-pointer items-center gap-2.5 font-body text-[13.5px] text-secondary-700"
      >
        <input
          type="checkbox"
          {...register("copyMe")}
          className="h-4 w-4 rounded border-2 border-border text-primary-600 accent-primary-600"
        />
        Send me a copy of this message
      </motion.label>

      {/* Submit */}
      <motion.button
        variants={fieldVariants}
        type="submit"
        disabled={isSubmitting}
        whileHover={{
          scale: isSubmitting ? 1 : 1.02,
        }}
        whileTap={{
          scale: isSubmitting ? 1 : 0.98,
        }}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-3.5 font-body text-[14.5px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(200,32,45,0.5)] transition-colors duration-150 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
