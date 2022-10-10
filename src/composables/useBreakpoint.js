import { computed, onMounted, onUnmounted, ref } from "vue";

export default function useBreakpoint() {
  let windowWidth = ref(window.innerWidth);
  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));

  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    let size = "sm";
    if (windowWidth.value > 549 && windowWidth.value < 1200) size = "md";
    if (windowWidth.value > 1199) size = "lg";
    return size;
  });

  return {
    type,
  };
}
