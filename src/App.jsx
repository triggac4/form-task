import "./style/App.scss";
import FilterSection from "./layout/filter_section";
import TemplateSection from "./layout/template-section";
import TemplatesClass from "./utils/templates";
function App() {
    async function dor() {
        let result = await TemplatesClass.demoTemplates();
        console.log(result.length);
        let result2 = TemplatesClass.filterTemplates(result, {
            name: "ab",
        });
        console.log(result2.length);
    }
    dor();
    return (
        <div className="body">
            <div className="layout">
                <section className="filters">
                    <FilterSection />
                </section>
                <main className="templates">
                    <TemplateSection />
                </main>
            </div>
        </div>
    );
}

export default App;
