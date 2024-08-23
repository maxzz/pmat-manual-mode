import { ReactElement } from 'react';
import * as allIcons from '.';

//type IconName = keyof typeof allIcons;
//type Icon = ReactElement;

export function TestAllIcons() {
    return (
        <div className="px-4 flex flex-wrap gap-2">
            {Object.entries(allIcons).map(
                ([name, Icon]) => (
                    <div className="flex flex-col items-center" key={name}>
                        <div className="border-sky-500 border rounded" title={name}>
                            <Icon className="size-6" />
                        </div>

                        {/* {Icon['[[FunctionLocation]]']} */}

                        {/* <span className="text-[.55rem]">
                            {name}
                        </span> */}
                    </div>
                ))
            }
        </div>
    );
}

printIconsLocation();

function printIconsLocation() {
    // G: 'js get function location'
    // https://stackoverflow.com/questions/41146373/access-function-location-programmatically 'Access function location programmatically'
    // https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#method-getProperties 'Runtime.getProperties'
    // console.log(Runtime.getProperties(allIcons).map(({ name }) => name));

    // * icons sorted in alphabetical order
    // * can we use import.meta.url from bundler? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta
    //   but it should be exposed from each file which is too much for this task
    // * or we can use plugin at build time to access file location, but that will be too much for this task

    const msg = 'Each icon has [[FunctionLocation]] property, but it is accessible from trace only (i.e. devtools-protocol), not from code.';
    const entries = Object.entries(allIcons);

    console.log(`%c${msg}`, 'font-size: 0.55rem', { entries });
}
