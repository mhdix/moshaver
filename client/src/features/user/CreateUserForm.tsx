import { useState } from "react";
import api from "../../services/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type UserForm = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  status: "active" | "inactive";
};

const initialState: UserForm = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  status: "inactive",
};

export default function CreateUserForm() {
  const [form, setForm] = useState<UserForm>(initialState);
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await api.post("/user/create", form);
    
    if (response.status === 201) {
      toast.success(response.data.message || "کاربر با موفقیت ایجاد شد");
      navigate("/");
    }else {
      toast.error(response.data.message || "خطا در ایجاد کاربر");
    }
    console.log("create newUser ", response);
  };

  return (
    <div
      className="
      min-h-screen 
      bg-bg 
      flex 
      items-center 
      justify-center 
      px-4
    "
    >
      <div
        className="
        w-full
        max-w-xl
        bg-card
        border
        border-line
        rounded-2xl
        p-5
        sm:p-8
        shadow-xl
      "
      >
        {/* Header */}

        <div className="mb-8 text-right">
          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-text
          "
          >
            ثبت نام
          </h1>

          <p
            className="
            mt-2
            text-muted
            text-sm
          "
          >
            مدیریت کاربران سامانه مشاور مالی عملیاتی
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <Input
            label="نام و نام خانوادگی"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="ایمیل"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="شماره موبایل"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
          />

          <Input
            label="رمز عبور"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="
              w-full
              bg-primary
              text-bg
              font-bold
              py-3
              rounded-xl
              hover:opacity-90
              transition
            "
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, name, value, type = "text", onChange }: InputProps) {
  return (
    <div className="text-right">
      <label
        className="
          block
          mb-2
          text-text-secondary
          text-sm
        "
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          bg-surface
          border
          border-line
          rounded-xl
          px-4
          py-3
          text-text
          placeholder:text-muted
          outline-none
          focus:border-primary
          transition
        "
      />
    </div>
  );
}
