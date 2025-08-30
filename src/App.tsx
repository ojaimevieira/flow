import { Toaster } from "@/shared/ui/toaster";
import { Toaster as Sonner } from "@/shared/ui/sonner";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showcase from "./pages/Showcase";
import GamingLanding from "./templates/gaming/pages/GamingLanding";
import FilmAgenteLanding from "./templates/filmagente/pages/FilmAgenteLanding";
import RestauranteCursoLanding from "./templates/restaurante-curso/pages/RestauranteCursoLanding";
import EdicaoImagensIALanding from "./templates/edicao-imagens-ia/pages/EdicaoImagensIALanding";
import Template1Landing from "./templates/template-1/pages/Template1Landing";
import GestaoSaudeLanding from "./templates/gestao-saude/pages/GestaoSaudeLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/original" element={<GamingLanding />} />
          <Route path="/film-example" element={<FilmAgenteLanding />} />
          <Route path="/restaurante-curso" element={<RestauranteCursoLanding />} />
          <Route path="/edicao-imagens-ia" element={<EdicaoImagensIALanding />} />
          <Route path="/template-1" element={<Template1Landing />} />
          <Route path="/gestao-saude" element={<GestaoSaudeLanding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
