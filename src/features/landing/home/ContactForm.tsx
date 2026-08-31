"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "@/lib/firebase";
import { ContactFormData, contactSchema } from "@/zod/contact.zod";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") || "general";
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
      intent: intent,
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
        intent: data.intent,
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name */}
      <AnimatedInput
        label="Name"
        name="name"
        type="text"
        register={register}
        errors={errors.name}
        placeholder="John Doe"
        required
      />

      {/* Email */}
      <AnimatedInput
        label="Email address"
        name="email"
        type="email"
        register={register}
        errors={errors.email}
        placeholder="john@example.com"
        required
      />

      {/* Message */}
      <div className="group">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-600"
        >
          Message
        </label>

        <motion.textarea
          id="message"
          {...register("message")}
          placeholder="Tell us how we can help..."
          rows={6}
          required
          whileFocus={{
            scale: 1.01,
          }}
          transition={{
            duration: 0.2,
          }}
          className="w-full resize-none rounded-md border border-secondary-200 bg-white/[0.04] px-4 py-4 text-sm text-black outline-none placeholder:text-slate-400 transition-colors duration-300 focus:border-secondary-800/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-secondary-800/10"
        />
        {errors.message && (
          <p className="mt-1.5 font-body text-[12px] font-medium text-primary-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Checkbox */}
      {/* Copy Me */}
      <motion.label
        whileFocus={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.2,
        }}
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
        type="submit"
        disabled={isSubmitting}
        whileHover={{
          scale: isSubmitting ? 1 : 1.02,
        }}
        whileTap={{
          scale: isSubmitting ? 1 : 0.98,
        }}
        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-primary-600 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />

        {isSubmitting ? (
          <>
            <Loader2 className="relative h-4 w-4 animate-spin" />
            <span className="relative">Sending...</span>
          </>
        ) : (
          <>
            <Send className="relative h-4 w-4" />
            <span className="relative">Send Message</span>

            <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </>
        )}
      </motion.button>
    </form>
  );
}

type AnimatedInputProps = {
  label: string;
  name: keyof ContactFormData;
  type: string;
  placeholder: string;
  required?: boolean;
  errors?: FieldError;
  register: UseFormRegister<ContactFormData>;
};

function AnimatedInput({
  label,
  name,
  type,
  placeholder,
  required,
  errors,
  register,
}: AnimatedInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-600"
      >
        {label}
      </label>

      <motion.input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        required={required}
        whileFocus={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.2,
        }}
        className="w-full rounded-md border border-secondary-200 bg-white/[0.04] px-4 py-4 text-sm text-black outline-none placeholder:text-slate-400 transition-colors duration-300 focus:border-secondary-800/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-secondary-800/10"
      />
      {errors && (
        <p className="mt-1.5 font-body text-[12px] font-medium text-primary-600">
          {errors.message}
        </p>
      )}
    </div>
  );
}
