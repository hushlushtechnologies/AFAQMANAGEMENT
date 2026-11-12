import {
  BadgeCheck,
  Clapperboard,
  KeyRound,
  Layers,
  LucideIcon,
  Monitor,
  Percent,
  Plane,
  Briefcase,
  ShoppingCart,
  Truck,
  User,
  Combine,
  Landmark,
  Building2,
  Gem,
  Trophy,
} from "lucide-react";
import type { FzIcon } from "@/lib/freezones/types";

export const fzIcons: Record<FzIcon, LucideIcon> = {
  ownership: KeyRound,
  licence: BadgeCheck,
  activities: Layers,
  online: Monitor,
  visas: Plane,
  tax: Percent,
  trading: Truck,
  services: Briefcase,
  solo: User,
  ecommerce: ShoppingCart,
  media: Clapperboard,
  multiple: Combine,
  bank: Landmark,
  office: Building2,
  ecosystem: Gem,
  award: Trophy,
};

export const WHATSAPP_URL = "https://wa.me/971527094940";
