import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TanstackProvider from "../providers/TanstackProvider";
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "Saint-louis",
  description: "Saint-Louis",
};

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
 
  return (
    <html lang={locale}  dir={dir(locale)}>

      <body className={poppins.className}>
        <TanstackProvider>          
        {children}
        </TanstackProvider>
        
        </body>
    </html>
  );
}
