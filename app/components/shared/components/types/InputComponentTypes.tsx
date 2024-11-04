export default interface IInputComponentInterface {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    type: string
    id: string
    name: string
    required: boolean
    readonly?: boolean
    placeholder: string
    disabled?: boolean
    autocomplete?: string
}
