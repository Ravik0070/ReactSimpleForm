import FormInput from "./formInput";
import React,{useState} from 'react'


const Registrationform = () => {
    const [values,setValues] = useState({
      //state used for form data values
        Username:'',
        Email:'',
        DOB:'',
        Password:'',
        ConfirmPassword:''
    })
    const inputs = [
      //fields for the inputs of the forms
      {
        id: 1,
        name: "Username",
        type: "text",
        placeholder: "Username",
        label: "Username",
        errMessage:"Username name should be atleast 3 to 10 characters long ",
        pattern: "^[A-Za-z0-9]{3,10}$",
        required: true,
      },
      {
        id: 2,
        name: "Email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        errMessage:"It should be a valid email",
        required: true,
      },
      {
        id: 3,
        name: "DOB",
        type: "date",
        placeholder: "DOB",
        label: "DOB",
      },
      {
        id: 4,
        name: "Password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errMessage:"Password should be 8-20 characters and include atleast one letter, number and speacial character",
        pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 5,
        name: "ConfirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password",
        errMessage:"Passwords don't match!",
        pattern:values.Password,
        required: true,
      },
    ];
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(values);
        // const data = new FormData(e.target)
        // console.log(Object.fromEntries(data))
    }
    const onChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <FormInput name="email" placeholder="Email" />
        <FormInput name="dob" placeholder="DOB" />
        <FormInput name="password" placeholder="Password" />
        <FormInput name="confirmpassword" placeholder="Confirm password" /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registrationform