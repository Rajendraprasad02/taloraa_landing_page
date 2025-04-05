import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import verifyEmail from "../components/utils/verifyEmail";

export const Newsletter = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"; // Get API URL from .env

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const showToast = (type: "success" | "error", message: string) => {
    toast.dismiss(); // Dismiss any existing toast
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      showToast(
        "error",
        "Please enter a valid email to subscribe to the newsletter."
      );
      return;
    }

    if (!validateEmail(email)) {
      showToast(
        "error",
        "Invalid email address! Please enter a valid email to subscribe to the newsletter."
      );
      return;
    }

    // if (email) {
    //   setLoading(true);

    //   const isValid = await verifyEmail(email);

    //   if (!isValid) {
    //     showToast("error", "Enter Correct Email Address");
    //     setLoading(false); // ✅ Ensure loading state is reset
    //     return; // ✅ Stops further execution
    //   }

    //   setLoading(false); // ✅ This ensures loading stops if email is valid
    // }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/request-demo/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        showToast("success", "Successfully subscribed to the newsletter!");
        setEmail(""); // Clear input field
      } else {
        showToast("error", result.message || "Subscription failed!");
      }
    } catch (error) {
      showToast("error", "Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter ">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32 ">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8"></p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Enter your email"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Button
            className="text-black font-bold hover:text-white"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
