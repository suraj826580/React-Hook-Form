import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const YoutubeForm = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          {...register("username", {
            required: {
              value: true,
              message: "Please Type your email this is necessary",
            },
          })}
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Please enter",
            },
          })}
        />

        <p>{errors.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
