import * as React from "react";

import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  type IconNode as LucideIcon,
  Linkedin,
  Download,
  FileArchive,
  // eslint-disable-next-line import/no-duplicates
} from "lucide-react";
// eslint-disable-next-line import/no-duplicates
import type { LucideProps } from "lucide-react";

import SiteLogo from "./svgs/logo";

export type Icon = LucideIcon;

export const Icons = {
  logo: ({ ...props }: LucideProps) => <SiteLogo {...props} />,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  linkedIn: Linkedin,
  download: Download,
  fileText: FileText,
  check: Check,
  zip: FileArchive,
};
