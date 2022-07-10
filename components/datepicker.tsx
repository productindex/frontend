import React from 'react';
interface TextFieldProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
    optionList?: {value?: string, name?: string, default?: Boolean}[];
    //TODO: add onBlur
}

const Datepicker: React.FC<TextFieldProps>  = ({ 

    name,
    valueType,
    valuePlaceholder,
    valueLabel,
    value,
    className,
    onChange,
    error,
    optionList,
    ...props
    

}) => {
    return (
        <div className='form-element'>
            <label className="label label-regular" htmlFor={name}>{valueLabel}</label><br />
            <input type="date" id="start" name="trip-start"
              value = {value}
              onChange={onChange}
              className='textbox'/>

            {error && <div className="error-alert">{error}</div>}
            <style>{`
                  .label {
                    color: #1c1c1c;
                    font-weight: 700;
                  }
                  
                  .label-regular {
                    font-size: 1.125em;
                  }

                  .textbox {
                    background-color: #fff;
                    padding: 0.75rem 1rem;
                    margin: 0.5rem 0 1rem 0;
                    border: 1.5px solid #E5E9E8;
                    -webkit-box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                    box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                    border-radius: 2px;
                    color: #5C5C5C;
                    outline: none;   
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    // font-size: 1.125rem;
                    min-width: 10.5rem;
                    // letter-spacing: 0.05rem;
                    width: 100%;
                    font-family: "Inter';
                  
                  }
                  .textbox:focus {
                    box-shadow: 0px 0px 2px 2px #B8EEED;
                  }
                  .textbox::placeholder {
                    color: #CACACA;
                  }
                  .error-alert {
                      color: #C60000;
                      padding: 4px 8px;
                      border-radius: 2px;
                      background-color: #FFDADA;
                      display: inline-block;
                      font-weight: 500;
                      position: relative;
                      top: -0.5rem;
                  }
                  .form-element {
                    width: 100%;
                  }
        `}</style>
        </div>
    )
};
export { Datepicker };