import { Car, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { BellIcon as BrandTelegram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Car className="h-6 w-6" />
              <span>Nexline</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner in finding the perfect vehicle. Excellence in automotive sales since 2010.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://t.me/NexlineBusinesGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <BrandTelegram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vehicles" className="text-muted-foreground hover:text-primary">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-muted-foreground hover:text-primary">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Vehicle Import
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Vehicle Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Maintenance Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Test Drive
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Bole Road, Next to Millennium Hall
                <br />
                Addis Ababa, Ethiopia
              </li>
              <li>
                <Link href="tel:+251911234567" className="text-muted-foreground hover:text-primary">
                  +251 91 123 4567
                </Link>
              </li>
              <li>
                <Link href="mailto:info@nexline.et" className="text-muted-foreground hover:text-primary">
                  info@nexline.et
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexline Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

