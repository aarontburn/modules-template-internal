import { Process, IPCCallback, Setting } from "@nexus/nexus-module-builder"

const MODULE_NAME: string = "Sample Internal Module";
const MODULE_ID: string = "developer.Sample_Internal_Module";

export default class SampleModuleProcess extends Process {


    /**
     *  The constructor. Should not directly be called, 
     *      and should not contain logic relevant to the renderer.
     */
    public constructor(ipcCallback: IPCCallback) {
        super(MODULE_ID, MODULE_NAME, undefined, ipcCallback);
    }

    /**
     *  The entry point of the module.
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