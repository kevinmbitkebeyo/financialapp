"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, MessageCircle, MessageCircleCode } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    code: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.repeatPassword) {
      alert("❌ Les mots de passe ne correspondent pas !");
      return;
    }
    alert("✅ Connexion réussie !");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <Card className="w-[400px] shadow-xl rounded-2xl border border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-800">
            Créer un compte
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm text-gray-700">
                Numero WhatsApp
              </Label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-3.5 text-gray-400" size={16} />
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="ex: 6737637"
                  className="pl-9"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-sm text-gray-700">
                Mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={16} />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-9 pr-10"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="absolute right-3 top-3.5 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </span>
              </div>
            </div>

            {/* Repeat Password */}
            <div>
              <Label htmlFor="repeatPassword" className="text-sm text-gray-700">
                Confirmer le mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={16} />
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-9 pr-10"
                  value={form.repeatPassword}
                  onChange={handleChange}
                  required
                />
                 <span
                  className="absolute right-3 top-3.5 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </span>
              </div>
            </div>
            <div>
              <Label htmlFor="code" className="text-sm text-gray-700">
                Entrer le code d&apos;invitation
              </Label>
              <div className="relative">
                <MessageCircleCode className="absolute left-3 top-3.5 text-gray-400" size={16} />
                <Input
                  id="code"
                  name="code"
                  type="text"
                  placeholder="ex:3232"
                  className="pl-9 pr-10"
                  onChange={handleChange}
                  value={form.code}
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 mt-2 rounded-xl"
            >
              S&apos;incrire
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
