import "./style/App.scss";
import FilterSection from "./layout/filter_section";
import TemplateSection from "./layout/template-section";
function App() {
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
