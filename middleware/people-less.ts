import { usePeople } from "@/store/people";

export default defineNuxtRouteMiddleware(() => {
  const store = usePeople();
  const { people } = store;
  if (!people || Object.keys(people).length === 0) return navigateTo("/");
});
