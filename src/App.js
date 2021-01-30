import { useState } from "react"
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
    const [selectedImg, setSelectedimg] = useState(null)

    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid setSelectedimg={setSelectedimg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedimg={setSelectedimg} />}
        </div>
    );
}

export default App;
