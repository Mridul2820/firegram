import { UseFirestore } from "../hooks/UseFirestore"
import { motion } from "framer-motion"

const ImageGrid = ({ setSelectedimg }) => {
    const { docs } = UseFirestore('images')

    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div 
                    className="img-wrap" 
                    key={doc.id} 
                    layout
                    whileHover={{opacity : 1}}
                    onClick={() => setSelectedimg(doc.url)}
                >
                    <motion.img 
                        src={doc.url} 
                        alt="gallery pic"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
