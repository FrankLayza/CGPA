import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDropzone } from "react-dropzone";

const schema = yup.object().shape({
  userName: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be atleast 3 characters"),

  regNo: yup
    .string()
    .required("Registration Number is required")
    .matches(/^[0-9]+$/, "Only numbers allowed"),

  photo: yup.mixed().required("Profile Picture is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const { preview, setPreview } = useAppContext();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
  };

  const onDrop = (acceptedImage) => {
    const file = acceptedImage[0];
    if (file) {
      setPreview((prev) => ({ ...prev, img: URL.createObjectURL(file) }));
      setValue("photo", file, { shouldValidate: true });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-neo-blue px-4 sm:px-6 lg:px-8">
      <form
        className="w-full max-w-md neo-form flex flex-col px-6 py-5 sm:px-7 sm:py-3 rounded-2xl shadow-md bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 text-center">
          Sign Up 👋
        </h2>

        <p className="text-sm sm:text-base font-bold text-center">
          Upload your photo
        </p>

        {/* Photo Upload */}
        <div className="mt-3 mb-4 w-full flex justify-center">
          <div
            {...getRootProps()}
            className={`border-2 flex items-center justify-center border-dashed w-32 h-32 sm:w-36 sm:h-36 ${
              preview.img ? "border-none" : "rounded-xl"
            } p-4 text-center cursor-pointer transition ${
              isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {preview?.img ? (
              <img
                src={preview.img}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <p className="text-gray-600 text-xs sm:text-sm">
                Drag & Drop or click to upload
              </p>
            )}
          </div>
        </div>
        {errors.photo && (
          <p className="text-neo-red text-sm text-center">
            {errors.photo.message}
          </p>
        )}

        {/* Username */}
        <div className="my-3">
          <label htmlFor="userName" className="text-sm sm:text-base font-bold">
            Username
          </label>
          <input
            id="userName"
            className="border-2 rounded px-2 py-2 w-full bg-neo-white mt-1"
            {...register("userName")}
            placeholder="Username"
            onChange={(e) =>
              setPreview((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {errors.userName && (
            <p className="text-neo-red text-sm">{errors.userName.message}</p>
          )}
        </div>

        {/* Reg Number */}
        <div className="my-3">
          <label htmlFor="regNumber" className="text-sm sm:text-base font-bold">
            Reg. Number
          </label>
          <input
            id="regNumber"
            className="border-2 rounded px-2 py-2 w-full bg-neo-white mt-1"
            type="number"
            {...register("regNo")}
            placeholder="Reg. Number"
          />
          {errors.regNo && (
            <p className="text-neo-red text-sm">{errors.regNo.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="neo-button my-4 p-2 sm:p-3 cursor-pointer bg-neo-yellow text-base sm:text-lg rounded-lg transition hover:opacity-90"
        >
          Sign Up
        </button>

        <p className="text-center text-xs sm:text-sm">
          Already have an account? <span className="font-semibold">Log in</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
