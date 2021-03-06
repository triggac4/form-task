import React from "react";

const TemplateComponent = ({ topic, paragraph, forLoading }) => {
    return (
        <div className={`template-component ${forLoading ? "forLoading" : ""}`}>
            <h1 className="template-component__topic">{topic}</h1>
            <p className="template-component__paragraph">{paragraph}</p>
            <div className="template-component__footer">{"use template"}</div>
        </div>
    );
};

export default TemplateComponent;
