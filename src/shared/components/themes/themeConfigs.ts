export interface ThemeConfig {
  primary: string;
  secondary: string;
  background: string;
  accent: string;
  text: string;
  muted: string;
  border: string;
  card: string;
}

export const themeConfigs: Record<string, ThemeConfig> = {
  // Tema Gaming (verde/roxo)
  gaming: {
    primary: "emerald-500",
    secondary: "purple-500", 
    background: "bg-slate-950",
    accent: "cyan-400",
    text: "white",
    muted: "slate-400",
    border: "emerald-500/30",
    card: "slate-900/80"
  },

  // Tema Film (vermelho/dourado)
  filmagente: {
    primary: "red-500",
    secondary: "yellow-500",
    background: "bg-black",
    accent: "orange-400", 
    text: "white",
    muted: "gray-400",
    border: "red-500/30",
    card: "gray-900/80"
  },

  // Tema Saúde (azul/verde)
  health: {
    primary: "blue-500",
    secondary: "green-500",
    background: "bg-blue-950",
    accent: "teal-400",
    text: "white", 
    muted: "blue-300",
    border: "blue-500/30",
    card: "blue-900/80"
  },

  // Tema Fotografia (rosa/roxo)
  photography: {
    primary: "pink-500",
    secondary: "purple-500",
    background: "bg-purple-950",
    accent: "fuchsia-400",
    text: "white",
    muted: "purple-300", 
    border: "pink-500/30",
    card: "purple-900/80"
  },

  // Tema Restaurante (laranja/vermelho)
  restaurant: {
    primary: "orange-500",
    secondary: "red-500", 
    background: "bg-orange-950",
    accent: "amber-400",
    text: "white",
    muted: "orange-300",
    border: "orange-500/30", 
    card: "orange-900/80"
  },

  // Tema Pessoal (cinza/branco)
  personal: {
    primary: "gray-200",
    secondary: "white",
    background: "bg-black",
    accent: "gray-400",
    text: "white",
    muted: "gray-300",
    border: "gray-700/50",
    card: "gray-900/80"
  },

  // Tema Padrão (azul)
  default: {
    primary: "blue-500", 
    secondary: "indigo-500",
    background: "bg-slate-950",
    accent: "sky-400",
    text: "white",
    muted: "slate-400",
    border: "blue-500/30",
    card: "slate-900/80"
  }
};
