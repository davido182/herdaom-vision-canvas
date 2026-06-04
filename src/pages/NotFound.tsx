import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada | Herdaom</title>
        <meta name="description" content="La página que buscas no existe. Vuelve al inicio de Herdaom Constructora en Loja, Ecuador." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.herdaom.com/404" />
        <meta property="og:title" content="Página no encontrada | Herdaom" />
        <meta property="og:url" content="https://www.herdaom.com/404" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Página no encontrada</p>
          <a href="/" className="text-primary underline hover:opacity-80">
            Volver al inicio
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
