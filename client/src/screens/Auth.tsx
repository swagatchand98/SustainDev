import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

// Form component to reduce duplication between login/signup
interface AuthFormProps {
  type: "login" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signup, login, checkAuth, isAuthenticated, isLoading, user } =
    useAuth();

  // Form state
  const [formState, setFormState] = useState({
    username: { value: "", isValid: true, errorMessage: "" },
    email: { value: "", isValid: true, errorMessage: "" },
    password: { value: "", isValid: true, errorMessage: "" },
    confirmPassword: { value: "", isValid: true, errorMessage: "" },
  });

  // Handle input changes
  const handleInputChange = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
        isValid: true,
        errorMessage: "",
      },
    }));
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newFormState = { ...formState };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.value)) {
      newFormState.email = {
        ...newFormState.email,
        isValid: false,
        errorMessage: "Please enter a valid email address",
      };
      isValid = false;
    }

    // Password validation
    if (formState.password.value.length < 8) {
      newFormState.password = {
        ...newFormState.password,
        isValid: false,
        errorMessage: "Password must be at least 8 characters",
      };
      isValid = false;
    }

    // Username validation (for signup only)
    if (type === "signup" && formState.username.value.length < 3) {
      newFormState.username = {
        ...newFormState.username,
        isValid: false,
        errorMessage: "Username must be at least 3 characters",
      };
      isValid = false;
    }

    // Confirm password validation (for signup only)
    if (
      type === "signup" &&
      formState.password.value !== formState.confirmPassword.value
    ) {
      newFormState.confirmPassword = {
        ...newFormState.confirmPassword,
        isValid: false,
        errorMessage: "Passwords do not match",
      };
      isValid = false;
    }

    setFormState(newFormState);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (type === "signup") {
        await signup(
          formState.username.value,
          formState.email.value,
          formState.password.value
        );
        navigate("/login");
      } else {
        await login(formState.email.value, formState.password.value);
        navigate("/");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google auth handler
  const handleGoogleAuth = async () => {
    try {
      console.log("Google auth initiated");
      // Implement Google auth logic here
    } catch (error) {
      console.error("Google auth error:", error);
    }
  };

  const isLogin = type === "login";
  const title = isLogin ? "Login" : "Sign Up";

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-green-gradient-1 to bg-green-gradient-2">
      <div className="flex-col place-items-center w-70 s:w-80 xs:w-130 h-auto p-5 rounded-2xl bg-green-100 shadow-2xl">
        {/* Header */}
        <div className="relative flex justify-center items-center w-full cursor-pointer">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0 flex items-center transition-transform hover:scale-110"
            aria-label="Go back"
          >
            <HiOutlineArrowLeft className="text-xl xs:text-2xl" />
          </button>

          <div className="text-xl xs:text-2xl font-judson font-bold tracking-widest">
            {title}
          </div>
        </div>

        <div className="h-[1px] bg-gray-500 w-full my-3"></div>

        {/* Form */}
        <div className="flex justify-center items-center py-6 xs:py-10">
          <form
            onSubmit={handleSubmit}
            className="flex-col space-y-3 xs:space-y-5 w-full"
          >
            {!isLogin && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Username"
                  value={formState.username.value}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  className={`w-full bg-white h-10 rounded-lg px-3 text-sm xs:text-lg font-judson ${
                    !formState.username.isValid ? "border-2 border-red-500" : ""
                  }`}
                />
                {!formState.username.isValid && (
                  <p className="text-red-500 text-xs mt-1">
                    {formState.username.errorMessage}
                  </p>
                )}
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                value={formState.email.value}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full bg-white h-10 rounded-lg px-3 text-sm xs:text-lg font-judson ${
                  !formState.email.isValid ? "border-2 border-red-500" : ""
                }`}
              />
              {!formState.email.isValid && (
                <p className="text-red-500 text-xs mt-1">
                  {formState.email.errorMessage}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={formState.password.value}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`w-full bg-white h-10 rounded-lg px-3 pr-10 text-sm xs:text-lg font-judson ${
                  !formState.password.isValid ? "border-2 border-red-500" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? (
                  <FaEye color="gray" className="cursor-pointer" />
                ) : (
                  <FaEyeSlash color="gray" className="cursor-pointer" />
                )}
              </button>
              {!formState.password.isValid && (
                <p className="text-red-500 text-xs mt-1">
                  {formState.password.errorMessage}
                </p>
              )}
            </div>

            {!isLogin && (
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Confirm password"
                  value={formState.confirmPassword.value}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className={`w-full bg-white h-10 rounded-lg px-3 pr-10 text-sm xs:text-lg font-judson ${
                    !formState.confirmPassword.isValid
                      ? "border-2 border-red-500"
                      : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center"
                  aria-label={
                    passwordVisible ? "Hide password" : "Show password"
                  }
                >
                  {passwordVisible ? (
                    <FaEye color="gray" className="cursor-pointer" />
                  ) : (
                    <FaEyeSlash color="gray" className="cursor-pointer" />
                  )}
                </button>
                {!formState.confirmPassword.isValid && (
                  <p className="text-red-500 text-xs mt-1">
                    {formState.confirmPassword.errorMessage}
                  </p>
                )}
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-green-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <div className="flex-col justify-items-start w-full pt-2">
              <div className="flex items-center gap-x-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex justify-center text-white items-center text-lg xs:text-xl font-judson w-24 xs:w-28 h-10 rounded-lg ${
                    isSubmitting
                      ? "bg-green-300 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600 transition-colors"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-pulse">...</span>
                  ) : (
                    "Submit"
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  className="flex items-center justify-center gap-2 bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
                >
                  <FcGoogle className="text-2xl xs:text-3xl" />
                  <span className="hidden sm:inline text-sm">
                    Continue with Google
                  </span>
                </button>
              </div>

              <div className="text-sm xs:text-lg font-judson font-light pt-3">
                {isLogin ? (
                  <Link to="/signup" className="hover:underline">
                    Don't have an account?
                  </Link>
                ) : (
                  <Link to="/login" className="hover:underline">
                    Already have an account?
                  </Link>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// login component
export const LoginScreen: React.FC = () => {
  return <AuthForm type="login" />;
};

// signup component
export const SignupScreen: React.FC = () => {
  return <AuthForm type="signup" />;
};

export default AuthForm;
