import React, { memo, useCallback, useMemo, useState } from "react";
import AutoCompleteItem from "./AutoCompleteItem";
import { AutoCompleteProps } from "./types";
import "./AutoComplete.css";

const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  inputValue,
  onInputChange,
  onOptionClick,
  getOptionLabel,
  isDynamicOption,
  inputProps,
  optionProps
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const getLabel = useCallback(
    (option: any): string => {
      if (getOptionLabel) return getOptionLabel(option);

      return option.label;
    },
    [getOptionLabel]
  );

  const filteredOption = useMemo(() => {
    if (isDynamicOption) return options;
    return options.filter(
      (option) => getLabel(option).toLowerCase() === inputValue.toLowerCase()
    );
  }, [options, inputValue, isDynamicOption, getLabel]);

  return (
    <div className="autocomplete-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className="autocomplete-input"
        onFocus={() => setIsInputFocused(true)} 
        onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
        {...inputProps}
      />
      {filteredOption.length > 0 && isInputFocused && (
        <div className="autocomplete-input_suggestions">
          {filteredOption.map((option, index) => (
            <AutoCompleteItem
              {...optionProps}
              key={index}
              suggestion={getLabel(option)}
              query={inputValue}
              onClick={onOptionClick(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(AutoComplete);
