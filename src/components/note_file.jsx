import React from "react";
import noteImg from "../assets/svg/note.svg";

const NoteFile = () => {
    return (
        <div className="note-file">
            <img src={noteImg} alt="note" />
            <p className="note-file__word">
                Tada! Get started with a free template. Can’t find what you are
                looking for? Search from the 1000+available templates
            </p>
        </div>
    );
};

export default NoteFile;
