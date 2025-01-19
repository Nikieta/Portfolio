import { CardContact } from "../components/CardContact";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { z } from "zod";
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Check for dark mode preference on initial load
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required").max(100, "Full name is too long"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required").max(150, "Subject is too long"),
    message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    const validationResult = formSchema.safeParse(formData);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map((err) => err.message).join("\n");
      alert(`Form validation failed:\n${errorMessages}`);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Failed to submit the form.");
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
        <CardContact handleSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  );
}

