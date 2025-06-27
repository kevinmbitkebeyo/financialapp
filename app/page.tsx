"use client"

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
const [lang, setLang] = useState("fr");
const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-4 py-8">
      <div className="absolute top-6 left-6 flex items-center gap-2">
  <Image
    src="/hero1.jpg"
    alt="Cuisinart Logo"
    width={40}
    height={40}
    className="h-10 w-10 object-contain rounded-full"
  />
  <span className="font-bold text-lg text-gray-800">Cuisinart</span>
</div>
      {/* Lang Selector */}
      <div className="absolute top-6 right-6">
        <Select defaultValue={lang} onValueChange={(value) => setLang(value)}>
          <SelectTrigger className="w-[120px] bg-white shadow-sm">
            <SelectValue placeholder="Langue" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fr">🇫🇷 Français</SelectItem>
            <SelectItem value="en">🇬🇧 English</SelectItem>
            <SelectItem value="es">🇪🇸 Español</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto mt-10">
        {/* Text and Buttons */}
        <div className="text-center lg:text-left space-y-6 lg:max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
            Tout ce que j&apos;aime
          </h1>
          <p className="text-gray-600 text-lg">
           Rentabiliser vos investissements grace à ma plateforme. Téléchargez l&apos;application, créez votre compte et commencez votre aventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button onClick={()=>router.push("/register")} className="w-full sm:w-auto">Se connecter</Button>
            <Button  onClick={()=>router.push("/login")} variant="outline" className="w-full sm:w-auto">S&apos;inscrire</Button>
            <Button variant="ghost" className="w-full sm:w-auto">Télécharger</Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[500px] xl:w-[600px] shadow-lg rounded-2xl overflow-hidden">
          <Image
            src="/hero.jpg" // Nom basé sur le fichier uploadé
            alt="Produits Cuisinart"
            width={1200}
            height={800}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
