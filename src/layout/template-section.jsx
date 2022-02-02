import React from "react";

import TemplateComponent from "../components/template_component";
import nextImg from "../assets/svg/next.svg";

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
            <div className="template-section__top">
                <h5 className="template-section__category">all template</h5>
                <span className="template-section__amount">
                    {`${templates.length} template(s)`}{" "}
                </span>
            </div>
            {templates}
            <div className="template-section__foot">
                <button className="template-section__btn previous btn">
                    previous
                </button>
                <div className="template-section__page">
                    <span>1</span> of 14
                </div>
                <button className="template-section__btn next btn">
                    next
                    <img
                        src={nextImg}
                        alt="arrow"
                        className="template-section__btn-img"
                    />
                </button>
            </div>
        </div>
    );
};

export default TemplateSection;
