import { UseFirestore } from "../hooks/UseFirestore"

const ImageGrid = ({ setSelectedimg }) => {
    const { docs } = UseFirestore('images')

    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div 
                    className="img-wrap" 
                    key={doc.id} 
                    onClick={() => setSelectedimg(doc.url)}
                >
                    <img src={doc.url} alt="gallery pic"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
