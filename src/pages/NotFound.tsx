import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Página no encontrada</p>
        <a href="/" className="text-primary underline hover:text-primary/80 transition-colors">
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
