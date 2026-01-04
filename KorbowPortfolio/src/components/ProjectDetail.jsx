import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ProjectDetail = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);
  return (
    <motion.div 
      // 1. POSITION FIXED : La page prend tout l'écran, par dessus le reste
      className="fixed inset-0 z-50 w-full h-full bg-white overflow-y-auto"
      // Si tu n'utilises pas Tailwind, remplace className par style :
      // style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflowY: 'auto', background: 'white', zIndex: 50 }}
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto p-4">
        {/* L'image partagée */}
        <motion.img
          layoutId="project-image-unique"
          src="/ressources/Projects/frame1TourneDisque.png"
          className="w-full max-w-lg mx-auto" // Adapte ton style ici
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        />

        <motion.div 
          className="content mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1>Mon projet incroyable</h1>
          <p>
            Ici, tu peux mettre autant de texte que tu veux. 
            Comme le parent est en "overflow-y-auto", c'est ce conteneur qui scrollera,
            et non la fenêtre principale du navigateur.
          </p>
          <div className="h-[200vh]">Contenu long pour tester le scroll...</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;