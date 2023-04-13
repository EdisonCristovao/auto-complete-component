import { AutoCompleteItemProps } from "./types";

const SuggestionItem: React.FC<AutoCompleteItemProps> = ({
  suggestion,
  query,
  onClick,
  optionProps
}) => {
  const highlightIndex = suggestion.toLowerCase().indexOf(query.toLowerCase());
  const prefix = suggestion.slice(0, highlightIndex);
  const match = suggestion.slice(highlightIndex, highlightIndex + query.length);
  const suffix = suggestion.slice(highlightIndex + query.length);

  return (
    <div className="option" onClick={onClick} {...optionProps}>
      <span>{prefix}</span>
      <strong>{match}</strong>
      <span>{suffix}</span>
    </div>
  );
};

export default SuggestionItem;
