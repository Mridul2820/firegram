import { UseFirestore } from "../hooks/UseFirestore"

const ImageGrid = () => {
    const { docs } = UseFirestore('images')

    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id} >
                    <img src={doc.url} alt="image"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
