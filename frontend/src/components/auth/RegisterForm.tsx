import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { InputLabel, OutlinedInput, Button, CircularProgress } from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const initialState = {
    username: "",
    fullName: "",
    role: "Student",
    qualification: "",
    dob: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Registration successful! You can now log in");
      console.log(formData);
      setFormData(initialState);
    } catch (error) {
      toast.error("An error occurred during registration");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden animate-in">
      <CardContent className="p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <InputLabel htmlFor="username" sx={{ color: "black" }}>Email</InputLabel>
            <OutlinedInput
              id="username"
              name="username"
              type="email"
              placeholder="Enter your email"
              value={formData.username}
              onChange={handleChange}
              required
              className="h-12"
              sx={{ width: "100%" }}
            />
          </div>

          <div className="space-y-2">
            <InputLabel htmlFor="fullName" sx={{ color: "black" }}>Full Name</InputLabel>
            <OutlinedInput
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="h-12"
              sx={{ width: "100%" }}
            />
          </div>

          <div className="space-y-2">
            <InputLabel htmlFor="role" sx={{ color: "black" }}>Role</InputLabel>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="p-2 w-full border rounded h-12"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <InputLabel htmlFor="qualification" sx={{ color: "black" }}>Qualification</InputLabel>
              <OutlinedInput
                id="qualification"
                name="qualification"
                placeholder="Your qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="h-12"
                sx={{ width: "100%" }}
              />
            </div>

            <div className="space-y-2">
              <InputLabel htmlFor="dob" sx={{ color: "black" }}>Date of Birth</InputLabel>
              <OutlinedInput
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="h-12"
                sx={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <InputLabel htmlFor="password" sx={{ color: "black" }}>Password</InputLabel>
            <div className="relative">
              <OutlinedInput
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="h-12 pr-10"
                sx={{ width: "100%" }}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-muted-foreground" /> : <Eye className="h-5 w-5 text-muted-foreground" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <InputLabel htmlFor="confirmPassword" sx={{ color: "black" }}>Confirm Password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="h-12"
              sx={{ width: "100%" }}
            />
          </div>

          <Button variant="contained" type="submit" disabled={isLoading} className="w-full h-12 mt-6">
            {isLoading ? <CircularProgress size={24} /> : "Create Account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
