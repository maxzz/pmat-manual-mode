import { SectionHeader } from "./components/1_header";
import { SectionMain } from "./components/2_main";
import { SectionFooter } from "./components/3_footer";

const appColorClasses = "text-primary-700 dark:text-primary-100 bg-primary-100 dark:bg-primary-800";

export function App() {
    return (<>
        <div className={`h-screen ${appColorClasses}`}>
            <SectionHeader />
            <SectionMain />
            <SectionFooter />
        </div>
    </>);
}
