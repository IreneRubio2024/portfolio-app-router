import { cookies } from "next/headers";

export const HERO_VERSION_COOKIE = "heroVersion";

export async function getHeroVersion() {
  const cookieStore = await cookies();
  const value = cookieStore.get(HERO_VERSION_COOKIE)?.value;
  return value === "B" ? "B" : "A";
}
