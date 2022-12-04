import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, valeu}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                valeu={valeu}            
            />
        </div>
    )
}

export default Input