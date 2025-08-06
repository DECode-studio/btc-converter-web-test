'use client';

import { CircleIcon } from 'hugeicons-react';
import React, { useEffect, useState } from 'react';

export interface RadioOption {
    label: string;
    subLabel?: string;
    value: string;
}

interface RadioGroupProps {
    options: RadioOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}

const RadioGroupManual: React.FC<RadioGroupProps> = ({
    options,
    defaultValue = '',
    onChange,
}) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    useEffect(() => {
        const isValid = options.some((option) => option.value === defaultValue);
        setSelectedValue(isValid ? defaultValue : '');
    }, [options, defaultValue]);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div>
            {options.map((option, index) => (
                <div
                    key={index}
                    className={`flex items-center mb-4 cursor-pointer ${selectedValue === option.value ? 'text-cyan-700' : 'text-gray-700'
                        }`}
                    onClick={() => handleSelect(option.value)}
                >
                    {/* Icon */}
                    <div className="mr-3">
                        {selectedValue === option.value ? (
                            <CircleIcon className="w-5 h-5 bg-cyan-700 rounded-full" />
                        ) : (
                            <CircleIcon className="w-5 h-5" />
                        )}
                    </div>

                    {/* Label */}
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">{option.label}</div>
                        {option.subLabel && (
                            <div className="text-xs text-gray-500">{option.subLabel}</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RadioGroupManual;
