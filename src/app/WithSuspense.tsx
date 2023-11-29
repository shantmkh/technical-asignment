import { motion } from "framer-motion";
import { Suspense } from "react";

export const WithSuspense = (Component: React.LazyExoticComponent<React.FC<{}>>) => () => (
	<motion.div
      className="Page"
      initial={{ y: "100vh" }}
      animate={{ y: "0vh" }}
			transition={{ duration: .5 }}
    >
			<Suspense fallback="Loading...">
				<Component />
			</Suspense>
    </motion.div>
);