import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

const turnstileSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, captchaToken }),
    });

    if (res.ok) {
      setIsSubmitting(false);
      setSubmitted(true);
    } else {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-[#060402] h-[860px] w-[1310px] text-white flex flex-col overflow-hidden rounded-xl">
      <div className="w-full py-4 px-4 bg-[#060402] border-b border-[#1c1c1c] flex items-center justify-center">
        <h1 className="text-[22px] font-semibold text-white">Contact</h1>
      </div>

      <div className="flex-1 overflow-auto px-4 flex items-center justify-center">
        <div className="w-full max-w-lg">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#30D158] flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#060402]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-[22px] font-semibold text-white">
                Message Sent
              </h2>
              <p className="text-[#999999] text-[17px] max-w-xs">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6 py-8">
              <div className="space-y-6">
                <div className="mb-1">
                  <p className="text-[#999999] text-[13px] font-medium uppercase tracking-wide mb-1 px-4">
                    Your Details
                  </p>
                  <div className="rounded-xl overflow-hidden bg-[#111111] divide-y divide-[#1a1a1a] shadow-md">
                    <div className="py-3 px-4">
                      <label
                        htmlFor="name"
                        className="block text-[17px] text-[#999999] mb-1"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full bg-transparent text-[17px] text-white placeholder-[#555555] outline-none"
                        required
                      />
                    </div>
                    <div className="py-3 px-4">
                      <label
                        htmlFor="email"
                        className="block text-[17px] text-[#999999] mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full bg-transparent text-[17px] text-white placeholder-[#555555] outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[#999999] text-[13px] font-medium uppercase tracking-wide mb-1 px-4">
                    Message
                  </p>
                  <div className="rounded-xl overflow-hidden bg-[#111111] shadow-md">
                    <div className="py-3 px-4">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={6}
                        className="w-full bg-transparent text-[17px] text-white placeholder-[#555555] outline-none resize-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Turnstile
                siteKey={turnstileSiteKey}
                onSuccess={setCaptchaToken}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-xl text-[17px] font-semibold text-white cursor-pointer ${
                  isSubmitting ? "bg-[#30D158]/70" : "bg-[#30D158]"
                } shadow-md active:bg-[#2BC153] transition-colors`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin mr-2 h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="w-full py-6 px-4 bg-[#060402] border-t border-[#1c1c1c] flex items-center justify-center">
        <div className="w-32 h-1 bg-[#333333] rounded-full opacity-60"></div>
      </div>
    </div>
  );
}
