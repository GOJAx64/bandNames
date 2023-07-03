import { useContext, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

export function BandAdd() {
    const [value, setValue] = useState('');
    const { socket } = useContext(SocketContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if( value.trim().length > 0 ) {
            socket.emit('new-band', value.trim());
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
