import { Process } from "module_builder/Process"
import { IPCCallback } from "module_builder/IPCObjects";
import { Setting } from "module_builder/Setting";
import { BooleanSetting, ChoiceSetting, HexColorSetting, NumberSetting, StringSetting } from "module_builder/settings/types";



export class SampleModuleProcess extends Process {

    private static readonly MODULE_NAME: string = "Sample Module";
    private static readonly MODULE_ID: string = "developer.Sample_Module";

    /**
     *  The constructor. Should not directly be called, 
     *      and should not contain logic relevant to the renderer.
     */
    public constructor(ipcCallback: IPCCallback) {
        super(
            SampleModuleProcess.MODULE_ID,
            SampleModuleProcess.MODULE_NAME,
            undefined,
            ipcCallback);

    }

    /**
     *  The entry point of the module. Will be called once the 
     *      renderer sends the 'init' signal.
     */
    public initialize(): void {
        super.initialize(); // This should be called.

    }


    public registerSettings(): (Setting<unknown> | string)[] {
        return [];
    }


    public refreshSettings(modifiedSetting: Setting<unknown>): void {
        if (modifiedSetting.getAccessID() === 'sample_bool') {

        }
    }

    public async handleEvent(eventType: string, data: any[]): Promise<any> {
        switch (eventType) {
            default: {
                console.log(`Unhandled event: type: ${eventType} | data: ${data}`);
            }
        }
    }

}