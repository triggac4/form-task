import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TemplateComponent from "../components/template_component";
import TemplatesClass from "../utils/templates";
import nextImg from "../assets/svg/next.svg";
import { changePage } from "../redux/actions";
const TemplateSection = () => {
    const [hasError, setError] = useState(false);
    const sort = useSelector((state) => state);
    const pagination = { ...sort.pagination };
    const dispatchPagination = useDispatch();
    const dispatchGetTempt = useDispatch();

    let temporary = [];
    for (let x = 0; x < 12; x++) {
        temporary.push(<TemplateComponent forLoading key={x} />);
    }

    async function fetchTemplate() {
        if (!sort.loading) {
            await TemplatesClass.demoTemplates(dispatchGetTempt, setError);
        }
    }
    useEffect(() => {
        TemplatesClass.demoTemplates(dispatchGetTempt, setError);
    }, [dispatchGetTempt]);

    const change = sort.sorted
        .slice(sort.pagination.start_index, sort.pagination.end_index)
        .map((element, i) => {
            return (
                <TemplateComponent
                    topic={element.name}
                    paragraph={element.description}
                    key={i}
                />
            );
        });
    function paginate(increment) {
        const shouldIncrement = increment === "add";
        const currentPage = sort.pagination.current_page;
        const endPage = sort.pagination.total_pages;
        if (shouldIncrement) {
            if (endPage === currentPage) {
                return;
            }
            dispatchPagination(
                changePage(
                    TemplatesClass.numberOfPages(
                        sort.sorted,
                        12,
                        currentPage + 1
                    )
                )
            );
        } else {
            if (currentPage === 1) {
                return;
            }
            dispatchPagination(
                changePage(
                    TemplatesClass.numberOfPages(
                        sort.sorted,
                        12,
                        currentPage - 1
                    )
                )
            );
        }
    }

    return (
        <div className="template-section">
            <div
                className="template-section__top"
                style={{
                    justifyContent: `${hasError ? "center" : "space-between"}`,
                }}
            >
                {hasError ? (
                    <h3>
                        So sorry something went wrong refresh screen or tap{" "}
                        <button className="btn error" onClick={fetchTemplate}>
                            here
                        </button>
                    </h3>
                ) : (
                    <>
                        <h5 className="template-section__category">
                            all template
                        </h5>
                        <span className="template-section__amount">
                            {`${sort.sorted.length} template(s)`}{" "}
                        </span>
                    </>
                )}
            </div>
            {sort.loading ? temporary : change}
            <div className="template-section__foot">
                <button
                    className="template-section__btn previous btn"
                    onClick={() => paginate("subtract")}
                >
                    previous
                </button>
                <div className="template-section__page">
                    <span>{pagination.current_page}</span> of
                    {` ${pagination.total_pages}`}
                </div>
                <button
                    className="template-section__btn next btn"
                    onClick={() => paginate("add")}
                >
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
