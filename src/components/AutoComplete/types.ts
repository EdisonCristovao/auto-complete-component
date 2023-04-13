type SuggestionType = {
  imdb_id: string;
  title: string;
};

type AutoCompleteItemProps = {
  suggestion: string;
  query: string;
  onClick: () => void;
  optionProps?: OptionProps
};

type AutoCompleteProps = {
  options: AutoCompleteOpetion[] | any[];
  inputValue: string;
  onInputChange: any;
  onOptionClick: any;
  getOptionLabel?: any;
  isDynamicOption?: boolean;
  inputProps?: InputProps;
  optionProps?: OptionProps
};

type InputProps = {
  className: string;
};

type OptionProps = {
  className: string;
};

type AutoCompleteOpetion = {
  label: string;
  id: number | string;
};

export type {
  AutoCompleteItemProps,
  SuggestionType,
  AutoCompleteProps,
  AutoCompleteOpetion,
};
