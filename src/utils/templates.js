class TemplatesClass {
    constructor(name, description, created, category, link) {
        this.name = name;
        this.description = description;
        this.created = new Date(created);
        this.category = category;
        this.link = link;
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
