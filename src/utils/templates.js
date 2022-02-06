import { getSorted, getTemplateSuccess, loading } from "../redux/actions";

class TemplatesClass {
    constructor(name, description, created, category, link) {
        this.name = name;
        this.description = description;
        this.created = new Date(created);
        this.category = category;
        this.link = link;
    }
    static numberOfPages(templates, temptPerPage, currentPage) {
        const result = Math.ceil(templates.length / temptPerPage);
        const start = (currentPage - 1) * temptPerPage;
        const end =
            start + temptPerPage >= templates.length
                ? templates.length
                : start + temptPerPage;
        const returnVal = {
            current_page: currentPage,
            start_index: start,
            end_index: end,
            total_pages: result,
        };
        return returnVal;
    }

    static filterTemplates(templates, dispatch, { created, category, name }) {
        dispatch(loading(true));
        const filtered = templates.filter((tempt) => {
            let checkName = true;
            let checkCategories = true;
            let checkCreated = true;
            if (name) {
                let trimmed = name.trim();
                const temptUpper = tempt.name.toUpperCase();
                checkName = temptUpper.includes(trimmed.toUpperCase());
            }
            if (category) {
                if (category.toUpperCase() === "ALL") {
                    checkCategories = true;
                } else {
                    checkCategories = tempt.category.includes(category);
                }
            }
            if (created) {
                //todo
                //don't know if i should put dates are before or after
                //so i can't do much until further instruction
            }

            return checkCategories & checkName & checkCreated;
        });

        dispatch(
            getSorted(filtered, TemplatesClass.numberOfPages(filtered, 12, 1))
        );
        dispatch(loading(false));
        return filtered;
    }
    static async demoTemplates(dispatch, setError) {
        try {
            dispatch(loading(true));
            const response = await fetch(
                "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
            );

            const templateList = await response.json();
            const paginate = TemplatesClass.numberOfPages(templateList, 12, 1);
            dispatch(getTemplateSuccess(templateList, paginate));
            setError(false);
            return templateList;
        } catch (e) {
            setError(true);
            return [];
        } finally {
            dispatch(loading(false));
        }
    }
}

export default TemplatesClass;
