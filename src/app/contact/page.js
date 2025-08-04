export default function contactPage() {
  return (
    <div className="px-5 md:px-20 py-10 text-white-muted md:text-xl w-lvw">
      <h1 data-aos='fade-down' className="text-6xl w-fit  mx-auto">Contact</h1>
      <h2 data-aos='fade-down' className="text-green-glow text-3xl mx-auto my-2 w-fit">Get In Touch</h2>
      <p data-aos='fade-up' className="text-center mb-5">Feel free to reach out to me via the form below or by email <br />mohitdeveloperg@gmail.com</p>
      <div className="grid lg:px-20  lg:grid-cols-[1.3fr_1fr] gap-10 ">
        <form
          data-aos="zoom-in-right"
          action={process.env.NEXT_PUBLIC_CONTACT_SITE_LINK} method="POST" encType="multipart/form-data"
          className="border border-blue-chakra flex flex-col bg-[#1976d225] rounded-lg p-3 md:p-5"
        >
          <label htmlFor="name" className="text-green-glow mb-2">Name</label>
          <input type="text" id="name" name="name" required className="border mb-4 p-2 rounded-md border-blue-chakra outline-green-primary" />

          <label htmlFor="email" className="mb-2 text-green-glow">Email</label>
          <input type="email" id="email" name="email" required className="border mb-4 p-2 rounded-md border-blue-chakra outline-green-primary" />

          <label htmlFor="message" className="mb-2 text-green-glow">Message</label>
          <textarea id="message" name="message" required className="border h-40 mb-4 p-2 rounded-md border-blue-chakra resize-none outline-green-primary" />

          <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_CONTACT_SITE_KEY}></div>

          <button type="submit" aria-label="Send message" className="bg-green-primary mt-2 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Send Message
          </button>
        </form>


        <div data-aos='zoom-in-left' className="border border-green-primary hover:shadow-blue-glow shadow-xs flex flex-col h-fit bg-[#00a76f11] rounded-lg p-3 md:p-5">
          <h2 className=" text-2xl mb-2 text-green-glow">Also find me on </h2>
          <div className="flex flex-col gap-2">
            <a target="_blank" href="mailto:mohitdeveloperg@gmail.com" ><i className="fa-solid text-green-primary fa-envelope" /> mohitdeveloperg@gmail.com</a>
            <a target="_blank" href="https://instagram.com/mellifluousguy_" ><i className="fa-brands text-saffron-primary fa-instagram" /> mellifluousguy_</a>
            <a target="_blank" href="https://linkedin.com/in/mellifluousguy" ><i className="fa-brands text-blue-chakra fa-linkedin" /> mellifluousguy</a>
            <a target="_blank" href="https://github.com/mellifluousguy" ><i className="fa-brands fa-github" /> mellifluousguy</a>
          </div>

        </div>
      </div>
    </div>
  )
}
