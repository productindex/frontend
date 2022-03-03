interface TextFieldProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
}

const TextField: React.FC<TextFieldProps>  = ({ 

    name,
    valueType,
    valuePlaceholder,
    valueLabel,
    value,
    className,
    onChange,
    error,
    ...props
    

}) => {

    return (
        <div>
            <label className="label label-regular" htmlFor={name}>{valueLabel}</label><br />
            <input 
                type={valueType} 
                className={error ? `textbox-error textbox ${className}` : `${className} textbox`} 
                name={name} 
                placeholder={valuePlaceholder }
                id={name}
                onChange={onChange}
                value={value}
                
            />
            {error && <div className="error-alert">{error}</div>}
            <style jsx>{`
                .label {
                    color: #1c1c1c;
                    font-weight: 700;
                  }
                  
                  .label-regular {
                    font-size: 1.125em;
                  }

                  .textbox {
                    padding: 0.75rem 1rem;
                    margin: 0.5rem 0 1rem 0;
                    border: 1px solid #E5E9E8;
                    -webkit-box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                    box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                    border-radius: 2px;
                    color: #5C5C5C;
                    outline: none;   
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    font-size: 1rem;
                    min-width: 12.5rem;
                    letter-spacing: 0.05rem;
                    font-size: 1.125rem;
                    width: 100%;
                  }
                  .textbox:focus {
                    box-shadow: 0px 0px 2px 2px #B8EEED;
                  }
                  .textbox::placeholder {
                    color: #CACACA;
                    // font-weight: 200;
                  }
        `}</style>
        </div>
    )
};
export { TextField };