import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone/.";

const SignUp = () => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const [data, setData] = useState('')
    const [preview, setPreview] = useState(null)

    const onDrop = (acceptedImage) => {
      const file = acceptedImage[0]
      if(file){
        setPreview(URL.createObjectURL(file))
      }
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      accept: {'image/*': []},
      multiple: false
    })

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-neo-blue">
        <form className="w-full max-w-md neo-form flex flex-col px-6 py-4" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <h2 className="text-4xl font-bold mt-3 mb-4">Sign Up 👋</h2>
            <p className="text-base font-bold">Upload your photo</p>
          <div className="border-2 size-26 w-full">

          </div>
          <div className="my-2">
            <label htmlFor="userName" className="text-lg font-bold">Username</label> <br />
            <input id="userName" className="border-2 rounded px-2 py-1 w-full bg-neo-white" {...register("userName", {required: true})} placeholder="Username" />
          </div>

          <label className="text-lg font-bold" htmlFor="regNumber">Reg. Number</label>
          <input id="regNumber" className="border-2 rounded px-2 py-1 w-full bg-neo-white" type="text" {...register("regNo", {required: true})} placeholder="Reg.Number" />

          <button onClick={() => navigate('/home')} className="neo-button my-3 p-2 cursor-pointer bg-neo-yellow">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
 