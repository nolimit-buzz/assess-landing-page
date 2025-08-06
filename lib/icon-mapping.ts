import { 
  Users, 
  Award, 
  Shield, 
  BarChart3, 
  Star, 
  Zap, 
  ArrowRight, 
  Plus, 
  Minus,
  Building,
  Globe,
  Play,
  Car,
  Cross,
  ShoppingCart,
  Settings,
  ChevronRight,
  Search,
  Check
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Users,
  Award,
  Shield,
  BarChart3,
  Star,
  Zap,
  ArrowRight,
  Plus,
  Minus,
  Building,
  Globe,
  Play,
  Car,
  Cross,
  ShoppingCart,
  Settings,
  ChevronRight,
  Search,
  Check
};

export function getIconComponent(iconName: string) {
  return iconMap[iconName] || Users; // Default to Users if icon not found
} 