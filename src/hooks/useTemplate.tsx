"use client";
import React from "react";

export default function useTemplate(url: string) {
  const [template, setTemplate] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    fetch(url)
      .then((r) => r.text())
      .then((t) => {
        if (mounted) setTemplate(t);
      })
      .catch(() => {
        if (mounted) setTemplate(null);
      });

    return () => {
      mounted = false;
    };
  }, [url]);

  return template;
}