import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Eye, EyeOff } from "lucide-react";
import {
  InputLabel,
  OutlinedInput,
  Button,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Login successful!");
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
            <InputLabel htmlFor="username" sx={{ color: "black" }}>
              Email
            </InputLabel>
            <OutlinedInput
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12"
              sx={{ width: "100%" }}
            />
          </div>

          <div className="space-y-2">
            <InputLabel htmlFor="password" sx={{ color: "black" }}>
              Password
            </InputLabel>
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
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          <Button
            variant="contained"
            type="submit"
            disabled={isLoading}
            className="w-full h-12 mt-6"
          >
            {isLoading ? <CircularProgress size={24} /> : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
