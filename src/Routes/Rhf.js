import React from 'react'
import { useForm } from 'react-hook-form'

const Rhf = () => {
    // manually validation and form handling
    const [name, setName] = React.useState("");
    const [pname, setPname] = React.useState("");
    const [errmsg, setErrmsg] = React.useState("");
    const sendForm = () => {
        if (name.length < 1) {
            setErrmsg("Name is required");
        } else {
            console.log(name);
            setName("");
            setPname(name);
        }
    }

    // react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>

            {/*  manually validation and form handling */}

            <input type="text" placeholder='enter your name'
                value={name} onChange={(e) => setName(e.target.value)} />
            <p style={{ color: "red" }}>{errmsg}</p>

            <button onClick={sendForm}>Submit</button>
            <hr />
            <p>{pname} </p>

            <hr /><hr />
                {/*  react hook form */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder='enter your name' {...register("name", { required: "Name is required" })} />
                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                    <button type='submit'>Submit</button>
                </form>

        </div>
    )
}

export default Rhf
