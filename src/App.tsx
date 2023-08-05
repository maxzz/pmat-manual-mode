import { SectionHeader } from "./components/1-header";
import { SectionMain } from "./components/2-main";
import { SectionFooter } from "./components/3-footer";

const appColorClasses = "text-primary-700 dark:text-primary-100 bg-primary-100 dark:bg-primary-800";

export function App() {
    return (<>
        <div className={`h-screen ${appColorClasses} text-sm grid grid-rows-[auto_1fr_auto]`}>
            <SectionHeader />
            <SectionMain />
            <SectionFooter />
        </div>
    </>);
}
