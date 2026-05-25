import Container from "@/components/layout/Container";
import Link from "next/link";

type IconProps = {
  className?: string;
};

const MailIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    fill="currentColor"
  >
    <path d="M61.4 64C27.5 64 0 91.5 0 125.4V384c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V125.4C512 91.5 484.5 64 450.6 64H61.4zM464 192.3V384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192.3l154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4c0-7.4 6-13.4 13.4-13.4h389.2c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={className}
    fill="currentColor"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9C384.2 43.4 352.4 35.2 316.5 33 279.5 30.9 168.6 30.9 131.6 33 95.8 34.7 64 42.9 37.7 69.1 11.5 95.3 3.3 127.1 1.1 163c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const contacts = [
  {
    social: "Email",
    name: "hi@hippiefactory.com",
    url: "mailto:hi@hippiefactory.com",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: MailIcon,
  },
  {
    social: "Instagram",
    name: "@hippiefactory",
    url: "https://instagram.com/hippiefactory",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
    icon: InstagramIcon,
  },
];

export default function Contact() {
  return (
    <Container>
      <section className="space-y-8 py-10">
        <div className="relative text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-white/10" />

            <span className="text-xs uppercase tracking-[0.4em] text-white/35">
              CONTACT US
            </span>

            <div className="h-px w-16 bg-white/10" />
          </div>

          <h1 className="text-5xl font-black leading-none md:text-8xl">
            Let&apos;s Connect!
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/45">
            Open for collaborations, partnerships, and creative projects.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206.2665310863294!2d110.63445307666282!3d-7.668195895206967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1779713541483!5m2!1sid!2sid"
            loading="lazy"
            className="h-80 w-full grayscale"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/3
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/5
                "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl border backdrop-blur-xl
                        ${item.border}
                        ${item.bg}
                        ${item.color}
                      `}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                        {item.social}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="
                      text-2xl text-white/20
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-white
                    "
                  >
                    ↗
                  </span>
                </div>

                <div
                  className="
                    absolute inset-0 opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      absolute -right-12 -top-12
                      h-40 w-40 rounded-full
                      bg-white/3
                      blur-3xl
                    "
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
