import { Mail } from "lucide-react";

import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <Container>
      <section className="mx-auto max-w-3xl py-24 text-center">
        <h1 className="text-6xl font-black">Contact</h1>

        <p className="mt-6 text-white/60">
          Let’s build the future vape movement.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl p-10">
            <Mail className="mx-auto mb-6 text-cyan-300" size={40} />
            <h3 className="text-2xl font-bold">Email</h3>
            <p className="mt-3 text-white/60">hello@hippiefactory.com</p>
          </div>

          <div className="rounded-3xl p-10">
            <Mail className="mx-auto mb-6 text-fuchsia-300" size={40} />
            <h3 className="text-2xl font-bold">Instagram</h3>
            <p className="mt-3 text-white/60">@hippiefactory</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
