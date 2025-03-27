import { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "react-toastify";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// Email validation function
const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Toast message handler (ensures only one message at a time)
let toastId: any = null;
const showToast = (type: "success" | "error", message: string) => {
  if (toastId) {
    toast.dismiss(toastId); // Dismiss any existing toast
  }
  toastId = toast[type](message);
};

export const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Debounced input handler
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      clearTimeout((handleChange as any).timeout);
      (handleChange as any).timeout = setTimeout(() => {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }, 300); // 300ms delay
    },
    []
  );

  // Debounced phone input handler
  const handlePhoneChange = useCallback((value: string) => {
    clearTimeout((handlePhoneChange as any).timeout);
    (handlePhoneChange as any).timeout = setTimeout(() => {
      setFormData((prev) => ({ ...prev, phoneNumber: value }));
    }, 300);
  }, []);

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs before submission
    if (!formData.name.trim()) {
      showToast("error", "Name is required.");
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }
    if (!formData.companyName.trim()) {
      showToast("error", "Company Name is required.");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      showToast("error", "Phone Number is required.");
      return;
    }
    if (!formData.message.trim()) {
      showToast("error", "Message cannot be empty.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${API_URL}/request-demo`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      showToast("success", "Demo request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      showToast("error", "Failed to submit demo request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="request-demo">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Request a Free{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Demo
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Get a personalized demo of our HRMS platform.
        </p>

        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            name="name"
            placeholder="Your Name"
            className="bg-muted/50 dark:bg-muted/80"
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            placeholder="Your Email"
            type="email"
            className="bg-muted/50 dark:bg-muted/80"
            onChange={handleChange}
            required
          />
          <Input
            name="companyName"
            placeholder="Company Name"
            className="bg-muted/50 dark:bg-muted/80"
            onChange={handleChange}
          />

          <PhoneInput
            country={"in"}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            inputProps={{
              name: "phoneNumber",
              required: true,
              className:
                "w-full p-2 bg-muted/80 dark:bg-muted/80 pl-12 rounded-sm bg-gray-100 border border-gray-300 dark:border-none",
              "aria-label": "phone number",
            }}
            containerClass="w-full"
            inputClass="w-full"
          />

          <textarea
            name="message"
            placeholder="Tell us about your requirements..."
            className="bg-muted/50 dark:bg-muted/80 w-full rounded-md border border-input px-3 py-2 text-sm"
            onChange={handleChange}
            required
            rows={3}
          />

          <Button
            type="submit"
            className="text-black font-bold hover:text-white"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Request Demo"}
          </Button>
        </form>
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
