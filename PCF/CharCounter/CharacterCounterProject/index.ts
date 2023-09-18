import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class CharacterCounterProject implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private mainDiv: HTMLDivElement;
    private textbox: HTMLTextAreaElement;
    private outputLabel: HTMLLabelElement;
    private theNotifyOutputChanged: () => void;
    private maxCharacterLimit: number;

    /**
     * Empty constructor.
     */
    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        // This will notify the host that the control data changed
        // and it will reflect the change on the host field
        this.theNotifyOutputChanged = notifyOutputChanged;
        this.maxCharacterLimit = context.parameters.charCounterLimit.raw || 0;
        this.mainDiv = document.createElement("div");
        this.textbox = document.createElement("textarea");

        this.outputLabel = document.createElement("label");
        this.textbox.value = context.parameters.charCounterDataInput.raw || "";
        this.textbox.addEventListener("keydown", this.onKeyDown.bind(this));

        this.mainDiv.appendChild(this.textbox);
        this.mainDiv.appendChild(this.outputLabel);
        container.appendChild(this.mainDiv);

        this.onKeyDown();
    }

    private onKeyDown(): void {
        const charRemainig = this.maxCharacterLimit - this.textbox.value.length;
        this.outputLabel.innerHTML = `${charRemainig}/${this.maxCharacterLimit}`;
        
        // after data has changed on the screen, notify host of the change
        this.theNotifyOutputChanged();
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        const changedCharCounter = context.parameters.charCounterLimit.raw || 0;
        if (this.maxCharacterLimit !== changedCharCounter) {
            this.maxCharacterLimit = changedCharCounter;
            this.onKeyDown();
        }
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {
            charCounterDataInput: this.textbox.value
        }
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
