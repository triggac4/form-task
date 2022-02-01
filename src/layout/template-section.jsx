import React from "react";
import TemplateComponent from "../components/template_component";
const TemplateSection = () => {
    const templates = [];
    for (let i = 0; i <= 50; i++) {
        templates.push(
            <TemplateComponent
                topic="Random Topic bro"
                paragraph={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga, atque voluptates magnam doloribus voluptas odio harum asperiores ipsum excepturi alias doloremque incidunt, dolores quis autem tempora architecto sit non."
                }
                key={i}
            />
        );
    }
    console.log(templates);
    return (
        <div className="template-section">
            <div className="template-section__top">top</div>
            {templates}
            <div className="template-section__foot">foot</div>
        </div>
    );
};

export default TemplateSection;
