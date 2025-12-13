import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Recursos from "./pages/Recursos";
import Precos from "./pages/Precos";
import Integracoes from "./pages/Integracoes";
import API from "./pages/API";
import Sobre from "./pages/Sobre";
import Carreiras from "./pages/Carreiras";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Ajuda from "./pages/Ajuda";
import Documentacao from "./pages/Documentacao";
import Status from "./pages/Status";
import Comunidade from "./pages/Comunidade";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import Cookies from "./pages/Cookies";
import LGPD from "./pages/LGPD";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/integracoes" element={<Integracoes />} />
          <Route path="/api" element={<API />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carreiras" element={<Carreiras />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/documentacao" element={<Documentacao />} />
          <Route path="/status" element={<Status />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/lgpd" element={<LGPD />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
