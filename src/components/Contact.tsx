import { eventConfig } from "@/config/event";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { MessageCircle, Phone, User, HelpCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="kontak"
      aria-labelledby="contact-heading"
      className="bg-white py-16 sm:py-24 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-border bg-surface-subtle px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>LAYANAN INFORMASI</span>
          </div>

          <h2
            id="contact-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Kontak Panitia
          </h2>

          <p className="mt-3 text-base text-text-muted">
            Ada pertanyaan mengenai kegiatan, pendaftaran, atau materi pelatihan? Tim narahubung kami siap membantu Anda.
          </p>
        </div>

        {/* 2 Contact Cards */}
        <div className="mt-12 mx-auto max-w-3xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          {eventConfig.contacts.map((contact) => (
            <div
              key={contact.name}
              className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-muted p-6 sm:p-7 shadow-card transition-all hover:border-primary-border hover:bg-white hover:shadow-dropdown"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-subtle border border-primary-border text-primary">
                    <User className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Narahubung Resmi
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-text-main">
                      {contact.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-border-subtle bg-white p-3.5 text-center">
                  <span className="text-xs text-text-subtle font-medium block">
                    Nomor Telepon / WhatsApp
                  </span>
                  <span className="font-mono text-base font-bold text-text-main mt-0.5 block tracking-wide">
                    {contact.phoneFormatted}
                  </span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Call */}
              <div className="mt-6 pt-5 border-t border-border-subtle flex flex-col gap-2.5">
                <a
                  href={contact.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary transition-colors"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Chat WhatsApp</span>
                </a>

                <a
                  href={contact.telLink}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary-border bg-white px-4 text-sm font-semibold text-primary hover:bg-surface-subtle focus-visible:outline-primary transition-colors"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Hubungi via Telepon</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Note */}
        <div className="mt-8 mx-auto max-w-xl rounded-xl border border-dashed border-border-subtle bg-surface-muted p-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-text-main">
            <HelpCircle className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
            <span>Jam Pelayanan Informasi</span>
          </div>
          <p className="mt-1 text-xs text-text-muted">
            Layanan pesan dan konsultasi dijawab pada hari kerja (Senin–Jumat pukul 08.00–17.00 WIB).
          </p>
        </div>
      </div>
    </section>
  );
}
