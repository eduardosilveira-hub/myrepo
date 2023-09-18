import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class LinearInputControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    
    private myDivArea: HTMLDivElement; //Div we are building on the screen
    private userInput: HTMLInputElement; // Text area where user will input their data
    private charCountLabel: HTMLLabelElement; // Label that will show characterCount/Max
    private maxCharCount: number; // This is a local var that will store the users input in dataverse for max chars
    private _notifyOutputChanged: () => void; // This variable will hold any changes notification from the control (UI) to the host (dataverse field)

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
        this.maxCharCount = context.parameters.maxChar.raw || 0;

        this.myDivArea = document.createElement("div");
        this.userInput = document.createElement("input");
        this.charCountLabel = document.createElement("label");

        this.myDivArea.appendChild(this.userInput);
        this.myDivArea.appendChild(this.charCountLabel);
        container.appendChild(this.myDivArea);
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
        // this._container.innerHTML = "aaa ".concat(context.parameters.mobileNumber.raw!);
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {};
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
