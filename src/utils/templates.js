import { getSorted, getTemplateSuccess } from "../redux/actions";

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
                ? -1
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
        const filtered = templates.filter((tempt) => {
            let checkName = true;
            let checkCategories = true;
            let checkCreated = true;
            if (name) {
                name.trim();
                checkName = tempt.name.includes(name);
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
        return filtered;
    }
    static async demoTemplates(dispatch, setLoading) {
        try {
            setLoading(true);
            const response = await fetch(
                "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
            );
            const templateList = await response.json();
            const paginate = TemplatesClass.numberOfPages(templateList, 12, 1);
            dispatch(getTemplateSuccess(templateList, paginate));
            return templateList;
        } catch (e) {
            console.log(e);
            return [];
        } finally {
            setLoading(false);
        }
    }
}

export default TemplatesClass;
