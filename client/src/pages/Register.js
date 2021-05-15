import React, {useState} from 'react';

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    const {name, password} = formData

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        setFormData({...formData})
        console.log(formData)
    }

    console.log(formData)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="name"
                    type="name"
                    onChange={handleChange('name')}
                    value={name}
                />
                <input
                    placeholder="password"
                    type="password"
                    onChange={handleChange('password')}
                    value={password}
                />

                <button type="submit">
                    submit
                </button>
            </form>

            <p>{name}</p>
        </div>
    );
};

export default Register;