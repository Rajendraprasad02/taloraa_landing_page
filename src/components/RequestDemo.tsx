import { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "react-toastify";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

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
    setLoading(true);

    try {
      await axios.post(`${API_URL}/request-demo`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Demo request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit demo request. Please try again.");
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
            country={"us"}
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
            className="text-black font-bold"
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
