"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { PiEnvelopeSimpleDuotone, PiPhoneCallDuotone, PiWhatsappLogoDuotone } from "react-icons/pi";

type BaseProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

type ContactActionProps = BaseProps & {
  action: "email" | "phone" | "bitrix" | "whatsapp";
};

export function ContactAction({ action, ...rest }: ContactActionProps) {
  const actions = {
    email: <EmailAction />,
    phone: <PhoneAction />,
    bitrix: <BitrixAction />,
    whatsapp: <WhatsappAction />,
  };

  return (
    <li className="px-4 py-5" {...rest}>
      {actions[action]}
    </li>
  );
}

function EmailAction() {
  const t = useTranslations();

  return (
    <Link
      href="mailto:atendimento@sosdocs.com.br"
      target="_blank"
      className="flex items-center gap-3"
    >
      <span className="grid h-12 w-12 place-content-center rounded-full bg-blue-600 text-xl text-white">
        <PiEnvelopeSimpleDuotone size={28} />
      </span>
      <span>
        <strong className="block text-lg leading-4 font-medium">
          {t("shared.contact-actions.email.title")}
        </strong>
        <small>{t("shared.contact-actions.email.text")}</small>
      </span>
    </Link>
  );
}

function PhoneAction() {
  const t = useTranslations();

  return (
    <Link href="tel:08005911478" target="_blank" className="flex items-center gap-3">
      <span className="grid h-12 w-12 place-content-center rounded-full bg-blue-600 text-xl text-white">
        <PiPhoneCallDuotone size={28} />
      </span>
      <span>
        <strong className="block text-lg leading-4 font-medium">
          {t("shared.contact-actions.phone.title")}
        </strong>
        <small>{t("shared.contact-actions.phone.text")}</small>
      </span>
    </Link>
  );
}

function BitrixAction() {
  const t = useTranslations();

  return (
    <Link
      href="https://docz.sosdocs.com.br/Docz/bitrix24"
      target="_blank"
      className="flex items-center gap-3"
    >
      <span className="grid h-12 w-12 place-content-center rounded-full bg-sky-500 text-xl text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 42" className="h-8 w-8">
          <path
            className="fill-white"
            fillRule="evenodd"
            d="M19.06 8c3.13 0 6.193 1.239 8.41 3.52q.208.208.403.425a11.8 11.8 0 0 0-3.094-.01c-3.14-2.266-7.46-2.513-11-.35-4.693 2.869-6.062 8.996-3.194 13.625l.261.391-.978 3.716 3.781-.978.391.196a9.2 9.2 0 0 0 2.137.948c.518.882 1.148 1.69 1.87 2.405a11.5 11.5 0 0 1-4.724-1.398L7 32.12l1.695-6.193c-.978-1.825-1.565-3.846-1.565-5.932C7.065 13.41 12.41 8 19.06 8m.897 8.857c1.737-1.788 4.139-2.759 6.591-2.759 5.211 0 9.4 4.24 9.35 9.4 0 1.636-.46 3.22-1.226 4.65L36 33.002l-4.956-1.277c-1.38.766-2.912 1.124-4.445 1.124-5.16 0-9.35-4.24-9.35-9.401 0-2.504.971-4.854 2.708-6.591m4.897 4.718c0-.672-.556-.907-1.147-.907-.791 0-1.441.259-2.044.53l-.414-1.237c.674-.306 1.608-.647 2.718-.647 1.738 0 2.577.871 2.577 2.096 0 1.213-.947 1.932-1.859 2.624-.698.531-1.377 1.046-1.592 1.757h3.557v1.366h-5.66c.192-2.316 1.567-3.313 2.622-4.078.689-.499 1.242-.9 1.242-1.504m4.288 2.436h.709v-.836c0-.6.047-1.296.07-1.449l-1.76 2.32c.141-.012.709-.035.98-.035m-2.776.27 3.9-4.946h1.158v4.676h1.158v1.295h-1.158v1.85h-1.572v-1.85h-3.486z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span>
        <strong className="block text-lg leading-4 font-medium">
          {t("shared.contact-actions.bitrix.title")}
        </strong>
        <small>{t("shared.contact-actions.bitrix.text")}</small>
      </span>
    </Link>
  );
}

function WhatsappAction() {
  const t = useTranslations();

  return (
    <Link
      href="https://wa.me/558005911478?text=Atendimento%20Docz"
      target="_blank"
      className="flex items-center gap-3"
    >
      <span className="grid h-12 w-12 place-content-center rounded-full bg-green-500 text-xl text-white">
        <PiWhatsappLogoDuotone size={28} />
      </span>
      <span>
        <strong className="block text-lg leading-4 font-medium">
          {t("shared.contact-actions.whatsapp.title")}
        </strong>
        <small>{t("shared.contact-actions.whatsapp.text")}</small>
      </span>
    </Link>
  );
}
