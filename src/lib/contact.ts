import { siteConfig } from "./site-config";

const { phone } = siteConfig.contact;

export const contactPhone = phone;

export function getTelLink() {
  return `tel:${phone.e164}`;
}

export function getWhatsAppLink(message?: string) {
  const base = `https://wa.me/${phone.whatsappId}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Hello FirstMartt, I would like to get in touch regarding your hyperlocal commerce platform.";
