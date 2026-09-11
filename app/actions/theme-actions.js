"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { HERO_VERSION_COOKIE } from "@/lib/theme";

export async function setHeroVersion(version) {
  const next = version === "B" ? "B" : "A";
  const cookieStore = await cookies();
  cookieStore.set(HERO_VERSION_COOKIE, next, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  revalidatePath("/");
}
