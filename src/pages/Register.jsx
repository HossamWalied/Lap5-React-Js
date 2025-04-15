import { useState } from "react";

const Register = () => {
    const [formValues,setFormValues]=useState({
        name:'',
        email:'',
        userName:'',
        password:'',
        confirmPassword:''
    })
    const [formErrors,setFormErrors]=useState({
        nameErr:null,
        emailErr:null,
        userNameErr:null,
        passwordErr:null,
        confirmPasswordErr:null
    })

    const handleChangeField = (e)=>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if(fieldName==='name'){
            setFormValues({
                ...formValues,
                name:fieldValue,
            });
            setFormErrors({
                ...formErrors,
                nameErr: fieldValue.length ===0?'required': fieldValue.length <3 ?"min length is 3":null
            })
        }
        if(fieldName==='email'){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setFormValues({
                ...formValues,
                email:fieldValue,
            });

            setFormErrors({
                ...formErrors,
                emailErr: fieldValue.length === 0 
                    ? 'required' 
                    : !emailRegex.test(fieldValue) 
                    ? 'invalid email format' 
                    : null
            });
        }
        if(fieldName==='userName'){
            setFormValues({
                ...formValues,
                userName:fieldValue,
            });
            setFormErrors({
                ...formErrors,
                userNameErr: fieldValue.length ===0?'required': fieldValue.length <3 ?"min length is 3":null
            })
        }
        if(fieldName==='password'){
            setFormValues({
                ...formValues,
                password:fieldValue,
            });
            setFormErrors({
                ...formErrors,
                passwordErr:
                fieldValue.length === 0
                    ? "Required"
                    : fieldValue.length < 8
                    ? "Password must be at least 8 characters"
                    : null,
              });
        }
        if(fieldName==='confirmPassword'){
            setFormValues({
                ...formValues,
                confirmPassword:fieldValue,
            });
            setFormErrors({
                ...formErrors,
                confirmPasswordErr:
                    fieldValue.length === 0
                        ? 'required'
                        : fieldValue !== formValues.password
                        ? 'Passwords do not match'
                        : null
            });
        }
    }

    const handleSubmitForm = (e)=>{
        e.preventDefault();
        alert(`
            Name: ${formValues.name}
            Email: ${formValues.email}
            Username: ${formValues.userName}
            Password: ${formValues.password}
            Confirm Password: ${formValues.confirmPassword}
            `);
    }
    return (
        <>
            <h3>Register</h3>
            <hr />
            <form onSubmit={handleSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="htmlForm-label">Name</label>
                    <input type="text" className="form-control" value={formValues.name}  onChange={handleChangeField} name='name' id="name" aria-describedby="nameHelp" />
                    {formErrors.nameErr&&(
                        <div id="nameHelp" className="form-text text-danger">
                            {formErrors.nameErr}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="htmlForm-label">Email address</label>
                    <input type="email" className="form-control" value={formValues.email}  onChange={handleChangeField} name='email' id="email" aria-describedby="emailHelp" />
                    {formErrors.emailErr&&(
                        <div id="emailHelp" className="form-text text-danger">
                            {formErrors.emailErr}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="htmlForm-label">User Name</label>
                    <input type="text" className="form-control" value={formValues.userName}  onChange={handleChangeField} name='userName' id="userName" aria-describedby="userNameHelp" />
                    {formErrors.userNameErr&&(
                        <div id="userNameHelp" className="form-text text-danger">
                            {formErrors.userNameErr}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={formValues.password}  onChange={handleChangeField} name='password' id="password" aria-describedby="passwordHelp" />
                    {formErrors.passwordErr&&(
                        <div id="passwordHelp" className="form-text text-danger">
                            {formErrors.passwordErr}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={formValues.confirmPassword}  onChange={handleChangeField} name='confirmPassword' id="confirmPassword" aria-describedby="confirmPasswordHelp" />
                    {formErrors.confirmPasswordErr&&(
                        <div id="confirmPasswordHelp" className="form-text text-danger">
                            {formErrors.confirmPasswordErr}
                        </div>
                    )}
                </div>

                <button type="submit" className="btn btn-success">Register</button>
            </form>
        </>
    )
}
export default Register;