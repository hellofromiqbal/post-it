import { z } from 'zod';

export const signUpFormSchema = z.object({
  fullname: z.string({
    required_error: "Fullname is required.",
    invalid_type_error: "Fullname must be a string."
  }).min(2, {message: "Fullname must be at least 2 or more characters long."}).max(30, {message: "Fullname must be 30 or fewer characters long."}),
  email: z.string().email({message: "Email is required and must be in a correct format."}),
  password: z.string({
    required_error: "Password is required"
  }).min(6, {message: "Password at least 6 or more characters long."}).max(20, {message: "Password at least 20 or fewer characters long."}),
  confirmPassword: z.string().min(6, {message: "Confirm password at least 6 or more characters long."}).max(20, {message: "Confirm password at least 20 or fewer characters long."}),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password do not match",
  path: ["confirmPassword"]
});

export const forgotPasswordSchema = z.object({
  email: z.string().email({message: "Email is required and must be in a correct format."}),
});

export const resetPasswordSchema = z.object({
  newPassword: z.string({
    required_error: "New password is required"
  }).min(6, {message: "New password at least 6 or more characters long."}).max(20, {message: "New password at least 20 or fewer characters long."}),
  confirmNewPassword: z.string().min(6, {message: "Confirm new password at least 6 or more characters long."}).max(20, {message: "Confirm new password at least 20 or fewer characters long."}),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Password do not match",
  path: ["confirmNewPassword"]
});

export const changePasswordSchema = z.object({
  oldPassword: z.string({
    required_error: "Old password is required"
  }).min(1, {message: "Old password is required."}),
  newPassword: z.string({
    required_error: "New password is required"
  }).min(6, {message: "New password at least 6 or more characters long."}).max(20, {message: "New password at least 20 or fewer characters long."}),
  confirmNewPassword: z.string().min(6, {message: "Confirm new password at least 6 or more characters long."}).max(20, {message: "Confirm new password at least 20 or fewer characters long."}),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Password do not match",
  path: ["confirmNewPassword"]
});

export const createPostFormSchema = z.object({
  textContent: z.string().min(1, {message: "Text content should not be blank."}).max(4000, {message: "Text content must be fewer than 4000 characters."})
});

export const createCommentFormSchema = z.object({
  textContent: z.string().min(1, {message: "Text content should not be blank."}).max(2000, {message: "Text content should fewer than 2000 characters."})
});

export const editProfileFormSchema = z.object({
  username: z.string().min(10, {message: "Username at least 10 characters long."}).max(20, {message: "Username must be fewer than 20 characters."}),
  fullname: z.string().min(1, {message: "Fullname at least 1 characters long."}).max(20, {message: "Fullname must be fewer than 20 characters."}),
  bio: z.string().max(50, {message: "Bio must be fewer than 50 characters."}),
  location: z.string(),
  website: z.string()
});