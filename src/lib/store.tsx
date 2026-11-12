"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Product } from "./data";

export type CartItem = { product: Product; qty: number };

type StoreCtx = {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (p: Product) => void;
  isWishlisted: (slug: string) => boolean;
  cartCount: number;
  cartTotal: number;
};

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const c = localStorage.getItem("ib-cart");
      const w = localStorage.getItem("ib-wishlist");
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {}
  }, []);
  useEffect(() => { localStorage.setItem("ib-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("ib-wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const addToCart = (p: Product, qty = 1) => {
    setCart((prev) => {
      const ex = prev.find((i) => i.product.slug === p.slug);
      if (ex) return prev.map((i) => i.product.slug === p.slug ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product: p, qty }];
    });
  };
  const removeFromCart = (slug: string) => setCart((prev) => prev.filter((i) => i.product.slug !== slug));
  const updateQty = (slug: string, qty: number) => setCart((prev) => prev.map((i) => i.product.slug === slug ? { ...i, qty: Math.max(1, qty) } : i));
  const clearCart = () => setCart([]);
  const toggleWishlist = (p: Product) => setWishlist((prev) => prev.some((x) => x.slug === p.slug) ? prev.filter((x) => x.slug !== p.slug) : [...prev, p]);
  const isWishlisted = (slug: string) => wishlist.some((x) => x.slug === slug);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

  return <Ctx.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateQty, clearCart, toggleWishlist, isWishlisted, cartCount, cartTotal }}>{children}</Ctx.Provider>;
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
