class TemplatesClass {
    constructor(name, description, created, category, link) {
        this.name = name;
        this.description = description;
        this.created = new Date(created);
        this.category = category;
        this.link = link;
    }

    static filterTemplates(templates, { created, category, name }) {
        const filtered = templates.filter((tempt) => {
            let checkName = true;
            let checkCategories = true;
            let checkCreated = true;
            if (name) {
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
        return filtered;
    }
    static async demoTemplates() {
        try {
            const response = await fetch(
                "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
            );
            const templateList = await response.json();
            return templateList;
        } catch (e) {
            console.log(e);
            return [];
        }
    }
}

export default TemplatesClass;
