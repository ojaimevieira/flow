import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { useEffect, useMemo, useRef, useState } from "react";
import { 
  Camera, 
  Sparkles, 
  Zap, 
  Target, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Palette,
  Image,
  Wand2,
  DollarSign,
  Timer,
  UserCheck,
  AlertTriangle,
  Gift
} from "lucide-react";
import Hero500x500 from '@/assets/edicao-imagens-ia/hero_500x500.webp';
import ProdutoAntes500x500 from '@/assets/edicao-imagens-ia/produto_antes_500x500.webp';
import ProdutoDepois500x500 from '@/assets/edicao-imagens-ia/produto_depois_500x500.webp';

// Import components
import HeroSection from "../components/HeroSection";
import PainsSection from "../components/PainsSection";
import SolutionSection from "../components/SolutionSection";
import GallerySection from "../components/GallerySection";

const EdicaoImagensIALanding = () => {
