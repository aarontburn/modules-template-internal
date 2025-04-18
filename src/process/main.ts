import { Process, Setting } from "@nexus/nexus-module-builder"

// These is replaced to the ID specified in export-config.js during export. DO NOT MODIFY.
const MODULE_ID: string = "{EXPORTED_MODULE_ID}";
const MODULE_NAME: string = "{EXPORTED_MODULE_NAME}";
// ---------------------------------------------------

export default class SampleProcess extends Process {


    /**
     *  The constructor. Should not directly be called, 
     *      and should not contain logic relevant to the renderer.
     */
    public constructor() {
		super({
			moduleID: MODULE_ID,
			moduleName: MODULE_NAME
		});
    }

    /**
     *  The entry point of the module.
     */
    public async initialize(): Promise<void> {
        await super.initialize(); // This should be called.
        console.log(MODULE_ID + " initialized.");
    }


    public registerSettings(): (Setting<unknown> | string)[] {
        return [];
    }


    public async onSettingModified(modifiedSetting: Setting<unknown>): Promise<void> {
    }

}