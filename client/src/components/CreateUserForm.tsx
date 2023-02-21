import {Fragment } from 'react'

export default function CreateUserForm({ onChangeName, name, sendForm } : any) {

    return (
        <Fragment>
            <form>
                <label>
                    Name:
                    <input type="text" onChange={onChangeName} value={name} />
                </label>
                <input type="submit" value="Submit" onClick={sendForm} />
            </form>
        </Fragment>
    );
};
