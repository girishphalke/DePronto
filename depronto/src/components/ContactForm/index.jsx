import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./contact.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Name" {...register("example")} />

      <input
        defaultValue="Select Date"
        {...register("date", { required: true })}
      />
      {errors.date && <p>This field is required</p>}

      <input type="submit" />
    </form>
  );
};

export default ContactForm;
