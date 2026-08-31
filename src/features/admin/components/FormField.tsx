"use client";

import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  hint?: string;
};

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export default function FormField(props: InputProps | TextareaProps) {
  const { label, hint, ...rest } = props;

  return (
    <div>
      <label className="mb-1.5 block font-body text-[13px] font-medium text-secondary-700">
        {label}
      </label>
      {props.as === "textarea" ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className="w-full resize-none rounded-lg border-2 border-border bg-transparent px-3.5 py-2.5 font-body text-[14px] text-secondary-900 outline-none transition-colors focus:border-secondary-600"
        />
      ) : (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          className="w-full rounded-lg border-2 border-border bg-transparent px-3.5 py-2.5 font-body text-[14px] text-secondary-900 outline-none transition-colors focus:border-secondary-600"
        />
      )}
      {hint && (
        <p className="mt-1 font-body text-[11.5px] text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  );
}
