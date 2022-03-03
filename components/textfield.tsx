import React, {useState} from 'react';
interface TextFieldProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
    show?: boolean;
    optional?: boolean;
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
    show,
    optional,
    ...props
    

}) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleType = () => {
      if (valueType == 'password' && showPassword == true) {
        return 'text'
      }
      if (valueType == 'telephone' || valueType == 'tel') return 'tel'
      return valueType
    }
    const showHide = () => {
      setShowPassword(!showPassword)
    }
    const formatTelephone = () => {

      return value
    }
    return (
        <div>
            <label className={`label label-regular`} htmlFor={name}>{valueLabel} {optional && <span className='label-optional'>(Optional)</span>}</label><br />
            <input 
                type={toggleType()} 
                className={error ? `textbox-error textbox ${className}` : `${className} textbox`} 
                name={name} 
                placeholder={valuePlaceholder }
                id={name}
                onChange={onChange}
                value={valueType == 'telephone'? formatTelephone() : value}
                
            />
            {valueType=='password' && <button type='button' className='show-hide' onClick={showHide}>{showPassword? 'hide' : 'show'}</button>}
            {error && <div className="error-alert">{error}</div>}
            <style jsx>{`
                .label {
                    color: #1c1c1c;
                    font-weight: 700;
                  }
                  .show-hide {
                      postion: absolute;
                      transform: translateY(-3.4rem);
                      float: right;
                      margin-right: 2rem;
                      padding: 6px;
                      cursor: pointer;
                      border: 1px solid #E5E9E8;
                      text-transform: uppercase;
                      display: inline-block;
                  }
                  
                  .label-regular {
                    font-size: 1.125em;
                  }
                  .label-optional {
                    font-weight: 400;
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
        `}</style>
        </div>
    )
};
export { TextField };