import { CardContact } from "../components/CardContact";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { z } from "zod";
import { useEffect, useState } from "react";

export default function Contact() {
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);


  const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required").max(100, "Full name is too long"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required").max(150, "Subject is too long"),
    message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      fullName: event.target.fullName.value.trim(),
      email: event.target.email.value.trim(),
      subject: event.target.subject.value.trim(),
      message: event.target.message.value.trim(),
    };

    console.log("Submitting form data:", formData);

    const validationResult = formSchema.safeParse(formData);
    if (!validationResult.success) {
      const errors = validationResult.error.format();
      setFormErrors(errors); 
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Response from server:", responseData);

      if (response.ok) {
        alert(responseData.message || "Form submitted successfully.");
        event.target.reset();
        setFormErrors({}); 
      } else {
        alert(`Failed to submit the form. Server error: ${responseData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />
      <main className="flex-grow">
        <CardContact handleSubmit={handleSubmit} formErrors={formErrors} />
      </main>
      <Footer />
    </div>
  );
}
