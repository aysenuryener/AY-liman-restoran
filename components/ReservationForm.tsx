"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  const message = `Merhaba, ${site.name} için rezervasyon talebim:%0AAd Soyad: ${name}%0ATelefon: ${phone}%0ATarih: ${date}%0ASaat: ${time}%0AKişi Sayısı: ${guests}`;
  const whatsappNumber = site.phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="rezervasyon" className="bg-cream-soft px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center font-serif text-3xl tracking-wide sm:text-4xl">
          Rezervasyon
        </h2>
        <form
          className="mt-10 space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            window.open(whatsappHref, "_blank", "noopener,noreferrer");
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm uppercase tracking-widest text-ink/60">
              Ad Soyad
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm uppercase tracking-widest text-ink/60">
              Telefon
            </label>
            <input
              id="phone"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="mt-1 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-terracotta"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="text-sm uppercase tracking-widest text-ink/60">
                Tarih
              </label>
              <input
                id="date"
                type="date"
                required
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="mt-1 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label htmlFor="time" className="text-sm uppercase tracking-widest text-ink/60">
                Saat
              </label>
              <input
                id="time"
                type="time"
                required
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className="mt-1 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-terracotta"
              />
            </div>
          </div>
          <div>
            <label htmlFor="guests" className="text-sm uppercase tracking-widest text-ink/60">
              Kişi Sayısı
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              required
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="mt-1 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none focus:border-terracotta"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-terracotta px-8 py-3 text-base font-medium text-cream-soft transition-colors hover:bg-amber"
          >
            WhatsApp ile Gönder
          </button>
        </form>
      </div>
    </section>
  );
}
