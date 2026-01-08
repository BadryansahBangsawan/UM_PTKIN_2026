import { Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t-4 border-primary bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">KONTAK KAMI</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">
                  UIN Sayyid Ali Rahmatullah Tulungagung
                </span>
              </li>
              <li className="text-primary-foreground/80">
                Jl. Mayor Sujadi Timur No. 46 Plosokandang, Kedungwaru,
                Tulungagung, Jawa Timur 66221
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@um.ptkin.ac.id"
                  className="hover:underline"
                >
                  info@um.ptkin.ac.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <a
                  href="https://um.ptkin.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  https://um.ptkin.ac.id
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">HELPDESK</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:081578901030" className="hover:underline">
                  081578901030 (Call)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="https://wa.me/6281578901030?text=Halo%20Helpdesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  081578901030 (WA Chat)
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">PANITIA</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="http://www.kemenag.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Kementerian Agama RI © 2026
                </a>
              </li>
            </ul>
            <div>
              <h5 className="mb-2 text-sm font-medium">Didukung Oleh:</h5>
              <img
                src="/logo-bank-mandiri.png"
                alt="Bank Mandiri"
                className="h-24 w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
