import { useState } from 'react';

export function BandAdd({ newBand }) {
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        if( value.trim().length > 0 ) {
            newBand(value); 
        }

        setValue('');
    }
   
    return(
        <>
            <h3>Add Band</h3>

            <form onSubmit={ onSubmit }>
                <input
                    className="form-control"
                    placeholder="New Band Name"
                    value={ value }
                    onChange={ (e) => setValue(e.target.value)}
                />
            </form>
        </>
    )
}
