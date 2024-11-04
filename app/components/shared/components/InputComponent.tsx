import React from "react"
import IInputComponentInterface from "./types/InputComponentTypes"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function InputComponent({
    value,
    setValue,
    type,
    id,
    name,
    required,
    readonly,
    placeholder,
    disabled,
    autocomplete,
}: IInputComponentInterface) {
    return (
        <div className="space-y-1">
            <Label htmlFor={id} className="font-semibold">
                {name}
            </Label>
            <Input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                readOnly={readonly}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
                autoComplete={autocomplete}
            />
        </div>
    )
}
