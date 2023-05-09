import React from 'react';


export const AdditionalEntitiesInput = React.memo(
  function AdditionalEntitiesInput({
    id,
    name,
    label,
    isChecked,
    onInputChange,
  }) {
    console.log('render');
    return (
      <label>
        <input
          type="checkbox"
          name={name}
          onChange={onInputChange}
          value={id}
          checked={isChecked}
        />
        {label}
      </label>
    );
  }
);
