import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate sending
        await new Promise((r) => setTimeout(r, 1000));
        setIsLoading(false);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
    };

    return (
        <section className="relative flex items-center c-space section-spacing" id="contact">
            {/* Particles background effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: "hsl(var(--foreground) / 0.2)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center max-w-md p-6 mx-auto border rounded-2xl w-full" style={{
                borderColor: "hsl(var(--border))",
                background: "hsl(var(--primary))",
            }}>
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Let's Talk</h2>
                    <p className="text-muted-foreground">
                        Whether you're looking to build a new website, improve your existing
                        platform, or bring a unique project to life, I'm here to help.
                    </p>
                    <div className="flex flex-col gap-2 text-muted-foreground">
                        <p>Email: Khushisaraswat916@gmail.com</p>
                        <p>Phone: +91-9256553471</p>
                    </div>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input"
                            placeholder="john@email.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="field-input"
                            placeholder="Share your thoughts..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-lg text-center rounded-lg cursor-pointer hover-animation transition-all"
                        style={{ background: "linear-gradient(135deg, hsl(var(--lavender)), hsl(var(--royal)))" }}
                    >
                        {!isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
